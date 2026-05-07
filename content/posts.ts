export type PostBlock =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "quote"; text: string };

export type Post = {
  slug: string;
  title: string;
  description: string;
  date: string;
  readingTime: string;
  tags: string[];
  body: PostBlock[];
};

export const POSTS: Post[] = [
  {
    slug: "foretrace-cheapest-matcher-first",
    title: "Cheapest matcher first. LLMs only when joins fail.",
    description:
      "Foretrace is a foreclosure research pipeline that scrapes county data, joins it against Excel tax records, and only calls GPT-4o on the residue. Why deterministic-first matching beat the all-AI version on cost, trust, and reviewability.",
    date: "2026-05-06",
    readingTime: "7 min read",
    tags: ["Automation", "Data Pipelines", "LLMs", "Foretrace"],
    body: [
      {
        type: "p",
        text: "Foretrace is a private client automation I built under Vanta Solutions. It scrapes foreclosure listings from county sources, joins them against the client's Excel tax records, and publishes the matched results inside the Obsidian CRM the client already opens every morning. Multi-day workflow, ~10-minute run.",
      },
      {
        type: "p",
        text: "The interesting part isn't the scraping. It's how the matching layer is built — and where the LLM is, and where it isn't.",
      },

      { type: "h2", text: "The friction the client lived with" },
      {
        type: "p",
        text: "Before Foretrace, the workflow was: open county foreclosure portals, copy listings, switch to Excel tax records, eyeball the address and lot fields, decide if it's the same property, paste resolved matches into Obsidian, then build a deal sheet. Repeat per county, per day. Competitors moving the same public data were getting to deals first.",
      },

      { type: "h2", text: "Why scraping wasn't the hard part" },
      {
        type: "p",
        text: "Collecting the data is mechanical. Counties publish foreclosure listings on Salesweb. Excel tax records sit on the client's machine. A few parallel workers and you have everything in memory. The hard part is what comes next: deciding which scraped listing corresponds to which tax record when the addresses are formatted differently, the lot data is inconsistent, and the county-specific metadata doesn't line up.",
      },
      {
        type: "p",
        text: "This is record linkage, and it's the actual product.",
      },

      { type: "h2", text: "Deterministic matching first" },
      {
        type: "p",
        text: "The temptation with a problem like this is to throw an LLM at the whole join and ask it to figure out which records refer to the same property. That works. It's also expensive, slow, hard to review, and impossible to audit when a match goes wrong.",
      },
      {
        type: "p",
        text: "Foretrace runs deterministic joins first — exact matches on cleaned-up lot and address fields. Most records resolve here. They're cheap, fast, and the client can verify any one of them by reading two columns. No LLM call, no token cost, no opacity.",
      },

      { type: "h2", text: "GPT-4o only on the residue" },
      {
        type: "p",
        text: "What deterministic matching can't resolve flows to GPT-4o. These are the genuinely ambiguous cases — different street formatting, missing lot info, two records that look like they could be the same property but don't share a clean key.",
      },
      {
        type: "p",
        text: "The resolver isn't asked to decide unilaterally. It's asked to surface the candidate match and the reason, and the result lands in Obsidian as a one-button resolve. The client clicks accept, reject, or skip. That keeps a human in the loop on exactly the cases where automation is least trustworthy, without burning their attention on the easy ones.",
      },
      {
        type: "quote",
        text: "Use the cheapest matcher that works, and only fall back when it doesn't.",
      },

      { type: "h2", text: "The dashboard the client already had" },
      {
        type: "p",
        text: "The original prototype was a Streamlit app. It worked. Nobody used it. The client already lived in Obsidian — that's where deal notes, follow-ups, and historical research already sat. Adding a second tool meant adding a second place to check.",
      },
      {
        type: "p",
        text: "So the dashboard moved into Obsidian. Foretrace writes its results as Markdown files into the client's existing vault. Resolve actions are inline links. Deal-sheet exports drop into the same folder structure the client was already using. The pipeline became invisible — the client just opens Obsidian and the work is there.",
      },

      { type: "h2", text: "What this proved" },
      {
        type: "p",
        text: "The all-AI version of this product was easier to build. The version that ships is harder, because most of the engineering is in the boundaries — between county portals and a clean schema, between deterministic matches and LLM fallbacks, between a pipeline and a CRM the client already trusts. None of that is glamorous. All of it is the product.",
      },
      {
        type: "p",
        text: "Foretrace turned a multi-day research workflow into a ~10-minute run. It helped the client move on opportunities faster than competitors and contributed to tens of thousands of dollars in sales. The unsexy decisions — deterministic-first, LLM-only-when-needed, output-where-the-client-works — are the ones that did it.",
      },
    ],
  },
  {
    slug: "videomamba-bimamba-bug",
    title: "One silent flag was worth 50 accuracy points",
    description:
      "How a kwarg getting absorbed by mamba_ssm made our VideoMamba run train unidirectional for 10 epochs — and what fixing it taught me about ML engineering.",
    date: "2026-05-06",
    readingTime: "6 min read",
    tags: ["ML", "PyTorch", "State-Space Models", "Debugging"],
    body: [
      {
        type: "p",
        text: "We were benchmarking ten deep-learning model families on Something-Something v2 for CAP 5610. I owned VideoMamba — the state-space-model entry. Going in, the architecture had a published 49.4% top-1 on SSv2 in the original paper. Our run collapsed to 1.45% over 10 epochs.",
      },
      {
        type: "p",
        text: "On the same architecture, on the same data, with the K400 checkpoint loaded, the model could not beat random guessing on a 174-class problem by more than a couple points. Something was wrong, and it wasn't the model.",
      },

      { type: "h2", text: "The collapse" },
      {
        type: "p",
        text: "Loss came down. Training looked normal. Validation top-1 hovered at 1.45%. Top-5 was barely above random. The training curve had the right shape and the wrong numbers — which is the worst possible failure mode, because it doesn't look like a bug.",
      },

      { type: "h2", text: "Debugging the silence" },
      {
        type: "p",
        text: "The bundled `videomamba.py` constructed Mamba blocks with `bimamba=True`. That flag is the whole point of VideoMamba — it's what makes the SSM bidirectional, giving the model access to future patches in the sequence. Without it, you have a unidirectional state-space model trying to learn a task that requires reasoning about temporal symmetry.",
      },
      {
        type: "p",
        text: "The Mamba constructor in `mamba_ssm` accepts `**kwargs`. If you pass it a flag it doesn't recognize, it silently absorbs it as an unused parameter. No warning, no error, no log line. `bimamba=True` was being eaten by the kwargs handler and never wired into the forward pass. The model had been training unidirectional the entire time.",
      },
      {
        type: "quote",
        text: "The Mamba constructor in mamba_ssm accepts **kwargs. If you pass it a flag it doesn't recognize, it silently absorbs it.",
      },

      { type: "h2", text: "Rewriting for correctness" },
      {
        type: "p",
        text: "The fix wasn't a config change. It meant reading the `mamba_ssm` source to understand the selective-scan parameter layout, then rewriting the Bimamba class so that forward and backward scans were both explicitly built and the parameter names matched the released K400 checkpoint exactly.",
      },
      {
        type: "p",
        text: "The released checkpoint stores forward and backward parameters as `A`, `B`, `C`, `D` and `A_b`, `B_b`, `C_b`, `D_b`. If your class doesn't expose those names, the load silently leaves the backward scan uninitialized. So the rewrite had to match the checkpoint's naming convention, not just the math.",
      },

      { type: "h2", text: "The cost of precision" },
      {
        type: "p",
        text: "Matching the parameter layout meant using the explicit selective-scan path instead of the fused CUDA kernel. The fused kernel is faster — about 3.5× faster on an A100 — but it expects a different parameter layout, and switching to it would have meant either re-naming the checkpoint tensors (fragile) or training from scratch (we tried; it gave us 1.45%).",
      },
      {
        type: "p",
        text: "So the trade was: keep the fused kernel and lose the pretraining, or keep the pretraining and lose the kernel. Pretraining wins every time on SSv2. We took the throughput hit and kept the A100 running for 3.5 hours per epoch.",
      },

      { type: "h2", text: "The payoff" },
      {
        type: "p",
        text: "On the same data, with the same hyperparameters, two epochs of the corrected bidirectional model got us 53.91% top-1 and 82.73% top-5 — third in the benchmark, behind only V-JEPA's frozen-probe reference (64.51%) and a Qwen3.5-4B QLoRA fine-tune (58.19%), and 7 points above an R(2+1)D run that had trained for 30 epochs.",
      },
      {
        type: "p",
        text: "The training curve was monotonic at stop — 50.13% at epoch 1, 53.86% at epoch 2, with no overfitting signal. Conservative extrapolation to the full 15-epoch schedule lands the model in the 58–62% range, which would put it within reach of V-JEPA without any architecture changes.",
      },

      { type: "h2", text: "The lesson" },
      {
        type: "p",
        text: "The 50-point delta between the unidirectional run (1.45%) and the bidirectional run (53.91%) on identical data is a louder signal than any ablation study. Bidirectional SSMs fit video. The point isn't that bidirectionality matters — every paper says that. The point is that one silent kwarg buried under a layer of `**kwargs` was worth more than every other architecture decision in the project combined.",
      },
      {
        type: "p",
        text: "ML engineering is mostly correctness work. Models, papers, and configs all assume the wrapper layer between them is doing what it claims. When training looks normal but the numbers are wrong, the bug is almost never in the model — it's in the boundary where two libraries meet and one of them stopped paying attention.",
      },
    ],
  },
  {
    slug: "eastside-system-around-the-llm",
    title: "Eastside: the system around the LLM is the product",
    description:
      "AI character quality doesn't come from prompts. It comes from the durable state around the model — memory, scenes, relationships, and proactive scheduling. A walk through how Eastside is built.",
    date: "2026-05-06",
    readingTime: "8 min read",
    tags: ["AI Agents", "RAG", "System Design", "Eastside"],
    body: [
      {
        type: "p",
        text: "Eastside is an AI visual novel set in Easthaven — a fictional city where users discover characters through FINDR, build persistent relationships, and launch location-bound scenes. The hard part of building it was never the LLM call. It was everything around the LLM call.",
      },
      {
        type: "p",
        text: "Most AI character experiences feel temporary. Characters lack continuity, wait passively for users to start the conversation, and exist outside any believable world. The illusion breaks within a few sessions. Eastside's bet is that durable narrative state — not better prompts — is what makes characters feel alive.",
      },

      { type: "h2", text: "The state problem" },
      {
        type: "p",
        text: "Every turn in Eastside has to answer six questions before the LLM ever sees a token:",
      },
      {
        type: "ul",
        items: [
          "Who is the user, and what do they care about?",
          "Which character is speaking right now?",
          "What location or scene is active?",
          "Which memories are relevant to this turn?",
          "Who else was present, and how do they fit in?",
          "Should this character reach out later, on their own?",
        ],
      },
      {
        type: "p",
        text: "None of that lives in a prompt. It lives in a relational backend designed for narrative continuity. Conversations aren't stateless API calls — they're slices of an ongoing world.",
      },

      { type: "h2", text: "The architecture" },
      {
        type: "p",
        text: "Eastside is a React/Vite frontend over a PostgreSQL/Prisma backend, with a vector memory layer on pgvector and AI orchestration through OpenRouter. Cloudflare R2 holds the media. Ollama handles local classification work where hosted inference would be wasteful.",
      },
      {
        type: "ul",
        items: [
          "FINDR discovery cards and cinematic modals on the frontend",
          "Users, personas, NPCs, locations, and threads modeled in Postgres via Prisma",
          "Scene containers that scope chat context to a location",
          "pgvector memory store keyed per character–user pair",
          "OpenRouter routing with prompt templates scoped by channel and location",
          "Proactive scheduling and token usage logging on the server",
        ],
      },

      { type: "h2", text: "Memory that survives long conversations" },
      {
        type: "p",
        text: "The memory system is the part that has to work, or the whole platform falls apart. Eastside writes memories on a per-character, per-user basis. Retrieval runs before each turn against pgvector and merges with structured profile facts before the LLM call.",
      },
      {
        type: "p",
        text: "The hard part wasn't ingestion. It was preventing context bloat without losing continuity, and preventing memories from one character from leaking into another's perspective. Cross-character memory is a feature in group chats and a bug everywhere else.",
      },

      { type: "h2", text: "Proactive messaging without spam" },
      {
        type: "p",
        text: "Characters initiate contact based on personality, inactivity windows, and relationship milestones. The scheduler is invisible to the user — they just open the app and someone they were talking to has reached out. The cadence has to feel alive without feeling needy. That's tuned per-character, not globally.",
      },

      { type: "h2", text: "Scenes and locations" },
      {
        type: "p",
        text: "Easthaven is a city, not a character roster. Locations carry context — inviting a character to a coffee shop changes what's appropriate to talk about and which other characters might wander by. Group chat memory lets multiple characters share a scene and react to social dynamics in it.",
      },

      { type: "h2", text: "What this proves" },
      {
        type: "quote",
        text: "AI character quality comes from the system around the LLM — state modeling, retrieval, UI context, scheduling, analytics, iteration loops — not from prompts alone.",
      },
      {
        type: "p",
        text: "Eastside is in private alpha under Vanta Solutions. Memory, proactive scheduling, FINDR discovery, and scene containers are architected and partially shipped. The near-term roadmap is auth, deployment, the dev dashboard, character content, image systems, a simple map, memory polish, telemetry, and friend alpha testing.",
      },
      {
        type: "p",
        text: "If you're building something where AI characters need to feel persistent and aware — or if you've hit the same state-management wall — I'd like to hear about it.",
      },
    ],
  },
];

export function getPost(slug: string): Post | undefined {
  return POSTS.find((p) => p.slug === slug);
}

export const PUBLISHED_POSTS = POSTS;
