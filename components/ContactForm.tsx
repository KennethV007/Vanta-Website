"use client";

import { useState, type FormEvent } from "react";
import { BIO } from "@/content/bio";

const PROJECT_TYPES = [
  "AI / LLM product",
  "Full-stack web app",
  "Automation / scraping",
  "Mobile / Flutter",
  "Dashboard / internal tool",
  "Just exploring",
];

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [type, setType] = useState(PROJECT_TYPES[0]);
  const [message, setMessage] = useState("");

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    const subject = `New inquiry from ${name || "website"} — ${type}`;
    const body = [
      `Name: ${name}`,
      `Email: ${email}`,
      `Project type: ${type}`,
      "",
      message,
    ].join("\n");
    const href = `mailto:${BIO.email}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;
    window.location.href = href;
  }

  const inputCls =
    "w-full rounded-lg bg-white/[0.03] hairline px-3.5 py-2.5 text-[15px] text-ink-50 placeholder:text-ink-400 focus:outline-none focus:border-accent-400 focus:bg-white/[0.05] transition-colors";

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <div className="grid gap-4 md:grid-cols-2">
        <label className="block">
          <span className="block text-xs font-mono uppercase tracking-[0.18em] text-ink-400 mb-1.5">
            Name
          </span>
          <input
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            className={inputCls}
            placeholder="Jane Doe"
          />
        </label>
        <label className="block">
          <span className="block text-xs font-mono uppercase tracking-[0.18em] text-ink-400 mb-1.5">
            Email
          </span>
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={inputCls}
            placeholder="you@company.com"
          />
        </label>
      </div>

      <label className="block">
        <span className="block text-xs font-mono uppercase tracking-[0.18em] text-ink-400 mb-1.5">
          Project type
        </span>
        <select
          value={type}
          onChange={(e) => setType(e.target.value)}
          className={inputCls}
        >
          {PROJECT_TYPES.map((t) => (
            <option key={t} value={t} className="bg-ink-900">
              {t}
            </option>
          ))}
        </select>
      </label>

      <label className="block">
        <span className="block text-xs font-mono uppercase tracking-[0.18em] text-ink-400 mb-1.5">
          Message
        </span>
        <textarea
          required
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          rows={6}
          className={inputCls}
          placeholder="Tell me about what you're trying to build..."
        />
      </label>

      <button
        type="submit"
        className="inline-flex items-center justify-center rounded-full bg-accent-500 px-6 py-3 text-sm font-medium text-white shadow-[0_0_30px_-8px_rgba(110,85,255,0.7)] hover:bg-accent-400 transition-colors"
      >
        Send via email
        <span aria-hidden className="ml-2">→</span>
      </button>
      <p className="text-xs text-ink-400">
        This opens your email client with a draft to{" "}
        <span className="text-ink-200">{BIO.email}</span>.
      </p>
    </form>
  );
}
