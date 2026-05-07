import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Reveal from "@/components/motion/Reveal";
import WordReveal from "@/components/motion/WordReveal";
import MagneticCTA from "@/components/motion/MagneticCTA";
import { POSTS, getPost } from "@/content/posts";

type Params = { slug: string };

export function generateStaticParams() {
  return POSTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return { title: "Post not found" };
  return { title: post.title, description: post.description };
}

export default async function BlogPost({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const dateLabel = new Date(post.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <article className="relative mx-auto max-w-3xl px-5 md:px-8 pt-16 md:pt-20 pb-24">
      <div aria-hidden className="absolute inset-x-0 top-0 h-[40vh] glow-warm pointer-events-none" />

      <Reveal on="mount" y={6}>
        <Link
          href="/blog"
          className="inline-flex items-center text-sm text-coal-400 hover:text-coal-200 mb-10 link-underline"
        >
          <span aria-hidden className="mr-1">←</span> All notes
        </Link>
      </Reveal>

      <Reveal on="mount" delay={0.1}>
        <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-bone-300 mb-4">
          {dateLabel} • {post.readingTime}
        </p>
      </Reveal>

      <h1 className="font-display text-4xl md:text-6xl font-semibold tracking-tight leading-[1.04]">
        <WordReveal stagger={0.05} delay={0.18}>
          {post.title}
        </WordReveal>
      </h1>

      <Reveal on="mount" delay={0.55}>
        <p className="mt-5 text-lg text-coal-300 leading-relaxed">
          {post.description}
        </p>
      </Reveal>

      <Reveal on="mount" delay={0.7}>
        <div className="mt-6 flex flex-wrap gap-2">
          {post.tags.map((t) => (
            <span
              key={t}
              className="inline-block rounded-full hairline bg-white/[0.03] px-3 py-1 text-[12px] text-coal-200"
            >
              {t}
            </span>
          ))}
        </div>
      </Reveal>

      <div className="mt-14 space-y-7">
        {post.body.map((block, i) => {
          if (block.type === "h2") {
            return (
              <Reveal key={i}>
                <h2 className="font-display text-2xl md:text-3xl font-semibold tracking-tight text-coal-50 mt-6">
                  {block.text}
                </h2>
              </Reveal>
            );
          }
          if (block.type === "h3") {
            return (
              <Reveal key={i}>
                <h3 className="font-display text-xl font-semibold text-coal-50 mt-4">
                  {block.text}
                </h3>
              </Reveal>
            );
          }
          if (block.type === "ul") {
            return (
              <Reveal key={i}>
                <ul className="space-y-2.5">
                  {block.items.map((item) => (
                    <li
                      key={item}
                      className="flex gap-3 text-coal-200 text-[17px] leading-[1.7]"
                    >
                      <span aria-hidden className="text-bone-300 mt-2 shrink-0">▸</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </Reveal>
            );
          }
          if (block.type === "quote") {
            return (
              <Reveal key={i}>
                <blockquote className="border-l-2 border-bone-300 pl-5 italic text-coal-100 text-[17px] leading-[1.7]">
                  {block.text}
                </blockquote>
              </Reveal>
            );
          }
          return (
            <Reveal key={i}>
              <p className="text-coal-200 text-[17px] leading-[1.7]">
                {block.text}
              </p>
            </Reveal>
          );
        })}
      </div>

      <Reveal>
        <div className="mt-20 rounded-2xl hairline-strong bg-white/[0.02] p-8 md:p-10">
          <p className="font-display text-2xl font-semibold tracking-tight">
            Working on something similar?
          </p>
          <p className="mt-3 text-coal-300 leading-relaxed">
            I&apos;d like to hear about it.
          </p>
          <MagneticCTA
            href="/contact"
            className="mt-5 inline-flex items-center rounded-full bg-bone-200 px-5 py-3 text-sm font-medium text-coal-950 hover:bg-bone-100 transition-colors"
          >
            Get in touch <span aria-hidden className="ml-2">→</span>
          </MagneticCTA>
        </div>
      </Reveal>
    </article>
  );
}
