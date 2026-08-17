import { v } from "convex/values";
import { mutation, query } from "./_generated/server";

/**
 * Contact / project inquiry form.
 *
 * The mutation stores every submission in the `inquiries` table — this is
 * real, working functionality with no external credentials required.
 *
 * Email notifications are an OPTIONAL extra handled by
 * `./inquiryEmail.ts`: if `RESEND_API_KEY` is set in the environment, each
 * new inquiry is also emailed to the site owner. Without the key, the
 * inquiry is still saved and no email is sent.
 */

const MAX_LEN = 4000;

function clean(value: string | undefined, max = 500): string {
  return (value ?? "").trim().slice(0, max);
}

export const submitInquiry = mutation({
  args: {
    name: v.string(),
    email: v.string(),
    phone: v.optional(v.string()),
    businessName: v.optional(v.string()),
    projectType: v.string(),
    budget: v.optional(v.string()),
    description: v.string(),
    preferredContact: v.optional(v.string()),
  },
  handler: async (ctx, args) => {
    // Trim + truncate everything server-side; the DB only ever sees clean data.
    const name = clean(args.name, 200);
    const email = clean(args.email, 200).toLowerCase();
    const description = clean(args.description, MAX_LEN);

    if (!name || !email || !description) {
      throw new Error("Name, email and project description are required.");
    }
    // Basic email shape check (RFC-lite) — prevents junk rows.
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      throw new Error("Please provide a valid email address.");
    }

    const id = await ctx.db.insert("inquiries", {
      name,
      email,
      phone: clean(args.phone, 40) || undefined,
      businessName: clean(args.businessName, 200) || undefined,
      projectType: clean(args.projectType, 100),
      budget: clean(args.budget, 100) || undefined,
      description,
      preferredContact: clean(args.preferredContact, 50) || undefined,
      status: "new",
    });

    return { success: true, id };
  },
});

export const getInquiry = query({
  args: { id: v.id("inquiries") },
  handler: async (ctx, args) => {
    return ctx.db.get(args.id);
  },
});

