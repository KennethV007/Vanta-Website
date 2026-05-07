Visual asset plan — what images / GIFs to add and where

     Context

     The site is text-rich and visually thin outside the home hero. Current state:
     - public/ has only the Vanta logo set + resume.pdf — zero project assets
     - ProjectCard is text-only (no image slot)
     - /projects/[slug] case studies are pure prose (no hero image, no inline visuals)
     - /blog/[slug] posts are pure prose
     - /about has no founder portrait
     - No OG/social-share images exist for any page

     Three of your projects have rich source material that wants to be visualized: Eastside is fundamentally a UI product (FINDR, cinematic spotlights, persistent-memory chats), VideoMamba has hard numbers (1.45% → 53.91% delta, 10-model 
     results, training curve), and Foretrace has an Obsidian dashboard — but with strict client-privacy constraints.

     This plan ranks the assets by impact per asset added, not by quantity. The goal is the smallest set of visuals that makes the site stop feeling like a wall of text.

     ---
     Tier 1 — highest impact (do these first)

     1. One 16:9 hero image per featured project (Foretrace, Eastside, Koridor)

     Where it slots: ProjectCard (currently text-only) and at the top of /projects/[slug] between the tagline and the Role/Stack box.

     Why: This is the single change with the biggest visual payoff. Right now the /projects page is a grid of text cards, and case studies open with a long text block. A 16:9 hero per project transforms both screens.

     Specs: 1600×900 PNG/WebP, dark background to match the coal-950 theme, file under 200 KB after compression.

     What each one should be:
     - Eastside → a real screenshot of the FINDR discovery view (cinematic 16:9 spotlight + grid of character cards). The doc's whole pitch is that this view exists and is the product's signature surface. If the live UI isn't presentable 
     yet, a high-fidelity Figma frame works.
     - Foretrace → an architecture diagram (boxes + arrows: county scrapers → normalization → deterministic matcher → GPT-4o fallback → Obsidian output). Do not screenshot the live Obsidian dashboard — the doc explicitly says no real     
     client data, no real addresses. A diagram sidesteps the privacy issue entirely while still saying "this is a real system."
     - Koridor → an agent-graph diagram (CEO-side agents, CTO-side agents, agent-to-agent DM arrows, company-memory layer). Same reasoning as Foretrace — a diagram beats a fake screenshot.

     File paths:
     - public/projects/foretrace-hero.png
     - public/projects/eastside-hero.png
     - public/projects/koridor-hero.png

     Code change to support these: add an optional heroImage?: string field to the Project type in content/projects.ts, render it in ProjectCard.tsx and app/projects/[slug]/page.tsx. Both already use next/image patterns elsewhere
     (Logo.tsx:1, HeroMark.tsx:4).

     2. Eastside FINDR GIF/MP4 (one short loop)

     Where it slots: Inline in the Eastside case study (/projects/eastside) between the "Architecture" and "Key features" sections, and inline in the Eastside blog post (/blog/eastside-system-around-the-llm) under the "The architecture"  
     section.

     Why: FINDR is described in the doc as cinematic and motion-driven (dynamic spotlight, animated cards, swipe-style discovery). A static screenshot undersells it. One 4–6 second loop of FINDR scrolling carries more weight than 200     
     words of description.

     Specs: MP4 H.264, 1280×720, ≤2 MB, autoplay-loop-muted-playsinline. (GIF works but is 5–10× the file size.) Use a <video> tag, not a GIF, for performance.

     Filename: public/projects/eastside-findr.mp4 (+ .webm fallback if you want to be thorough).

     3. VideoMamba results chart

     Where it slots: Top of the VideoMamba blog post (/blog/videomamba-bimamba-bug) under the second paragraph, and in the VideoMamba case study under "Outcome."

     Why: The whole post hinges on the 1.45% → 53.91% delta. A single bar chart of the 10-model benchmark (or just the 4 headline rows: V-JEPA / Qwen / VideoMamba post-fix / VideoMamba pre-fix) makes the punchline visceral in a way prose 
     can't.

     Specs: 1600×900 PNG, dark theme matching the site (coal-950 background, bone-200 text, bone-300 accent for the highlighted bar). Generate from final_report.docx numbers — no need for a real chart library, a one-shot Figma/Excalidraw 
     export is fine.

     Filename: public/blog/videomamba-results.png

     Bonus if it's easy: the training curve (50.13% → 53.86% across 2 epochs) as a small inline chart under "The payoff."

     ---
     Tier 2 — high impact, lower urgency

     4. Founder portrait on /about and /contact

     Where it slots: Top of /about next to the "Hi, I'm Kenneth" h1 (current layout is single-column — needs a small layout tweak to a 2-col grid above md), and as a small avatar in the /contact "Direct" block.

     Why: Personal site without a face reads as templated. The about page especially — three sections of text with no human in them.

     Specs: Square crop, 800×800 PNG/WebP, neutral background (the site's coal palette plays well with high-contrast black-and-white portraits).

     Filename: public/founder.png

     5. Architecture diagrams inline in case studies

     For each of the three featured projects, one inline architecture diagram beats six bullet points. The hero diagram from Tier 1 already covers Foretrace and Koridor. Eastside still needs one — its hero is a UI screenshot, so the      
     architecture (React/Vite → Postgres/Prisma → pgvector → OpenRouter → R2) is unillustrated.

     Where it slots: Eastside case study under "Architecture."

     Filename: public/projects/eastside-architecture.png

     6. OG / social-share images

     Currently any link to the site on Twitter/LinkedIn shows nothing. One default + one per case study + one per blog post.

     Specs: 1200×630 PNG, big title text + Vanta lockup, dark background.

     Filenames:
     - public/og/default.png — site-wide fallback
     - public/og/projects-{slug}.png — per case study
     - public/og/blog-{slug}.png — per blog post

     Code change: add openGraph.images to each page's metadata export (Next.js convention).

     ---
     Tier 3 — nice to have, can wait

     7. Eastside character card examples

     2–3 character profile cards (the doc mentions Hanami as a detailed example but warns to check which characters are publishable). Inline in the Eastside case study under "Key features." Only worth doing if Eastside has launch-ready   
     character art.

     8. Toptech "before / after" report-time visual

     For when you write the Toptech blog post (currently in drafts list). Bar chart: 30s → 1.5s. Trivial to make, high punch.

     9. Foretrace deal-sheet mockup

     One stylized, fully fake deal sheet showing the output format — entirely synthetic data ("123 Example St", placeholder lot numbers). Inline in the Foretrace case study under "Outcome." Only do this if you want to show output
     structure without privacy risk.

     10. Vanta Solutions wordmark variation on home

     The home hero has the HeroMark watermark but no foreground brand asset. A small lockup variation in the marquee row could tie things together. Lowest-priority.

     ---
     Anti-list — what NOT to add

     - No real Foretrace client data. No screenshots of the actual Obsidian vault, no real addresses, no real lot numbers. The doc is explicit on this. Diagrams or fully synthetic mockups only.
     - No stock photography. It will read as a template site immediately and wreck the tone the rest of the design is going for.
     - No 3D-rendered abstract "tech" art (gradients, neon meshes, etc.). The site is monochrome charcoal/bone for a reason.
     - No animated logos / mascots. The HeroMark already does the subtle motion job.
     - No screenshots of Space Force CLAW / Runner Form AI / Fitness App / OpenClaw / VideoMamba code. Those are summary-card projects without case studies — adding visuals there would suggest more depth than exists.

     ---
     Files that would need code changes to support the assets

     - content/projects.ts — add optional heroImage?: string and heroVideo?: string to the Project type
     - components/ProjectCard.tsx — render hero image at the top of the card when present
     - app/projects/[slug]/page.tsx — render hero image/video below tagline; add a way to inject inline images into case studies (simplest: add optional inlineImages?: { afterSection: string; src: string; alt: string }[] to CaseStudy, or 
     just hardcode per-project for now)
     - content/posts.ts — extend PostBlock with { type: "image"; src: string; alt: string; caption?: string } and { type: "video"; src: string; poster?: string }
     - app/blog/[slug]/page.tsx — render the new block types
     - app/about/page.tsx — add a 2-col grid above md: for portrait + intro

     None of these are large changes. The infrastructure work is ~1 hour; the actual asset production (the part you'd do, not me) is the real time sink.

     ---
     Recommended order to actually do this

     1. Make the 3 project hero images (Foretrace diagram, Eastside FINDR screenshot, Koridor agent diagram) — biggest visual lift for the smallest asset count
     2. Make the VideoMamba results chart — it's the punchline of the strongest blog post
     3. Drop a founder portrait — humanizes the entire site for one file
     4. Make the FINDR loop (MP4)
     5. OG images — invisible until someone shares the link, but the moment they do, you'll wish you had them

     ---
     Verification

     After assets are in place and the supporting code shipped:
     1. npm run dev and check /projects (cards now have heroes), each /projects/[slug] (hero below tagline, optional inline visuals), each blog post page, /about (portrait), /contact (avatar)
     2. Check link previews by sharing a /projects/eastside URL into a Slack DM or Twitter draft — confirm OG image loads
     3. Lighthouse run on / and one case study page — confirm no image is loading uncompressed (look for "properly size images" warnings)
     4. Run on a phone — confirm hero images aren't crushing the mobile layout

● Plan approved and saved. The asset list is in /home/kenny/.claude/plans/hey-claude-i-just-fizzy-sedgewick.md.

  TL;DR — what to make, in order

  Tier 1 (biggest visual payoff, smallest asset count)
  1. Three 16:9 project hero images (1600×900 PNG, dark)
    - public/projects/eastside-hero.png — real FINDR screenshot or Figma frame
    - public/projects/foretrace-hero.png — architecture diagram (no client data)
    - public/projects/koridor-hero.png — agent-graph diagram
  2. public/projects/eastside-findr.mp4 — 4–6 sec loop, 1280×720, ≤2 MB
  3. public/blog/videomamba-results.png — bar chart of the 4 headline benchmark rows (the 1.45% → 53.91% delta is the post's punchline)

  Tier 2
  4. public/founder.png — 800×800 portrait for /about + /contact
  5. public/projects/eastside-architecture.png — diagram inline in the case study
  6. OG images — public/og/default.png + per-page variants (1200×630)

  Tier 3 — only if convenient: Eastside character cards, Toptech 30s→1.5s bar chart, fully-fake Foretrace deal sheet mockup.

  Anti-list (don't make these)

  - Real Foretrace client data — diagrams or fully synthetic only
  - Stock photography
  - 3D/neon abstract "tech" art (breaks the monochrome system)
  - Visuals for the summary-card projects (Space Force CLAW, Runner Form AI, Fitness App, OpenClaw) — they don't have case studies yet, so adding art implies depth that isn't there

  When you have a couple of these ready, drop them in public/ and I'll wire up the Project type, ProjectCard, case-study page, and blog PostBlock to render them — that infrastructure work is ~1 hour.