"use client";

import { useState, type FormEvent } from "react";
import { m } from "framer-motion";
import { BIO } from "@/content/bio";

const PROJECT_TYPES = [
  "AI agent / RAG product",
  "Automation / scraping pipeline",
  "Full-stack web app",
  "Dashboard / internal tool",
  "Multi-agent workflow",
  "Just exploring",
];

const EASE = [0.22, 0.84, 0.34, 1] as const;

const fieldVariants = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
};

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
    "w-full rounded-lg bg-white/[0.03] hairline px-3.5 py-2.5 text-[15px] text-coal-50 placeholder:text-coal-400 focus:outline-none focus:border-bone-300 focus:bg-white/[0.05] transition-colors";

  return (
    <m.form
      onSubmit={onSubmit}
      className="space-y-4"
      initial="hidden"
      animate="show"
      variants={{
        hidden: {},
        show: { transition: { staggerChildren: 0.07, delayChildren: 0.1 } },
      }}
    >
      <m.div variants={fieldVariants} className="grid gap-4 md:grid-cols-2">
        <label className="block">
          <span className="block text-xs font-mono uppercase tracking-[0.18em] text-coal-400 mb-1.5">
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
          <span className="block text-xs font-mono uppercase tracking-[0.18em] text-coal-400 mb-1.5">
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
      </m.div>

      <m.label variants={fieldVariants} className="block">
        <span className="block text-xs font-mono uppercase tracking-[0.18em] text-coal-400 mb-1.5">
          Project type
        </span>
        <select
          value={type}
          onChange={(e) => setType(e.target.value)}
          className={inputCls}
        >
          {PROJECT_TYPES.map((t) => (
            <option key={t} value={t} className="bg-coal-900">
              {t}
            </option>
          ))}
        </select>
      </m.label>

      <m.label variants={fieldVariants} className="block">
        <span className="block text-xs font-mono uppercase tracking-[0.18em] text-coal-400 mb-1.5">
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
      </m.label>

      <m.div variants={fieldVariants} className="pt-2">
        <m.button
          type="submit"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          transition={{ type: "spring", stiffness: 400, damping: 22 }}
          className="inline-flex items-center justify-center rounded-full bg-bone-200 px-6 py-3 text-sm font-medium text-coal-950 shadow-[0_4px_30px_-12px_rgba(246,239,225,0.45)] hover:bg-bone-100 transition-colors"
        >
          Send via email
          <span aria-hidden className="ml-2">→</span>
        </m.button>
        <p className="mt-3 text-xs text-coal-400">
          This opens your email client with a draft to{" "}
          <span className="text-coal-200">{BIO.email}</span>.
        </p>
      </m.div>
    </m.form>
  );
}
