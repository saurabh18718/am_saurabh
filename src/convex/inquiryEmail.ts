"use node";

import { v } from "convex/values";
import { action } from "./_generated/server";
import { api } from "./_generated/api";

/**
 * Optional: email the site owner about a new inquiry.
 * Requires RESEND_API_KEY (and optionally RESEND_FROM) in env.
 *
 * This action deliberately no-ops (returns status "skipped") when the
 * Resend key is not configured — the inquiry itself is always saved by
 * `inquiries.submitInquiry`, so the contact form works with zero setup.
 */
export const sendInquiryEmail = action({
  args: {
    inquiryId: v.id("inquiries"),
    ownerEmail: v.string(),
  },
  handler: async (ctx, args) => {
    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      return { status: "skipped" as const, reason: "RESEND_API_KEY not configured" };
    }

    const inquiry = await ctx.runQuery(api.inquiries.getInquiry, {
      id: args.inquiryId,
    });
    if (!inquiry) {
      return { status: "skipped" as const, reason: "inquiry not found" };
    }

    const from = process.env.RESEND_FROM ?? "Saurav Singh <onboarding@resend.dev>";
    const body = [
      `New project inquiry from ${inquiry.name}`,
      "",
      `Project type: ${inquiry.projectType}`,
      `Budget: ${inquiry.budget ?? "Not specified"}`,
      `Business: ${inquiry.businessName ?? "Not specified"}`,
      `Phone: ${inquiry.phone ?? "Not specified"}`,
      `Preferred contact: ${inquiry.preferredContact ?? "Not specified"}`,
      `Email: ${inquiry.email}`,
      "",
      "Project description:",
      inquiry.description,
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
          replyTo: inquiry.email,
          subject: `New project inquiry — ${inquiry.projectType}`,
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
