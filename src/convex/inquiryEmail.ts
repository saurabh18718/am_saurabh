"use node";

import { v } from "convex/values";
import { action } from "./_generated/server";

/**
 * Email the site owner about a new inquiry.
 * Requires RESEND_API_KEY (and optionally RESEND_FROM) in env.
 *
 * The inquiry fields are passed in from the client — the inquiry itself is
 * always saved to the `inquiries` table by `inquiries.submitInquiry` first,
 * so this action is purely a notification.
 *
 * This action deliberately no-ops (returns status "skipped") when the
 * Resend key is not configured — the contact form works with zero setup.
 *
 * NOTE: this file intentionally does NOT import `api` from `_generated/api`.
 * Doing so would create a circular type dependency (TS7022), because this
 * file is part of the generated api module map.
 */
export const sendInquiryEmail = action({
  args: {
    inquiryId: v.id("inquiries"),
    ownerEmail: v.string(),
    name: v.string(),
    email: v.string(),
    phone: v.optional(v.string()),
    businessName: v.optional(v.string()),
    projectType: v.string(),
    budget: v.optional(v.string()),
    preferredContact: v.optional(v.string()),
    description: v.string(),
  },
  handler: async (_ctx, args) => {
    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      return { status: "skipped" as const, reason: "RESEND_API_KEY not configured" };
    }

    const from = process.env.RESEND_FROM ?? "Saurav Singh <onboarding@resend.dev>";
    const body = [
      `New project inquiry from ${args.name}`,
      "",
      `Project type: ${args.projectType}`,
      `Budget: ${args.budget ?? "Not specified"}`,
      `Business: ${args.businessName ?? "Not specified"}`,
      `Phone: ${args.phone ?? "Not specified"}`,
      `Preferred contact: ${args.preferredContact ?? "Not specified"}`,
      `Email: ${args.email}`,
      "",
      "Project description:",
      args.description,
    ].join("\n");

    try {
      const res = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from,
          to: [args.ownerEmail],
          replyTo: args.email,
          subject: `New project inquiry — ${args.projectType}`,
          text: body,
        }),
      });
      if (!res.ok) {
        return { status: "error" as const, reason: `Resend API responded ${res.status}` };
      }
      return { status: "sent" as const };
    } catch (err) {
      return {
        status: "error" as const,
        reason: err instanceof Error ? err.message : "unknown error",
      };
    }
  },
});
