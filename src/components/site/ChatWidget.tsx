import { Button } from "@/components/ui/button";
import { api } from "@/convex/_generated/api";
import { siteConfig, waLink } from "@/config/site";
import { useAction } from "convex/react";
import { Bot, Loader2, MessageCircle, Send, Sparkles, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";

interface ChatMessage {
  role: "user" | "assistant";
  content: string;
}

const WELCOME: ChatMessage = {
  role: "assistant",
  content:
    "Hi! I'm Saurav's AI assistant 👋 Ask me about his services, pricing, or how to start a project — I'll point you in the right direction.",
};

const QUICK_PROMPTS = [
  "What services do you offer?",
  "What does pricing look like?",
  "How do I start a project?",
];

const LOCAL_FALLBACK =
  "Sorry, I hit a snag. You can message Saurav directly on WhatsApp or use the contact form — he personally replies within 24 hours.";

export function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState("");
  const [sending, setSending] = useState(false);

  const chatWithAssistant = useAction(api.chat.chatWithAssistant);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (open && messages.length === 0) setMessages([WELCOME]);
  }, [open, messages.length]);

  useEffect(() => {
    const el = scrollRef.current;
    if (el) el.scrollTop = el.scrollHeight;
  }, [messages, sending, open]);

  const send = async (text: string) => {
    const content = text.trim();
    if (!content || sending) return;

    const history = [...messages, { role: "user" as const, content }];
    setMessages(history);
    setInput("");
    setSending(true);

    try {
      const result = await chatWithAssistant({ messages: history });
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: result.reply || LOCAL_FALLBACK },
      ]);
    } catch (err) {
      console.error("Chat request failed:", err);
      setMessages((prev) => [...prev, { role: "assistant", content: LOCAL_FALLBACK }]);
    } finally {
      setSending(false);
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    void send(input);
  };

  return (
    <>
      {/* Launcher */}
      <Button
        type="button"
        size="icon"
        aria-label={open ? "Close AI assistant" : "Open AI assistant"}
        onClick={() => setOpen((v) => !v)}
        className="fixed bottom-[4.9rem] right-5 z-40 size-13 rounded-full shadow-lg shadow-primary/30 transition-transform hover:scale-105"
      >
        {open ? <X className="size-6" /> : <Bot className="size-6" />}
      </Button>

      {/* Panel */}
      {open && (
        <div className="fixed bottom-[8.8rem] right-5 z-40 flex h-[min(34rem,calc(100dvh-11rem))] w-[min(23rem,calc(100vw-2.5rem))] flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-2xl">
          {/* Header */}
          <div className="flex items-center justify-between gap-3 border-b border-border bg-night px-4 py-3 text-night-foreground">
            <div className="flex items-center gap-2.5">
              <span className="relative inline-flex size-9 items-center justify-center rounded-full bg-primary/20 text-primary-foreground">
                <Sparkles className="size-4" />
                <span className="absolute -right-0.5 -top-0.5 size-2.5 rounded-full border-2 border-night bg-emerald-400" />
              </span>
              <div className="leading-tight">
                <p className="text-sm font-semibold">AI Assistant</p>
                <p className="text-[11px] text-night-muted">Answers about services & pricing</p>
              </div>
            </div>
            <Button
              type="button"
              variant="ghost"
              size="icon"
              className="size-8 text-night-muted hover:bg-white/10 hover:text-night-foreground"
              aria-label="Close"
              onClick={() => setOpen(false)}
            >
              <X className="size-4" />
            </Button>
          </div>

          {/* Messages */}
          <div ref={scrollRef} className="flex-1 space-y-3 overflow-y-auto p-4">
            {messages.map((m, i) => (
              <div
                key={i}
                className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[85%] whitespace-pre-wrap rounded-2xl px-3.5 py-2.5 text-sm leading-relaxed ${
                    m.role === "user"
                      ? "rounded-br-sm bg-primary text-primary-foreground"
                      : "rounded-bl-sm border border-border bg-muted/50 text-foreground"
                  }`}
                >
                  {m.content}
                </div>
              </div>
            ))}
            {sending && (
              <div className="flex justify-start">
                <div className="flex items-center gap-2 rounded-2xl rounded-bl-sm border border-border bg-muted/50 px-3.5 py-2.5 text-sm text-muted-foreground">
                  <Loader2 className="size-3.5 animate-spin" />
                  Thinking…
                </div>
              </div>
            )}
          </div>

          {/* Quick prompts */}
          {messages.length <= 1 && !sending && (
            <div className="flex flex-wrap gap-2 border-t border-border/60 px-4 py-3">
              {QUICK_PROMPTS.map((q) => (
                <button
                  key={q}
                  type="button"
                  onClick={() => void send(q)}
                  className="cursor-pointer rounded-full border border-primary/25 bg-primary/5 px-3 py-1.5 text-xs font-medium text-primary transition-colors hover:bg-primary/10"
                >
                  {q}
                </button>
              ))}
            </div>
          )}

          {/* Input */}
          <form onSubmit={handleSubmit} className="flex items-center gap-2 border-t border-border p-3">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about services, pricing…"
              aria-label="Message the AI assistant"
              maxLength={1000}
              className="h-10 flex-1 rounded-xl border border-input bg-background px-3.5 text-sm outline-none placeholder:text-muted-foreground focus-visible:border-primary focus-visible:ring-2 focus-visible:ring-primary/30"
            />
            <Button
              type="submit"
              size="icon"
              className="size-10 shrink-0 rounded-xl"
              disabled={sending || !input.trim()}
              aria-label="Send message"
            >
              {sending ? <Loader2 className="size-4 animate-spin" /> : <Send className="size-4" />}
            </Button>
          </form>

          {/* Footer note */}
          <div className="flex items-center justify-between border-t border-border/60 bg-muted/30 px-4 py-2 text-[11px] text-muted-foreground">
            <span>AI assistant · {siteConfig.name}</span>
            <a
              href={waLink("Hello Saurav, I was chatting with your AI assistant and have a question.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 font-medium text-primary hover:underline"
            >
              <MessageCircle className="size-3" />
              Talk to Saurav
            </a>
          </div>
        </div>
      )}
    </>
  );
}
