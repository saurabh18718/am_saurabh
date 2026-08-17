"use node";

import { v } from "convex/values";
import { action } from "./_generated/server";
import { vly } from "../lib/vly-integrations";

/**
 * AI site assistant — answers visitor questions about Saurav Singh's
 * services, pricing, process and contact details.
 *
 * Uses the project's existing VLY AI integration (see /integrations.md).
 * No external credentials needed; the VLY_INTEGRATION_KEY is injected
 * automatically by the platform.
 *
 * NOTE: keep this knowledge base in sync with `src/config/site.ts`.
 */

const SYSTEM_PROMPT = `You are the AI assistant on the website of Saurav Singh, an AI Product Manager and AI website developer based in India, working with clients worldwide.

YOUR JOB:
- Answer questions about Saurav's services, pricing, process, portfolio and how to start a project.
- Be warm, professional and concise (2-4 sentences usually). Use bullet lists only when genuinely helpful.
- If the visitor wants to start a project or get a quote, direct them to the contact page (or WhatsApp) — never invent a quote.
- If you don't know something, say so honestly and offer WhatsApp/email contact.

SERVICES (8):
1. Business Website Development — professional websites for businesses, startups, professionals and local businesses.
2. AI Website Development — websites with AI-powered features and intelligent user experiences.
3. AI Product Management — turning ideas into structured AI products: idea analysis, user research, requirements, PRD creation, feature planning and MVP plans.
4. AI Chatbot Development — custom AI chatbots for customer support and lead qualification, embedded on websites or WhatsApp.
5. Landing Page Development — high-converting single-page sites for products, services and campaigns.
6. Website Redesign — modernizing outdated websites into fast, premium, mobile-first experiences.
7. Business Automation — automating repetitive workflows, lead capture and follow-ups.
8. MVP Development — turning an idea into a functional minimum viable product.

PRICING (starting prices, final quote depends on scope):
- Starter Website: ₹25,000 starting — up to 5 pages, contact form, WhatsApp integration, basic SEO.
- Business Pro: ₹50,000 starting — up to 10 pages, lead forms, advanced SEO, analytics, CMS.
- AI Premium: ₹1,00,000 starting — everything in Business Pro plus AI chatbot, AI features, custom integrations, automation.
- Custom Enterprise: custom pricing for large businesses, SaaS and AI products.
All prices are in INR and starting prices only.

PROCESS (6 steps): Discovery, Strategy, Design, Development, Testing, Launch.
Typical timelines: landing pages 1-2 weeks, business websites 2-4 weeks, AI products/MVPs 4-8 weeks.

CONTACT:
- WhatsApp: +91 82994 45475 (reply within a few hours, usually same day)
- Email: yourname@gmail.com
- Response time: within 24 hours
- Location: India, available for remote projects worldwide
- The contact form is on the /contact page.

GUIDELINES:
- You are Saurav's AI assistant, not Saurav himself. If asked, clarify that Saurav personally reviews every inquiry and replies.
- Never invent prices, timelines, guarantees, or client results.
- Never claim to be human or to have worked on specific client projects.
- Keep answers in the same language as the visitor's question (default English).
- For anything outside your knowledge, suggest the contact form or WhatsApp.`;

const MAX_HISTORY = 12;
const MAX_MESSAGE_LEN = 1000;

const FALLBACK_REPLY =
  "I'm having trouble reaching my AI service right now. You can message Saurav directly on WhatsApp (+91 82994 45475) or use the contact form — he personally replies within 24 hours.";

export const chatWithAssistant = action({
  args: {
    messages: v.array(
      v.object({
        role: v.union(v.literal("user"), v.literal("assistant")),
        content: v.string(),
      }),
    ),
  },
  handler: async (_ctx, args) => {
    // Guard against abuse: cap history length and message size.
    const history = args.messages.slice(-MAX_HISTORY).map((m) => ({
      role: m.role,
      content: m.content.slice(0, MAX_MESSAGE_LEN),
    }));

    const messages = [
      { role: "system" as const, content: SYSTEM_PROMPT },
      ...history,
    ];

    if (!process.env.VLY_INTEGRATION_KEY) {
      return { reply: FALLBACK_REPLY, error: "AI integration key not configured" };
    }

    try {
      const result = await vly.ai.completion({
        model: "gpt-4o-mini",
        messages,
        temperature: 0.6,
        maxTokens: 400,
      });

      if (result.success && result.data?.choices?.[0]?.message?.content) {
        return { reply: result.data.choices[0].message.content.trim() };
      }
      return { reply: FALLBACK_REPLY, error: result.error ?? "Empty AI response" };
    } catch (err) {
      console.error("Chat action error:", err);
      return {
        reply: FALLBACK_REPLY,
        error: err instanceof Error ? err.message : "unknown error",
      };
    }
  },
});
