1. Project Identity
Project name
Foretrace
 This name is supported by your broader Vanta project context. In the notes you pasted here, the project name is not explicitly stated, so if you want the page to be strictly based only on this pasted text, label the name as Unconfirmed until you verify it.
Alternate names
Foretrace — recommended public/project name.
Foreclosure Tracking Dashboard — descriptive fallback.
Municipal Foreclosure Intelligence System — more enterprise/case-study framing.
Obsidian Foreclosure CRM Automation — accurate but less polished.
Salesweb + Tax Data Matcher — internal/technical label, not ideal for public branding.
One-line tagline
A Python-powered foreclosure intelligence workflow that turns scattered county listings and tax records into actionable deal sheets inside a client’s Obsidian CRM.
Short public description
Foretrace automates foreclosure research by collecting county listing data, matching it against Excel tax records, resolving uncertain property matches with GPT-4o, and publishing results into a client’s Obsidian-based CRM.
Medium public description
Foretrace is a custom data automation system built for foreclosure research. It uses Python to collect foreclosure listing data from multiple New Jersey county sources, joins those records against Excel-based tax data, applies intelligent matching logic when direct property matches fail, and pushes the final results into an Obsidian dashboard that fits the client’s existing workflow. The system evolved from an initial Streamlit prototype into a more integrated CRM-style dashboard with one-button resolves, parallel scraping, benchmarked worker performance, and deal sheet exports.
Long case-study description
Foretrace is a private client automation project under Vanta Solutions designed to reduce the manual effort involved in foreclosure research. Before the project, the workflow required searching county foreclosure listings, comparing records against tax datasets, resolving property identity mismatches, organizing results, and preparing deal sheets manually. The system automates that pipeline with a Python backend that scrapes county foreclosure data, ingests Excel tax files, performs structured matching against lot-level property data, and uses GPT-4o as a fallback resolver when deterministic matching cannot confidently identify a property.
The first version shipped as a Streamlit dashboard, which made the workflow visible and usable quickly. The next version was rebuilt around the client’s existing Obsidian CRM, allowing results to update directly into their existing workspace instead of forcing them into a separate tool. The upgraded workflow includes one-button resolve actions, intelligent property matching, parallel scraping and joining for speed, benchmark testing across different worker counts, and exports that generate deal sheets directly into the client’s deal sheet folder.
Professionally, this project is best framed as a real-world data engineering and automation system: a custom pipeline that combines scraping, file-based data ingestion, AI-assisted entity resolution, performance optimization, and client-specific workflow integration.
Category
Primary category:
Data automation / workflow automation / real estate intelligence
Secondary categories:
Backend engineering
Data engineering
AI-assisted data matching
Client software consulting
Internal tools
CRM automation
Python automation
Real estate operations technology
Status
Private client project / production-oriented internal tool
More precise status options:
Confirmed: It has at least two iterations: a Streamlit prototype and an upgraded Obsidian CRM integration.
Likely: It is actively used or intended for active client workflow.
Unknown: Exact production status, number of active users, deployment environment, and maintenance schedule.
Recommended public status label:
Private Client Build
Alternative labels:
Client Automation System
Internal Workflow Tool
Production-Oriented Prototype
Active Client Project if you can confirm it is actively used.
Timeline
From the notes:
Iteration 1: Basic Streamlit dashboard.
Iteration 2: Obsidian CRM integration.
Exact dates: Unknown.
Recommended timeline format:
2026 — Private client automation project
Or, if you want to avoid exact claims:
Private client engagement, ongoing/refined through multiple iterations
Audience
Primary audience:
Private foreclosure/property research client.
Secondary audience for portfolio:
Recruiters
Backend/data engineering teams
AI/ML engineering teams
Full-stack engineering teams
Consulting clients
Technical reviewers
Professors or academic evaluators
Startup/product-minded readers
Visibility
Recommended visibility:
Partially public
Why:
The technical architecture can be discussed.
The client’s private data should not be shown.
Exact foreclosure targets, deal sheets, private tax records, client workflow details, and any source-specific scraping behavior should be sanitized.
The page should avoid making the project sound like it bypasses website restrictions or automates anything against terms of service.
Best way to frame this project professionally
Frame it as:
A client-specific data automation system that integrates public listing research, local tax datasets, AI-assisted property matching, and CRM workflow automation.
Strong framing phrases:
“Built a Python data pipeline for foreclosure research automation.”
“Integrated county listing data with Excel tax records for property-level matching.”
“Added AI-assisted entity resolution for ambiguous property records.”
“Optimized scraping and joining workflows with parallel processing benchmarks.”
“Migrated from a standalone Streamlit prototype into a client’s existing Obsidian CRM.”
“Designed the tool around the client’s real operational workflow rather than forcing adoption of a separate app.”
What the project should NOT be framed as
Avoid framing it as:
A bot for bypassing website restrictions.
A guaranteed foreclosure deal finder.
A legal, financial, or investment advisory product.
A “real estate AI” that makes investment decisions.
A generic scraper with no product thinking.
A black-box AI system replacing human judgment.
A tool that automatically exploits court/county websites.
A public SaaS product unless you actually turn it into one.
A fully autonomous purchasing or bidding system.
Better language:
“Research automation”
“Data aggregation”
“Property record matching”
“Workflow acceleration”
“Client-side CRM integration”
“Human-in-the-loop review”
Why this project matters
Foretrace matters because it solves a real business problem: foreclosure research is slow, fragmented, and error-prone when handled manually. The project turns a scattered workflow into an organized system that collects records, matches them against tax data, resolves ambiguity, updates the client’s workspace, and exports deal sheets.
For your portfolio, it matters because it proves you can do more than build toy apps. It shows you can:
Understand a client’s messy real-world process.
Build data pipelines around imperfect external sources.
Combine deterministic matching with AI-assisted fallback logic.
Optimize performance with parallel workers and benchmarks.
Integrate into an existing workflow instead of forcing a new one.
Deliver software that supports a business outcome.

2. Core Narrative
The story of the project
Foreclosure research is not just “looking up properties.” It is a chain of small, repetitive, high-friction tasks: search county portals, gather listing details, compare those details against tax data, confirm lot and property identity, organize possible matches, decide what is worth reviewing, and prepare deal sheets.
Before Foretrace, this process depended heavily on manual searching and cross-referencing. A client had to move between county listing pages, Excel tax files, and their own CRM notes. Every mismatch slowed the workflow down. Every ambiguous address or lot record created another manual check. Every exported deal sheet had to be organized carefully so that the client could act on the opportunity later.
Foretrace turned that workflow into a system. The Python backend collects foreclosure listing data from multiple New Jersey counties, joins it against Excel tax datasets, attempts deterministic property matching, and then calls GPT-4o when a record cannot be confidently matched programmatically. The results are pushed into the client’s Obsidian CRM, where they can review properties, resolve ambiguous matches, and export deal sheets directly into the correct folder.
The project began as a Streamlit dashboard, which was useful for proving the workflow. But the more important product decision was the second iteration: moving the experience into the client’s existing Obsidian CRM. Instead of asking the client to adopt a separate dashboard, Foretrace became part of the workflow they already used.
What problem existed before this project
The client’s foreclosure research workflow involved too much manual work:
County foreclosure data lived on separate county-specific websites.
Tax/property data lived in Excel files.
Matching foreclosure listings to tax records required careful comparison.
Some records could not be matched cleanly with simple rules.
Exporting deal sheets was a separate organizational step.
The client’s working environment was already Obsidian, so a separate dashboard could create workflow friction.
Why the problem mattered
The problem mattered because timing and accuracy are critical in foreclosure research. If the client spends too long gathering and matching data, they lose speed. If property matching is wrong, they risk wasting time on bad leads. If deal sheets are not organized, opportunities become harder to act on.
The business value is not just “automation.” The value is compressing a research-heavy workflow into a faster, more repeatable, more organized process.
Who the project was for
Confirmed:
A private client doing foreclosure/property research.
The client uses Obsidian as a CRM/workspace.
The client works with foreclosure listing data and Excel tax records.
Likely but unconfirmed:
The client evaluates foreclosure opportunities for real estate deals.
The client needs to move quickly on potential opportunities.
The client benefits from standardized deal sheet exports.
What the project does
Foretrace:
Scrapes foreclosure listing information from Salesweb across several New Jersey counties.
Ingests Excel tax data.
Joins foreclosure results against tax records.
Uses programmatic matching where possible.
Calls GPT-4o when deterministic matching cannot resolve a property.
Benchmarks scraping performance across different worker counts.
Presents results in an initial Streamlit dashboard.
Evolves into an Obsidian dashboard integrated with the client’s CRM.
Supports one-button resolve actions.
Exports deal sheets directly into the client’s deal sheet folder.
What makes it technically interesting
The technically interesting part is the combination of several non-trivial systems:
Multi-county scraping.
Parallel worker architecture.
Excel tax data ingestion.
Property identity matching.
AI-assisted fallback matching.
Streamlit prototyping.
Obsidian dashboard generation.
File/folder-based export workflow.
Benchmarking worker counts for performance.
Human-in-the-loop review for uncertain matches.
This is stronger than a normal scraper because the real difficulty is not only collecting data. The harder part is making the data useful inside the client’s actual decision workflow.
What makes it valuable from a business/product perspective
The product value is that it meets the client where they already work.
Instead of creating a shiny standalone dashboard that the client might ignore, the system was upgraded into their Obsidian CRM. That means the tool is not just technically functional; it is operationally useful.
Business/product value:
Saves manual research time.
Reduces repetitive copying and cross-checking.
Creates a consistent property review pipeline.
Improves organization of deal sheets.
Helps the client focus on evaluating opportunities instead of preparing data.
Supports faster decision-making.
Preserves human review where automation is uncertain.
What makes it impressive for a portfolio
Foretrace is impressive because it shows:
Real client requirements.
Messy data handling.
Backend automation.
AI used practically, not as a gimmick.
Performance optimization through parallel scraping.
Evolution from prototype to workflow-integrated product.
Business-aware engineering decisions.
Strong “I can ship useful tools for real people” credibility.
Simplest explanation for non-technical visitors
Foretrace helps a real estate client research foreclosure opportunities faster. It gathers county foreclosure listings, compares them with tax records, flags likely property matches, and organizes everything inside the client’s existing Obsidian workspace so they can review and export deal sheets more easily.
Stronger explanation for technical visitors
Foretrace is a Python-based data automation pipeline that scrapes foreclosure listings from multiple county portals, normalizes the collected records, joins them against Excel-based tax data, applies deterministic property matching, and falls back to GPT-4o for ambiguous entity resolution. The system was first prototyped in Streamlit and later integrated into an Obsidian CRM through generated dashboard files, resolve actions, and deal sheet exports. Performance was evaluated with worker-count benchmarks to optimize parallel scraping and joining.
Most impressive way to describe it without exaggerating
Built a private client foreclosure intelligence system that combines Python scraping, Excel tax-data ingestion, AI-assisted property matching, parallel processing benchmarks, and Obsidian CRM integration to turn fragmented public listing research into an organized deal-review workflow.

3. Professional Positioning
For recruiters
What they care about
Recruiters care about whether this sounds real, useful, technically meaningful, and relevant to the roles you are applying for.
Emphasize
Python automation.
Backend/data pipeline.
Client-facing delivery.
AI-assisted matching.
Performance benchmarking.
Real business workflow.
Streamlit prototype to integrated CRM evolution.
Avoid
Too much detail about scraping a specific website.
Anything that sounds legally risky.
Overly real-estate-specific jargon.
Unsupported impact numbers.
Best wording
Designed and built a private client data automation system that aggregates foreclosure listing data, matches it against Excel tax records, uses GPT-4o for ambiguous property resolution, and publishes results into an Obsidian-based CRM workflow.
For backend/data engineering roles
What they care about
Data ingestion.
Pipeline design.
Matching logic.
Parallel processing.
Error handling.
File-based integration.
Performance measurement.
Emphasize
Python backend.
Multi-source data collection.
Excel ingestion.
Property record normalization.
Deterministic matching plus AI fallback.
Worker benchmarks.
Export generation.
Avoid
Calling it just a “dashboard.”
Over-focusing on UI.
Vague “AI automation” language.
Best wording
Built a Python data pipeline for multi-county foreclosure research, including parallel scraping, Excel tax-data ingestion, deterministic record matching, GPT-4o fallback resolution, and file-based exports into a client CRM.
For AI/ML engineering roles
What they care about
Practical use of LLMs.
Human-in-the-loop workflows.
Entity resolution.
Confidence boundaries.
Avoiding overuse of AI.
Combining rules with model calls.
Emphasize
GPT-4o was not the whole system.
Programmatic matching came first.
LLM was used only when deterministic logic failed.
AI assisted ambiguous matching, not final legal/financial decisions.
Human review remained part of the flow.
Avoid
Saying “AI-powered foreclosure predictor.”
Claiming model accuracy without benchmarks.
Saying GPT made final investment decisions.
Best wording
Used GPT-4o as a targeted fallback for ambiguous property matching after deterministic matching rules failed, keeping the workflow human-reviewable while improving coverage on messy records.
For full-stack engineering roles
What they care about
User-facing product flow.
Backend/frontend integration.
Iterative product development.
Dashboard design.
Real user workflow.
Emphasize
Streamlit prototype.
Obsidian CRM integration.
One-button resolve actions.
Export workflow.
Client-specific UI decisions.
Avoid
Making the frontend sound like a massive SaaS platform.
Claiming authentication, cloud deployment, or database features unless confirmed.
Best wording
Shipped an end-to-end client workflow from Python data collection to dashboard review, first through a Streamlit prototype and then through a custom Obsidian CRM integration with resolve actions and deal sheet exports.
For startup/founder credibility
What they care about
Finding a real pain point.
Building around a user’s workflow.
Iterating from MVP to stronger product.
Translating software into business value.
Client communication and delivery.
Emphasize
You built for a paying/private client.
You started with a fast prototype.
You adapted to the client’s actual CRM.
You improved operational speed.
You handled a messy real-world workflow.
Avoid
Making it sound like a generic freelance script.
Overstating it as a venture-scale product unless you plan to productize it.
Best wording
Foretrace started as a practical automation prototype and evolved into a workflow-integrated client tool, showing the ability to discover a manual business bottleneck, ship quickly, and refine the product around how the client actually works.
For clients
What they care about
Can you save them time?
Can you understand their process?
Can you build around their existing tools?
Can you handle messy data?
Can you deliver without requiring a big new platform?
Emphasize
Custom workflow integration.
Dashboard updates inside existing CRM.
Deal sheet exports.
Human-in-the-loop review.
Less manual research.
Practical automation.
Avoid
Too much engineering jargon.
Emphasizing “scraping” in a way that sounds risky.
Talking about AI as magic.
Best wording
I built a custom research automation workflow that gathers property data, matches it with tax records, highlights uncertain cases for review, and organizes the results directly inside the client’s existing CRM.
For professors/academic evaluators
What they care about
Problem definition.
System design.
Data processing.
Algorithmic matching.
AI fallback logic.
Performance benchmarking.
Tradeoffs.
Emphasize
Entity resolution.
Deterministic vs probabilistic/LLM-assisted matching.
Benchmarking worker counts.
Data normalization.
Software engineering iteration.
Avoid
Business hype.
Unsupported claims about revenue impact.
Best wording
The project combines data collection, normalization, record linkage, LLM-assisted ambiguity resolution, and performance benchmarking in a real-world information retrieval workflow.
For technical interviewers
What they care about
What exactly did you build?
Why did you make architectural choices?
How did you handle edge cases?
How did you test performance?
How did you prevent bad AI outputs?
How did you make it usable?
Emphasize
Pipeline stages.
Matching strategy.
GPT fallback boundaries.
Worker benchmarks.
Obsidian integration.
Export generation.
Avoid
Hand-wavy “AI did it” explanations.
Saying “100% accurate” unless you have proof.
Hiding the hard parts.
Best wording
The core challenge was record linkage across messy foreclosure and tax datasets. I treated exact and rule-based matches as the first pass, then used GPT-4o only as a fallback for ambiguous cases, with the results surfaced for human review inside the client’s Obsidian workflow.

4. Technical Stack
Confirmed stack
These are explicitly supported by your notes.
Python
Role: Main scripting/backend language for scraping, matching, joining, benchmarking, and exports.
 Why it matters: Shows backend/data automation skill.
 Portfolio phrasing: “Python backend pipeline for scraping, data normalization, matching, and export automation.”
 Best placement: Project card, case study, resume bullet, blog post.
Salesweb
Role: Source website for foreclosure information across several New Jersey counties.
 Why it matters: Shows real-world external data collection.
 Portfolio phrasing: Use carefully. Publicly, prefer “county foreclosure listing portals” unless you have permission and are comfortable naming the source.
 Best placement: Case study/private technical writeup. Avoid overemphasizing on homepage.
Excel tax data
Role: Local/property tax dataset used for joining and matching lots.
 Why it matters: Shows file-based data ingestion and real data integration.
 Portfolio phrasing: “Excel-based tax records used as a secondary dataset for property-level matching.”
 Best placement: Case study, resume bullet, technical blog.
GPT-4o
Role: Fallback resolver for records that cannot be programmatically matched.
 Why it matters: Practical AI usage.
 Portfolio phrasing: “GPT-4o-assisted entity resolution for ambiguous property matches.”
 Best placement: Case study, AI/ML section, resume bullet.
Streamlit
Role: First dashboard iteration.
 Why it matters: Shows fast prototyping and user-facing data app development.
 Portfolio phrasing: “Initial Streamlit dashboard used to validate the workflow before deeper CRM integration.”
 Best placement: Case study timeline, technical stack, blog post.
Obsidian
Role: Client’s existing CRM/workspace where upgraded dashboard lives.
 Why it matters: Shows integration into existing user workflow.
 Portfolio phrasing: “Obsidian-based CRM integration with generated dashboard updates and deal sheet exports.”
 Best placement: Case study, product/design discussion, homepage card.
Parallel scraping/workers
Role: Performance optimization for scraping and joining.
 Why it matters: Shows concurrency and benchmarking.
 Portfolio phrasing: “Benchmarked worker counts to tune parallel scraping performance.”
 Best placement: Resume bullet, backend/data section, technical blog.
Deal sheet folder export
Role: Output system that exports deal sheets directly into the client’s folder.
 Why it matters: Shows practical workflow automation.
 Portfolio phrasing: “Automated exports into the client’s deal sheet folder.”
 Best placement: Client-facing copy, case study, demo visuals.

Likely stack
These seem likely based on the notes, but should be verified before public use.
pandas
Why likely: Excel ingestion, joining, and data processing are commonly handled with pandas in Python.
 Do not claim unless verified: “pandas-powered ETL” or “DataFrame pipeline.”
 If confirmed: Excellent for backend/data engineering positioning.
openpyxl
Why likely: Common Python library for reading/writing Excel files.
 Do not claim unless verified: Excel parsing/export implementation.
requests / BeautifulSoup / lxml
Why likely: Common scraping stack for static websites.
 Do not claim unless verified: Specific scraping library.
Selenium / Playwright
Why likely: If the site requires interactive behavior, cookies, or dynamic pages, a browser automation tool may be used.
 Do not claim unless verified: Browser automation.
concurrent.futures / multiprocessing / asyncio
Why likely: Parallel worker benchmarking implies one of these concurrency approaches.
 Do not claim unless verified: Exact concurrency model.
Markdown file generation
Why likely: Obsidian uses Markdown files.
 Do not claim unless verified: Generated Markdown dashboards or notes.
Local filesystem storage
Why likely: Deal sheets are exported directly into a folder.
 Do not claim unless verified: Exact folder watcher or storage strategy.
Batch files / Windows scripts
Why likely from broader project context: Client packaging/setup may use Windows .bat scripts.
 Do not claim unless confirmed for this page: Installer/setup scripts.

Do not claim unless confirmed
Do not publicly list these unless you verify them:
FastAPI
Flask
Django
Supabase
PostgreSQL
SQLite
Docker
NSSM
Windows Service
Cloud deployment
AWS
Azure
GCP
Authentication/login system
Role-based access control
CI/CD pipeline
Unit test coverage
Observability dashboards
Sentry/Datadog/Prometheus
Vector database
LangChain/LlamaIndex
OCR
PDF parsing
Browser automation with Selenium/Playwright
Paid subscription deployment
Multi-user SaaS architecture
Real-time updates
100% matching accuracy
Automated bidding or deal execution

Stack by system area
Frontend
Confirmed
Streamlit
Role: First UI/dashboard iteration.
Why it matters: Fast client-facing prototype.
Portfolio description: “Built an initial Streamlit dashboard to validate the workflow and expose scraped/matched results.”
Best placement: Case study, technical stack.
Obsidian dashboard
Role: Final/updated client-facing interface.
Why it matters: Integrates into existing CRM.
Portfolio description: “Generated an Obsidian-based dashboard that updates from scraped and matched results.”
Best placement: Hero visuals, case study, client-facing card.
Likely
Markdown
Role: Obsidian content format.
Why it matters: File-native dashboard integration.
Portfolio description if confirmed: “Generated Markdown CRM views directly into the client’s Obsidian vault.”
Backend
Confirmed
Python scripts
Role: Scraping, joining, matching, AI calls, benchmarking, exports.
Why it matters: Core engine.
Portfolio description: “Python backend pipeline for collection, matching, resolve actions, and exports.”
Best placement: Project card, resume, case study.
Database
Confirmed
No database is confirmed.
Likely
No persistent database is clearly supported by the notes. It may be file-based.
Public phrasing
Use:
File-based workflow using Excel inputs and Obsidian outputs.
Avoid:
Database-backed system unless verified.
Storage
Confirmed
Excel tax files.
Client deal sheet folder.
Obsidian CRM/vault.
Likely
Local filesystem.
Generated dashboard files.
Exported deal sheet files.
APIs
Confirmed
OpenAI / GPT-4o API
Role: Fallback property matching.
Why it matters: AI-assisted ambiguity resolution.
Portfolio description: “Integrated GPT-4o for fallback entity resolution when deterministic matching could not confidently resolve a property.”
Best placement: Case study, AI section, resume bullet.
Unknown
Whether Salesweb used public HTTP endpoints, page scraping, browser automation, or another method.
Whether any official API was used.
AI/LLM/ML systems
Confirmed
GPT-4o fallback matching
Role: Ambiguous property matching.
Why it matters: Practical LLM integration.
Portfolio description: “Used GPT-4o selectively for uncertain matches instead of relying on the model for the entire pipeline.”
Best placement: AI/ML section, interview explanation, technical blog.
Data processing
Confirmed
Scraped foreclosure records.
Excel tax data.
Joins against tax data.
Programmatic matching.
GPT fallback matching.
Parallel scraping/join structure.
Worker-count benchmarking.
Authentication
No authentication is confirmed.
Publicly say:
Authentication: Not applicable / private local client workflow / Unknown.
Infrastructure/deployment
Confirmed
Streamlit prototype.
Obsidian CRM integration.
Deal sheet folder export.
Unknown
Whether it runs as a local script, scheduled job, Windows service, hosted backend, or manual launch.
Whether setup is packaged.
Automation/scripting
Confirmed
Python automation.
One-button resolves.
Exports to folder.
Parallel scraping.
Dashboard updates.
Dev tooling
Unknown
Do not claim GitHub Actions, test suites, Docker, or CI/CD unless verified.
Testing/QA
Confirmed
Scraping benchmark for varying worker counts.
Likely
Manual validation of matches.
Spot checks against county data.
Review of GPT-resolved uncertain cases.
Do not claim formal unit/integration test coverage unless confirmed.
Monitoring/logging
Unknown.
Possible safe phrasing:
The system can be extended with structured logs for scrape status, match confidence, GPT fallback usage, and export success.
Other tools
Obsidian
Role: CRM/workspace layer.
Why it matters: Product integration.
Portfolio description: “Integrated automation into a file-native knowledge workspace instead of building a disconnected app.”

5. Architecture Breakdown
High-level architecture summary
Foretrace is a Python-based data automation pipeline with a dashboard/output layer. It collects foreclosure listing data from multiple New Jersey county Salesweb sources, ingests Excel tax datasets, normalizes and joins records, uses deterministic matching to identify properties by lot-related data, calls GPT-4o when programmatic matching fails, and publishes results into a dashboard.
The system started with a Streamlit dashboard for quick iteration. It later evolved into an Obsidian CRM integration where the client can review updated results, resolve uncertain matches, and export deal sheets directly into their existing folder structure.
User flow
Client opens their Obsidian CRM.
Client views the foreclosure dashboard.
System shows updated scraped results from multiple counties.
Results are matched against Excel tax data.
Confident matches are shown as resolved.
Ambiguous matches are surfaced for review.
One-button resolve actions help process uncertain cases.
Client exports selected opportunities into deal sheets.
Deal sheets are written directly into the client’s existing deal sheet folder.
Data flow
County foreclosure source data
Salesweb pages/data from several New Jersey counties.
Records likely include property information, sale details, address-like fields, and county-specific metadata.
Tax data
Excel files containing lot/property tax records.
Used as the reference dataset for matching.
Scraping layer
Python script collects foreclosure data.
Parallel workers improve throughput.
Benchmarks compare different worker counts.
Normalization layer
Scraped records are cleaned into a consistent structure.
Tax data is parsed into comparable fields.
Matching layer
Programmatic joins attempt to match foreclosure records against tax records.
Likely match keys include lot-related data, address-like data, county identifiers, and other structured fields.
Exact field list is unknown.
AI fallback layer
If deterministic matching fails, GPT-4o is called to evaluate likely matches.
This should be positioned as assisted matching, not final authority.
Dashboard/output layer
Initial output: Streamlit dashboard.
Upgraded output: Obsidian dashboard inside the client’s CRM.
Final action: export deal sheets into client folder.
Backend flow
Load configuration for target counties.
Start scraping process.
Dispatch county/page tasks across worker pool.
Collect raw listing records.
Normalize fields.
Load Excel tax data.
Join listing data against tax records.
Mark deterministic matches.
Identify unresolved/ambiguous records.
Call GPT-4o for uncertain matching.
Store or write updated results.
Generate/update Obsidian dashboard.
Generate deal sheet exports on request.
Frontend flow
Streamlit prototype
Display scraped results.
Display matching status.
Allow initial exploration of records.
Validate whether the system was useful.
Obsidian CRM integration
Present dashboard inside existing client workspace.
Show property records and match statuses.
Support one-button resolve actions.
Provide export flow for deal sheets.
Fit the client’s daily CRM process.
AI/LLM flow
Deterministic matcher attempts a match.
If no confident match is found, the system creates a prompt for GPT-4o.
GPT-4o receives the foreclosure record and possible tax-record candidates.
GPT-4o returns a likely match or reasoning/selection.
System records the AI-assisted result.
Result should remain reviewable by the client.
Recommended public language:
GPT-4o is used as a fallback resolver for ambiguous property matches after rule-based matching fails.
Avoid saying:
GPT-4o guarantees correct matches.
Database/storage flow
Confirmed storage pieces:
Excel tax files as input.
Obsidian dashboard/vault as output.
Deal sheet folder as export destination.
Likely flow:
Read Excel files from a known location.
Generate intermediate result files.
Write dashboard content into Obsidian-compatible files.
Export deal sheet files to a configured folder.
Unknown:
Whether intermediate results are stored as CSV, JSON, Markdown, SQLite, or in memory.
Whether there is a persistent cache.
External service integrations
Confirmed
Salesweb foreclosure website.
GPT-4o.
Excel tax files.
Obsidian CRM.
Unknown
Any official APIs.
Any cloud services.
Any database services.
Any hosted deployment.
Background jobs/automation
Confirmed:
Python automation runs scraping/matching.
Dashboard updates from scraped results.
Export automation exists.
Unknown:
Whether it runs on a schedule.
Whether it runs as a service.
Whether the client manually clicks a script/button.
Whether there is a file watcher.
Safe phrasing:
The system automates the research pipeline and can be triggered from the client workflow.
Admin/internal workflow
Likely internal workflow:
Configure counties.
Provide/update Excel tax data.
Run scrape.
Review results.
Resolve ambiguous matches.
Export deal sheets.
Use Obsidian CRM as the central review surface.
Security/privacy boundaries
Important boundaries:
Do not expose client names.
Do not expose exact deal sheets.
Do not expose private tax datasets.
Do not expose real addresses in public screenshots unless fully anonymized.
Do not expose API keys.
Do not expose GPT prompts if they contain client data.
Do not expose source-specific scraping details that could be sensitive.
Do not frame the system as evading access restrictions.
Public-safe approach:
Use fake county names or generic county labels.
Use mocked property addresses.
Replace lot/block/index values with realistic placeholders.
Show dashboard structure without live client records.
Use “county foreclosure portals” instead of naming the exact source if needed.
Failure points or risks
Scraping risk
County websites may change structure, break selectors, expire sessions, or restrict automation.
Data quality risk
Excel tax data may have inconsistent formatting, missing fields, duplicate records, or mismatched addresses.
Matching risk
Programmatic matching may fail when fields are incomplete or formatted differently.
AI risk
GPT-4o may choose a plausible but incorrect match if prompt constraints and review boundaries are weak.
Workflow risk
If the dashboard does not fit the client’s CRM habits, the automation may not be used.
Export risk
Deal sheets must be exported into the correct folder with safe filenames and consistent formatting.
Legal/compliance risk
Scraping public/county websites may carry terms-of-service considerations. Public portfolio copy should avoid source-specific operational details and emphasize compliant data workflows.
Scalability considerations
Current scale
Several New Jersey counties and Excel tax datasets.
Scaling dimensions
More counties.
More listings per county.
More tax records.
More frequent scraping.
More ambiguous matches.
More GPT fallback calls.
More exports.
More client workflows.
Engineering considerations
Config-driven county support.
Retry logic.
Rate limiting.
Caching.
Structured logs.
Match confidence scores.
Queue-based workers.
Incremental updates.
Test fixtures for website changes.
Human review interface for uncertain matches.
What could be shown in an architecture diagram
Show five main layers:
Data Sources
County foreclosure listings.
Excel tax records.
Python Automation Engine
Scraper workers.
Normalizer.
Join/match engine.
Benchmark/performance layer.
AI Resolver
GPT-4o fallback for ambiguous matches.
Client Workspace
Obsidian dashboard.
Resolve actions.
Review queue.
Outputs
Matched property records.
Exported deal sheets.
Client deal sheet folder.
Simple architecture explanation
Foretrace collects foreclosure listings, compares them with tax records, uses AI when a match is unclear, and updates the client’s Obsidian dashboard so they can review properties and export deal sheets faster.
Technical architecture explanation
Foretrace is a Python data pipeline that orchestrates multi-county scraping, Excel ingestion, record normalization, deterministic property matching, GPT-4o fallback resolution, and file-based CRM output. The scraper is parallelized and benchmarked across different worker counts. The final data is surfaced in an Obsidian-based dashboard with resolve and export actions, replacing the earlier Streamlit prototype with a workflow-native client interface.
Diagram plan
Diagram title
Foretrace Data Pipeline Architecture
Left column: Data Sources
Box 1:
County Foreclosure Sources
 Subtitle: “Sales/listing records across NJ counties”
Box 2:
Excel Tax Records
 Subtitle: “Lot/property reference data”
Arrows from both boxes into the center.
Center column: Python Pipeline
Large container:
Python Automation Engine
Inside it:
Parallel Scraper Workers
Label: “Collect county listing data”
Normalizer
Label: “Clean fields into common schema”
Tax Data Loader
Label: “Parse Excel records”
Matching Engine
Label: “Join listings to lot/property records”
Benchmark Layer
Label: “Compare worker counts and runtime”
Arrow from Matching Engine to AI Resolver if unresolved.
Right-middle: AI Resolver
Box:
GPT-4o Fallback Resolver
 Label: “Only used when deterministic matching cannot resolve property identity”
Arrow back into matched results.
Right column: Client Workspace
Box:
Obsidian CRM Dashboard
 Inside:
Updated property records
Match status
One-button resolves
Review queue
Far right: Outputs
Box:
Deal Sheet Exports
 Subtitle: “Generated into client’s deal sheet folder”
Footer/security band
Add a thin footer under diagram:
Privacy Boundary: “Client data, real addresses, and deal sheets are anonymized in public materials.”

6. Features
Core features
Feature: Multi-county foreclosure data collection
Description: Python scripts collect foreclosure listing information from Salesweb across several New Jersey counties.
 Why it matters: Reduces manual county-by-county searching.
 Technical complexity: Medium to high, depending on website structure and county differences.
 Suggested visual: Map/grid of counties feeding into a central pipeline.
 Suggested website section: Problem/Solution, Architecture.
 Belongs on: Homepage, project page, resume, blog.
Feature: Excel tax-data ingestion
Description: The system loads tax data from Excel and uses it as the reference dataset for property matching.
 Why it matters: Converts static tax spreadsheets into an actionable matching source.
 Technical complexity: Medium.
 Suggested visual: Spreadsheet transforming into normalized records.
 Suggested website section: Data Flow.
 Belongs on: Project page, blog, resume.
Feature: Programmatic property matching
Description: Scraped foreclosure records are joined against tax records to find matching lots/properties.
 Why it matters: This is the core intelligence layer of the project.
 Technical complexity: High if data is inconsistent.
 Suggested visual: Match confidence cards or before/after record linkage view.
 Suggested website section: Architecture, Features.
 Belongs on: Project page, resume, technical blog.
Feature: GPT-4o fallback matching
Description: When deterministic matching fails, GPT-4o is used to evaluate likely property matches.
 Why it matters: Handles messy edge cases without making the entire system dependent on AI.
 Technical complexity: High.
 Suggested visual: “Unresolved → GPT-assisted review → suggested match” flow.
 Suggested website section: AI-assisted Matching.
 Belongs on: Project page, AI/ML resume bullet, blog.
Feature: Streamlit prototype
Description: First dashboard iteration built in Streamlit.
 Why it matters: Shows fast MVP delivery.
 Technical complexity: Low to medium.
 Suggested visual: Mocked Streamlit dashboard screenshot.
 Suggested website section: Timeline.
 Belongs on: Case study.
Feature: Obsidian CRM dashboard
Description: Upgraded dashboard integrated into the client’s existing Obsidian CRM.
 Why it matters: Strong product decision; reduces adoption friction.
 Technical complexity: Medium to high.
 Suggested visual: Obsidian-style dashboard mockup with fake records.
 Suggested website section: Hero, Product Evolution, Workflow Integration.
 Belongs on: Homepage, project page, client-facing page.
Feature: One-button resolves
Description: The Obsidian dashboard supports quick resolve actions for records requiring review.
 Why it matters: Helps the client move through uncertain matches efficiently.
 Technical complexity: Medium.
 Suggested visual: GIF of clicking a resolve button and a record moving from unresolved to matched.
 Suggested website section: Features/Demo.
 Belongs on: Project page, demo video.
Feature: Parallel scraping and join structure
Description: The scraping/matching pipeline uses parallelism for better performance.
 Why it matters: Shows backend optimization beyond simple scripting.
 Technical complexity: High.
 Suggested visual: Worker lanes processing counties in parallel.
 Suggested website section: Architecture, Performance.
 Belongs on: Resume, technical case study, blog.
Feature: Worker-count benchmark
Description: Scraping performance was benchmarked across different numbers of workers.
 Why it matters: Shows measurement-driven optimization.
 Technical complexity: Medium.
 Suggested visual: Chart of worker count vs runtime, using sanitized/example numbers unless real benchmark data is available.
 Suggested website section: Performance.
 Belongs on: Project page, technical blog, interview talking point.
Feature: Deal sheet exports
Description: The system exports deal sheets directly into the client’s deal sheet folder.
 Why it matters: Completes the workflow from data gathering to actionable output.
 Technical complexity: Medium.
 Suggested visual: “Export selected → Deal sheet generated” GIF.
 Suggested website section: Outcome/Workflow.
 Belongs on: Homepage, project page, client-facing copy.

Impressive features
AI-assisted entity resolution
Practical GPT-4o use for ambiguous matches.
Obsidian CRM integration
Demonstrates strong product sense and workflow adaptation.
Parallel scraping benchmarks
Shows performance engineering and measurement.
End-to-end pipeline
Source data to tax joins to review dashboard to deal sheet export.
Human-in-the-loop resolve flow
Safer and more realistic than claiming full autonomy.

Recruiter-friendly features
Python data pipeline.
Multi-source data ingestion.
Excel processing.
Record matching/entity resolution.
GPT-4o fallback.
Parallel workers.
Performance benchmarking.
Streamlit prototype.
Obsidian workflow integration.
Export automation.
Client-friendly features
Saves manual research effort.
Works inside existing Obsidian CRM.
One-button resolve actions.
Exports deal sheets automatically.
Handles messy property matches.
Keeps uncertain results reviewable.
Supports multiple counties.
Technical-reviewer features
Configurable multi-county scraping.
Worker-count benchmark.
Deterministic matching before AI fallback.
Human-reviewable AI suggestions.
File-based dashboard generation.
Excel-to-record normalization.
Export pipeline.
Visual features
Architecture diagram.
Obsidian dashboard mockup.
Matching flow diagram.
Benchmark chart.
Worker concurrency animation.
Deal sheet export GIF.
Before/after workflow comparison.
Sanitized property record card.
Features to phrase carefully
Scraping
Say:
Collects and normalizes foreclosure listing data from county sources.
Avoid:
Bypasses county websites / bots Salesweb / unrestricted scraper.
GPT matching
Say:
Uses GPT-4o as a fallback assistant for ambiguous matches.
Avoid:
AI guarantees correct property matches.
Deal value
Say:
Helps the client review opportunities faster.
Avoid:
Guarantees profitable foreclosure deals.
Tax data
Say:
Matches against Excel tax records.
Avoid:
Publicly exposing actual tax datasets or private client files.

7. Impact, Metrics, and Results
Confirmed impact
From the pasted notes, confirmed impact is mostly functional rather than numeric.
Impact: Built working scraping pipeline
Safe phrasing:
 Built a Python scraping pipeline for foreclosure listings across several New Jersey counties.
Strong phrasing:
 Developed a multi-county foreclosure data collection pipeline that replaced repetitive manual listing research with automated data aggregation.
Evidence to strengthen:
 Number of counties, number of listings processed, average runtime.
Placement:
 Resume, project page, case study.
Impact: Integrated tax matching
Safe phrasing:
 Joined scraped foreclosure records against Excel tax data to identify matching lots.
Strong phrasing:
 Created a property matching workflow that connects foreclosure listings with lot-level tax records for faster review.
Evidence to strengthen:
 Match rate, number of records matched, before/after manual effort.
Placement:
 Resume, technical section, blog.
Impact: Added GPT-4o fallback matching
Safe phrasing:
 Used GPT-4o to assist with records that could not be matched programmatically.
Strong phrasing:
 Improved coverage on ambiguous property records by adding GPT-4o as a fallback resolver after deterministic matching.
Evidence to strengthen:
 Percentage of unresolved records reduced, manual review time saved.
Placement:
 AI/ML section, resume, blog.
Impact: Migrated from Streamlit to Obsidian CRM
Safe phrasing:
 Upgraded the initial Streamlit dashboard into an Obsidian-based dashboard aligned with the client’s existing CRM.
Strong phrasing:
 Reduced workflow friction by moving the tool from a standalone prototype into the client’s existing Obsidian CRM environment.
Evidence to strengthen:
 Client feedback, adoption improvement, number of workflow steps removed.
Placement:
 Case study, homepage, client-facing copy.
Impact: Added exports to deal sheet folder
Safe phrasing:
 Enabled deal sheet exports directly into the client’s existing folder structure.
Strong phrasing:
 Closed the loop from data collection to actionable output by generating deal sheets directly where the client already organizes opportunities.
Evidence to strengthen:
 Export count, time saved per deal sheet, error reduction.
Placement:
 Project page, client-facing copy.
Impact: Benchmarked workers
Safe phrasing:
 Benchmarked scraping performance across different worker counts.
Strong phrasing:
 Used worker-count benchmarks to tune parallel scraping performance and improve pipeline efficiency.
Evidence to strengthen:
 Runtime comparison chart.
Placement:
 Technical case study, resume, blog.

Qualitative impact
Reduced repetitive manual research.
Made foreclosure data easier to review.
Improved organization of client workflow.
Helped connect listing data with property tax records.
Added AI only where deterministic rules were insufficient.
Moved the product into the client’s existing CRM.
Created a more complete workflow from scrape to export.
Possible metrics to calculate later
These would make the case study much stronger:
Runtime per full scrape
Example metric: “Full scrape completes in X minutes.”
Manual workflow comparison
Example metric: “Reduced research workflow from X hours to Y minutes.”
Number of counties supported
Example metric: “Supports X New Jersey counties.”
Number of records processed per run
Example metric: “Processes X listings per run.”
Match rate
Example metric: “Automatically matched X% of listings against tax records.”
AI fallback usage
Example metric: “Only X% of records required GPT fallback.”
Resolve time
Example metric: “Reduced unresolved review time by X%.”
Export volume
Example metric: “Generated X deal sheets.”
Worker benchmark
Example metric: “Improved scrape runtime by X% after worker tuning.”
Error rate
Example metric: “Reduced manual copy/paste errors by X%.”
Resume-worthy outcomes
Use these as templates:
Built a Python foreclosure research pipeline that scraped multi-county listing data, joined results against Excel tax records, and generated client-ready outputs.
Integrated GPT-4o as a fallback entity-resolution layer for ambiguous property matches after deterministic matching failed.
Migrated a Streamlit prototype into an Obsidian-based CRM dashboard aligned with the client’s existing workflow.
Benchmarked parallel scraping performance across worker counts to optimize runtime and throughput.
Automated deal sheet exports into the client’s existing folder structure, reducing manual handoff between research and review.
Portfolio-worthy outcomes
Longer version:
Foretrace transformed a manual foreclosure research workflow into a repeatable data pipeline. The system collects listing data from several county sources, matches those records against Excel tax datasets, resolves ambiguous property matches with GPT-4o when rules are insufficient, and updates the client’s Obsidian CRM with reviewable results and exportable deal sheets.
Claims to avoid
Avoid unless verified:
“100% accurate property matching.”
“Fully autonomous foreclosure deal finder.”
“Guaranteed profitable deal discovery.”
“Reduced research time by X%” without measurement.
“Processes thousands of records” without a count.
“Production-grade compliance” without review.
“Real-time dashboard” unless it actually updates live.
“Database-backed architecture” unless confirmed.
“Cloud deployed” unless confirmed.
“Used official APIs” unless confirmed.

8. Challenges and War Stories
Main technical challenge: Matching messy foreclosure records to tax data
Problem
Scraped foreclosure records and Excel tax records may not share perfectly clean identifiers. Addresses may be formatted differently, lot data may be inconsistent, and county-specific data may vary.
Why it was difficult
The system had to move beyond simple scraping. It needed to connect two different datasets and decide when a match was confident enough to accept.
Likely solution approach
Normalize fields.
Use exact matching where possible.
Use programmatic joins against lot/tax fields.
Detect unresolved records.
Send ambiguous cases to GPT-4o.
Keep uncertain results reviewable.
What this proves about you
It proves you can solve real-world data problems where data is imperfect and matching logic requires careful engineering.
Short case-study paragraph
The hardest part of Foretrace was not collecting data; it was making the collected data trustworthy. Foreclosure listing records and tax records do not always line up cleanly, so the system needed a matching layer that could identify confident matches programmatically while surfacing ambiguous records for additional resolution.
Longer blog-style war story
A reusable draft with placeholders:
The first working version of the scraper could collect foreclosure records, but raw collection was only half the problem. The real challenge appeared when those records had to be joined against tax data. Some records matched cleanly, but others had address differences, missing fields, or lot identifiers that did not line up in the obvious way. Instead of forcing every record through an AI model, I built the workflow around deterministic matching first. Only when the system could not confidently resolve a record did it call GPT-4o as a fallback resolver. That decision made the system more reliable, cheaper to run, and easier to review because AI was used for the messy edge cases rather than the entire pipeline.
Resume bullet
Built a property matching pipeline that joined scraped foreclosure records against Excel tax data and used GPT-4o fallback resolution for ambiguous matches.

Main product/design challenge: Moving from standalone dashboard to client workflow
Problem
The first iteration was a Streamlit dashboard, but the client already used Obsidian as a CRM.
Why it was difficult
A working dashboard is not always the best product. If it lives outside the client’s normal workflow, the client has to change habits.
Likely solution approach
Start with Streamlit for fast validation.
Observe that the client’s workflow centered around Obsidian.
Rebuild or export the dashboard into Obsidian-compatible format.
Add resolve and export actions aligned with the client’s process.
What this proves about you
It proves product judgment: you did not just build a technically functional app; you adapted it to how the user actually works.
Short case-study paragraph
The project evolved from a standalone Streamlit dashboard into an Obsidian-integrated CRM workflow. This shift mattered because the client already managed deal research inside Obsidian, so the best product was not a separate application but an automation layer that fit into the workspace they already trusted.
Longer blog-style war story
The first version of the dashboard proved that the data pipeline worked, but it also revealed a product problem: the client already had a CRM workflow in Obsidian. A separate dashboard could display the right information, but it still forced the client to leave their existing system. The better solution was to bring the automation into Obsidian. That changed the project from a dashboard into a workflow integration: scraped results updated the client’s workspace, unresolved matches could be handled from the dashboard, and deal sheets could be exported directly into the correct folder.
Resume bullet
Migrated a Streamlit prototype into an Obsidian CRM integration, aligning automated foreclosure research with the client’s existing workflow.

Main data challenge: Excel tax data joining
Problem
Excel tax files are useful but often not structured like application-ready database tables.
Why it was difficult
Spreadsheet data can include inconsistent headers, formatting differences, missing values, and fields that require cleaning before joining.
Likely solution approach
Parse Excel files.
Normalize field names.
Clean lot/property fields.
Convert values into comparable formats.
Join against scraped records.
Flag missing or ambiguous joins.
What this proves about you
You can work with real client data formats, not only clean APIs.
Short case-study paragraph
Foretrace had to treat Excel files as a serious data source. Instead of asking the client to change formats, the system ingested tax spreadsheets directly and transformed them into usable reference data for the matching pipeline.
Longer blog-style war story
In a clean engineering demo, every data source comes from an API. In real client work, key data often lives in spreadsheets. Foretrace had to work with Excel tax records because that was the format available to the client. The system needed to parse those files, normalize their fields, and join them against scraped foreclosure records. That made the project more realistic and more useful: it automated the workflow around the client’s actual data instead of requiring a perfect backend that did not exist.
Resume bullet
Ingested Excel tax datasets and transformed them into structured reference records for lot-level foreclosure matching.

Main AI/ML challenge: Using GPT-4o safely and selectively
Problem
Some property matches cannot be resolved reliably through deterministic logic.
Why it was difficult
Using an LLM introduces uncertainty, cost, and review concerns. The system needed AI assistance without over-trusting the model.
Likely solution approach
Use programmatic matching first.
Only call GPT-4o for ambiguous cases.
Provide structured candidate information.
Store model suggestions as reviewable outputs.
Avoid claiming final authority.
What this proves about you
You know how to integrate LLMs as practical components in a larger system.
Short case-study paragraph
GPT-4o was used as a fallback resolver, not as the primary matching system. This kept the pipeline grounded in deterministic logic while still improving coverage on messy records that would otherwise require manual review.
Longer blog-style war story
The temptation with AI features is to send every problem to the model. Foretrace took a more disciplined approach. The system first tried to resolve properties programmatically using structured joins and matching rules. GPT-4o only entered the workflow when those methods failed. That made the AI layer more targeted and easier to trust because it handled edge cases rather than replacing the core data pipeline.
Resume bullet
Integrated GPT-4o as a targeted fallback for ambiguous property entity resolution while preserving deterministic matching as the primary path.

Main user experience challenge: Making automation feel simple
Problem
The underlying workflow includes scraping, joining, matching, AI fallback, reviewing, and exporting. The client should not have to think about all of that every time.
Why it was difficult
A technically powerful tool can still fail if it feels complicated.
Likely solution approach
Hide pipeline complexity behind dashboard updates.
Provide one-button resolve actions.
Export deal sheets into the expected folder.
Keep review flow inside Obsidian.
What this proves about you
You can turn complex backend automation into a usable client workflow.
Short case-study paragraph
Foretrace’s interface goal was to make a complicated pipeline feel like a simple review workflow. The client did not need to manage each technical step manually; they could open their Obsidian dashboard, review results, resolve uncertain cases, and export deal sheets.
Longer blog-style war story
The backend had several moving parts, but the client experience needed to feel simple. That meant hiding the scraping, joining, and AI fallback behind a dashboard that surfaced only the decisions the client needed to make. One-button resolves and direct deal sheet exports turned a multi-step technical pipeline into something closer to a daily research workflow.
Resume bullet
Designed a client-facing Obsidian dashboard with resolve actions and folder-based exports to simplify a multi-stage data pipeline.

Main deployment/infrastructure challenge: Fitting the client environment
Problem
The tool needed to operate in the client’s existing environment rather than a generic hosted app.
Why it was difficult
Client workflows may depend on local folders, Obsidian vaults, Excel files, and specific folder structures.
Likely solution approach
Use file-based inputs/outputs.
Configure paths for Excel files and deal sheet folders.
Generate dashboard updates where Obsidian can read them.
Keep deployment lightweight.
What this proves about you
You can deliver practical software under real constraints.
Short case-study paragraph
Rather than forcing a heavy infrastructure setup, Foretrace was designed around the client’s existing local workflow: Excel inputs, Obsidian CRM views, and deal sheet folder exports.
Longer blog-style war story
Not every useful client tool needs to be a cloud SaaS. For this project, the most effective architecture was shaped by the client’s existing environment. The client already had Excel data, an Obsidian CRM, and a folder structure for deal sheets. The system was built to connect those pieces instead of replacing them, which made the result lighter, more practical, and easier to adopt.
Resume bullet
Integrated automation with local Excel inputs, Obsidian CRM outputs, and folder-based deal sheet exports for a client-specific workflow.

Main business/client challenge: Translating a manual process into software
Problem
The workflow was not just a list of technical requirements. It was a business process.
Why it was difficult
You had to understand what the client actually does, where the bottlenecks are, and which parts should remain reviewable.
Likely solution approach
Identify repetitive steps.
Automate data gathering and matching.
Preserve review for uncertain cases.
Export outputs in the client’s expected format.
Iterate from prototype to integrated workflow.
What this proves about you
You can operate as a consultant, not just a coder.
Short case-study paragraph
Foretrace required translating a client’s foreclosure research process into software. The project balanced automation with review, speed with accuracy, and technical capability with the client’s existing workflow.
Longer blog-style war story
The most important requirement was not “build a scraper.” It was “help the client move from raw foreclosure information to usable deal review faster.” That required understanding the steps around the scraper: tax data comparison, ambiguous property matching, dashboard review, and deal sheet creation. The final system became valuable because it automated the whole path, not just the first data collection step.
Resume bullet
Delivered a client-specific foreclosure research workflow that connected data collection, tax-record matching, review, and deal sheet export into a single automation pipeline.

9. Design Direction
Overall visual style
Foretrace should feel like:
Forensic, municipal, precise, data-heavy, professional, and quietly powerful.
Visual identity keywords:
Dossier
Ledger
Trace map
Public records
Case file
Searchlight
Property grid
Investigation board
CRM command center
Automation pipeline
Color palette recommendation
Use a dark, professional Vanta-style palette with controlled accents.
Primary palette
Deep charcoal / near black: #080A0C
Graphite: #12161B
Slate gray: #1F2933
Cool border gray: #334155
Off-white text: #E5E7EB
Muted text: #94A3B8
Accent palette
Electric blue: #38BDF8 for automation/data flow.
Emerald: #10B981 for matched/resolved records.
Amber: #F59E0B for unresolved/needs review.
Red muted: #EF4444 only for error/risk states.
Paper cream: #F4EFE5 for deal sheet/dossier visuals.
Typography vibe
Use:
Clean sans-serif for main text.
Slightly technical mono font for labels, IDs, and data snippets.
Large confident headings.
Compact data-card typography for dashboard visuals.
Good type vibe:
Modern engineering portfolio.
Bloomberg terminal meets legal case file.
Obsidian knowledge graph meets municipal records.
Layout style
Recommended layout:
Dark hero section.
Split layout: narrative on left, system visual on right.
Data cards arranged like records.
Architecture diagram mid-page.
Timeline showing Streamlit → Obsidian.
Feature grid with icons.
Performance section with worker benchmark chart.
Case-study prose with screenshots.
Mood
Professional, sharp, operational.
It should not feel playful or overly flashy. This is a client automation system that touches business-critical research, so it should feel reliable.
Hero section concept
Hero title:
Foretrace
Hero headline:
Turning foreclosure research into a structured client workflow.
Hero visual:
A dark dashboard mockup showing:
County sources flowing into Python pipeline.
Match status cards.
Obsidian CRM panel.
Deal sheet export button.
Hero supporting stats placeholders:
Several NJ counties
Excel tax-data matching
GPT-4o fallback resolution
Obsidian CRM integration
Card design concept
Project card should look like a mini case file:
Dark background.
Thin border.
Small “Private Client Build” label.
Data-line accents.
A mock property record card.
Tag chips: Python, Streamlit, Obsidian, GPT-4o, Excel.
CTA: “View case study.”
Case study layout
Suggested order:
Hero.
Problem: fragmented foreclosure research.
Solution: automated pipeline.
Product evolution: Streamlit → Obsidian.
Architecture diagram.
Matching logic.
AI fallback.
Performance benchmarking.
Results and workflow impact.
Privacy-safe screenshots.
Lessons learned.
Future roadmap.
Image style
Use:
Mock dashboards.
Abstract data pipelines.
Blurred/sanitized records.
Property cards with fake addresses.
Folder/export visuals.
Architecture diagrams.
Obsidian-style markdown dashboard screenshots.
Avoid:
Real client data.
Real foreclosure addresses.
Real deal sheets.
Screenshots showing private folder paths.
Anything that looks like hacking.
Icon style
Use thin-line icons:
Database/table icon.
File spreadsheet icon.
Python/gear icon.
Brain/AI icon.
Folder export icon.
Check-circle resolve icon.
Alert triangle for unresolved matches.
Map pin/county icon.
Network/graph icon.
Motion/animation ideas
Records flowing from county boxes into pipeline.
Match cards flipping from “unresolved” to “resolved.”
Worker lanes animating in parallel.
GPT fallback branch pulsing only for ambiguous records.
Export button generating a deal sheet file.
Obsidian dashboard gently updating.
Background patterns/textures
Subtle grid.
Parcel map lines.
Faint spreadsheet rows.
Dossier paper texture in screenshots.
Thin connection lines between nodes.
Obsidian graph-inspired background.
Visual metaphors
“Tracing” records across systems.
“Case file” for each property.
“Pipeline” from raw listings to deal sheets.
“Searchlight” over scattered public data.
“Command center” inside Obsidian.
What the project should feel like visually
It should feel like a serious internal intelligence tool: fast, private, precise, and built for someone who makes decisions from messy public records.
Design styles to avoid
Avoid:
Crypto/trading dashboard aesthetic.
Get-rich-quick real estate visuals.
Hacker terminal clichés.
Overly bright SaaS gradients.
Cartoon visuals.
Legal/government seals unless you have permission.
Real foreclosure imagery that feels exploitative.

Homepage visual treatment
Use Foretrace as a featured project card.
Card layout:
Top: “Private Client Build”
Title: “Foretrace”
Tagline: “Foreclosure research automation for an Obsidian CRM.”
Visual: fake Obsidian dashboard with property cards.
Chips: Python, GPT-4o, Streamlit, Obsidian, Excel.
Footer CTA: “Read case study”
Homepage card copy should focus on:
Data automation.
AI-assisted matching.
Workflow integration.
Real client value.
Project page visual treatment
The full page should feel like a technical case file.
Suggested design:
Dark hero.
Sticky mini-nav.
Architecture diagram.
Feature cards.
Timeline.
Mock screenshots.
Technical stack panel.
Challenge/solution blocks.
Privacy note.
Blog visual treatment
Blog posts should use:
Technical diagrams.
Code snippets.
Sanitized data examples.
Before/after pipeline visuals.
Benchmark charts.
“Lessons from building a client automation tool” tone.

10. Images, Screenshots, GIFs, and Videos
Hero image ideas
Asset: Obsidian CRM Command Center Mockup
Purpose: Main project hero visual.
 Where: Hero section and homepage card.
 What it should show: Obsidian-style dashboard with fake property records, match statuses, county filters, resolve button, export button.
 How to create it: Build a mock UI component or screenshot a sanitized local Obsidian vault with fake data.
 Priority: High.
Asset: Pipeline Architecture Hero
Purpose: Technical hero alternative.
 Where: Hero section or architecture section.
 What it should show: County data + Excel tax data flowing into Python matcher, GPT fallback, Obsidian dashboard, deal sheet export.
 How to create it: Use a custom SVG/React diagram.
 Priority: High.
Asset: Case File Visual
Purpose: More cinematic visual if real screenshots are limited.
 Where: Hero or blog thumbnail.
 What it should show: Dark desk/case-file style interface with property record cards, map lines, spreadsheet snippets, and “resolved” stamps.
 How to create it: Generate abstract visual or design in Figma.
 Priority: Medium.

Screenshots needed
Asset: Streamlit Prototype Screenshot
Purpose: Show project evolution.
 Where: Timeline/product evolution section.
 What it should show: Initial dashboard with fake table of scraped/matched records.
 How to create it: Recreate Streamlit with dummy data or use sanitized screenshot.
 Priority: Medium.
Asset: Obsidian Dashboard Screenshot
Purpose: Show final workflow integration.
 Where: Hero, solution, screenshots section.
 What it should show: Obsidian dashboard with fake county listings, match status, unresolved queue, export action.
 How to create it: Use dummy markdown notes in Obsidian.
 Priority: High.
Asset: Matching Results Table
Purpose: Explain property matching.
 Where: Features/architecture section.
 What it should show: Listing record, tax record, match status, confidence/reason.
 How to create it: Mock in React/Figma with anonymized data.
 Priority: High.
Asset: GPT Fallback Review Card
Purpose: Show AI-assisted matching without exposing prompts.
 Where: AI section.
 What it should show: “Programmatic match failed → GPT suggested candidate → human review.”
 How to create it: Fake UI card.
 Priority: High.
Asset: Worker Benchmark Chart
Purpose: Show performance optimization.
 Where: Performance section.
 What it should show: Worker count vs runtime.
 How to create it: Use real benchmark data if available; otherwise use placeholder chart clearly labeled “example visualization.”
 Priority: Medium.
Asset: Deal Sheet Export Screenshot
Purpose: Show output workflow.
 Where: Workflow/results section.
 What it should show: Export button and generated fake deal sheet in folder.
 How to create it: Use fake folder path and fake deal sheet.
 Priority: High.

GIF ideas
GIF: One-button Resolve
Purpose: Make the project feel interactive.
 Where: Feature section.
 What it should show: Unresolved property card becomes resolved after click.
 How to create it: Record a mock React/Obsidian UI interaction.
 Priority: High.
GIF: Scrape-to-Dashboard Update
Purpose: Show pipeline coming alive.
 Where: Hero or architecture section.
 What it should show: “Run update” → progress → dashboard fills with records.
 How to create it: Mock progress states in UI.
 Priority: Medium.
GIF: Deal Sheet Export
Purpose: Show workflow completion.
 Where: Results section.
 What it should show: Select property → export → file appears in folder.
 How to create it: Mock UI recording.
 Priority: High.
GIF: Parallel Workers
Purpose: Explain backend optimization visually.
 Where: Technical architecture section.
 What it should show: Multiple worker lanes processing county tasks.
 How to create it: Animated SVG or React motion.
 Priority: Medium.

Video demo ideas
Video: 60-second product walkthrough
Purpose: Recruiter/client-friendly overview.
 Where: Top of project page.
 What it should show: Problem → dashboard → resolve → export.
 How to create it: Record sanitized mock workflow.
 Priority: High.
Video: Technical architecture walkthrough
Purpose: Technical reviewers/interviewers.
 Where: Architecture section or blog.
 What it should show: Data sources, matching engine, GPT fallback, Obsidian output.
 How to create it: Narrated screen recording over diagram.
 Priority: Medium.
Video: Before/after workflow
Purpose: Show business value.
 Where: Results section.
 What it should show: Manual workflow vs automated workflow.
 How to create it: Split-screen animation.
 Priority: Medium.

Diagrams
Diagram: Full System Architecture
Priority: High.
Diagram: Matching Decision Tree
Show:
Exact match?
Lot match?
Address-like match?
Ambiguous?
GPT fallback?
Human review?
Priority: High.
Diagram: Streamlit to Obsidian Evolution
Show:
Prototype dashboard.
Client feedback/workflow realization.
Obsidian CRM integration.
Priority: Medium.
Diagram: Worker Benchmark Architecture
Show:
Queue of scrape tasks.
Worker pool.
Result aggregator.
Benchmark output.
Priority: Medium.

Abstract visuals
Use these if real screenshots cannot be shown:
Fake property cards.
Blurred spreadsheet panels.
Parcel map grid.
Obsidian graph nodes.
Dossier folder.
Data pipeline flow.
“Resolved / Needs Review” cards.
County source tiles.
Export folder animation.
Worker pool chart.
Privacy-safe alternatives
Replace:
Real addresses → 123 Example Ave
Real block/lot → Block 0000 / Lot 00
Real county → County A, County B
Client name → Private Client
Deal values → Redacted
Folder path → /Deal Sheets/Generated/
GPT prompt → simplified schematic prompt
Salesweb screenshots → abstract “county listing portal” mock

11. Website Page Plan
Recommended route/slug
/projects/foretrace
Alternative:
/work/foretrace
Page title
Foretrace — Foreclosure Research Automation
SEO title
Foretrace Case Study | Python Foreclosure Research Automation with GPT-4o and Obsidian
SEO description
A private client case study on building a Python automation pipeline for foreclosure listings, Excel tax-data matching, GPT-4o-assisted property resolution, and Obsidian CRM integration.

Hero section
Purpose
Immediately communicate what the project is and why it is impressive.
Suggested heading
Foretrace
Draft copy
Foretrace is a private client automation system that turns foreclosure listing research into a structured review workflow. Built with Python, the system collects county foreclosure data, joins it against Excel tax records, uses GPT-4o for ambiguous property matches, and publishes results into the client’s Obsidian CRM with resolve actions and deal sheet exports.
Suggested visuals
Obsidian dashboard mockup.
Pipeline overlay.
Status chips.
Suggested components
ProjectHero
StackChips
ProjectMeta
HeroMockup
Notes for implementation
Use a dark hero with a dashboard card on the right and concise copy on the left. Include privacy label: “Private client build — data anonymized.”

Overview section
Purpose
Give a readable summary.
Suggested heading
From scattered foreclosure records to a client-ready research workflow
Draft copy
The project began as a practical automation problem: the client needed to collect foreclosure listings from multiple county sources, compare them with tax records, and organize the results for deal review. Foretrace turned that process into a pipeline that collects, matches, resolves, and exports property records through the client’s existing workflow.
Suggested visuals
Before/after workflow cards.
Suggested components
BeforeAfterWorkflow
OverviewTextBlock

Problem section
Purpose
Explain the pain clearly.
Suggested heading
The problem: foreclosure research was fragmented and manual
Draft copy
The client’s research workflow depended on moving between county foreclosure listings, Excel tax files, manual property matching, and an Obsidian CRM. The bottleneck was not a single task; it was the repeated handoff between sources, spreadsheets, review notes, and deal sheet preparation.
Suggested visuals
Manual workflow chain:
County site → Spreadsheet → Manual matching → Notes → Deal sheet
Suggested components
PainPointGrid
WorkflowChain

Solution section
Purpose
Show what you built.
Suggested heading
The solution: a Python pipeline integrated into Obsidian
Draft copy
Foretrace automates the research pipeline from collection to export. Python scripts gather foreclosure records, normalize the data, join results against Excel tax records, and identify confident property matches. When a record cannot be matched programmatically, GPT-4o assists with candidate matching. Final results are surfaced inside the client’s Obsidian dashboard, where unresolved records can be reviewed and deal sheets can be exported.
Suggested visuals
Pipeline diagram.
Suggested components
SolutionDiagram
FeatureHighlights

Architecture section
Purpose
Show technical depth.
Suggested heading
Architecture: scraping, matching, AI fallback, and CRM output
Draft copy
The architecture is built around a staged pipeline. County listing data and Excel tax records enter the Python backend, where records are normalized and matched. Ambiguous cases branch into a GPT-4o fallback resolver. The final records are written into the client’s Obsidian CRM and exported into the deal sheet folder when selected.
Suggested visuals
Full architecture diagram.
Suggested components
ArchitectureDiagram
ArchitectureSteps

Features section
Purpose
Show the actual product capabilities.
Suggested heading
Key features
Draft copy
Foretrace combines practical automation with reviewable decision points: multi-county data collection, Excel tax matching, GPT-assisted fallback resolution, Obsidian dashboard updates, one-button resolves, parallel scraping, worker benchmarks, and deal sheet exports.
Suggested visuals
Feature grid.
Suggested components
FeatureGrid
FeatureCard

Technical stack section
Purpose
Show tools and engineering scope.
Suggested heading
Technical stack
Draft copy
The confirmed stack includes Python for the backend automation, Streamlit for the original prototype, Obsidian for CRM integration, Excel tax files for reference data, and GPT-4o for fallback property matching.
Suggested visuals
Stack chips grouped by category.
Suggested components
TechStackPanel

Challenge section
Purpose
Show problem-solving ability.
Suggested heading
The hardest part was not scraping — it was matching
Draft copy
The core challenge was record linkage. Foreclosure listings and tax records do not always share clean identifiers, so the system needed to decide which matches were reliable, which needed fallback resolution, and which should remain reviewable by the client.
Suggested visuals
Matching decision tree.
Suggested components
ChallengeBlock
DecisionTreeDiagram

Results/impact section
Purpose
Show outcome without overclaiming.
Suggested heading
Outcome: a faster, more organized research workflow
Draft copy
Foretrace transformed a fragmented research process into a repeatable workflow. The client can review updated records inside Obsidian, resolve uncertain matches, and export deal sheets into the correct folder without manually rebuilding the same research trail each time.
Suggested visuals
Before/after workflow.
Placeholder metric cards.
Suggested components
ImpactCards
WorkflowComparison

Screenshots/media section
Purpose
Make the project tangible.
Suggested heading
Workflow snapshots
Draft copy
The screenshots below use anonymized records and mock data to show the structure of the workflow without exposing private client information.
Suggested visuals
Obsidian dashboard.
Matching table.
GPT fallback card.
Deal sheet export.
Suggested components
MediaGallery
ScreenshotCard

Lessons learned section
Purpose
Show maturity.
Suggested heading
Lessons learned
Draft copy
The project reinforced that automation is most valuable when it fits the user’s existing workflow. The first version proved the pipeline in Streamlit, but the more useful version integrated directly into the client’s Obsidian CRM. It also showed the value of combining deterministic matching with selective AI fallback instead of trying to make an LLM solve the entire problem.
Suggested visuals
Three lesson cards.
Suggested components
LessonsGrid

Future roadmap section
Purpose
Show how the system could evolve.
Suggested heading
Future roadmap
Draft copy
Future improvements could include stronger match-confidence scoring, structured logs, configurable county modules, incremental updates, improved review queues, export templates, and a more formal test suite for detecting source website changes.
Suggested visuals
Roadmap cards.
Suggested components
RoadmapList

CTA section
Purpose
Connect project to your consulting/company brand.
Suggested heading
Need a custom workflow like this?
Draft copy
Foretrace is an example of how Vanta Solutions builds practical automation around real business workflows: collecting messy data, organizing it, adding intelligence where useful, and delivering it inside the tools clients already use.
Suggested visuals
Simple contact CTA.
Suggested components
ContactCTA

12. Project Card Copy
Short card
Title: Foretrace
 Tagline: Foreclosure research automation for an Obsidian CRM.
 Description: Python pipeline that collects county foreclosure data, matches it against Excel tax records, uses GPT-4o for ambiguous matches, and exports deal sheets from an Obsidian dashboard.
 Stack labels: Python, GPT-4o, Streamlit, Obsidian, Excel
 Status label: Private Client Build
 CTA label: View Case Study
 Suggested image/thumbnail: Dark Obsidian dashboard mockup with property cards and resolved/unresolved status chips.
Medium card
Title: Foretrace
 Tagline: Turning scattered foreclosure records into a structured deal-review workflow.
 Description: Foretrace started as a Streamlit prototype and evolved into an Obsidian CRM integration for a private client. The system scrapes multi-county foreclosure listings, joins them against Excel tax data, uses GPT-4o as a fallback resolver for uncertain property matches, and exports deal sheets into the client’s existing folder structure.
 Stack labels: Python, GPT-4o, Streamlit, Obsidian, Excel, Parallel Workers
 Status label: Private Client / Partially Public Case Study
 CTA label: Read the Technical Case Study
 Suggested image/thumbnail: Pipeline diagram flowing from county sources and Excel records into Obsidian.
Technical card
Title: Foretrace
 Tagline: Python data pipeline for foreclosure record matching and CRM automation.
 Description: Built a multi-stage backend workflow for scraping county foreclosure records, normalizing data, joining against Excel tax files, resolving ambiguous matches with GPT-4o, benchmarking parallel workers, and publishing results into an Obsidian-based client dashboard.
 Stack labels: Python, GPT-4o, Streamlit, Obsidian, Excel, Data Matching, Parallel Processing
 Status label: Private Client Build
 CTA label: Explore Architecture
 Suggested image/thumbnail: Technical architecture diagram with worker lanes and AI fallback branch.
Client-facing card
Title: Foretrace
 Tagline: Custom research automation for real estate workflows.
 Description: A private client workflow that reduces repetitive foreclosure research by gathering listing data, matching it with tax records, surfacing uncertain matches for review, and exporting organized deal sheets inside the client’s existing CRM.
 Stack labels: Automation, Data Matching, AI Assistance, CRM Integration
 Status label: Client Automation System
 CTA label: See Workflow
 Suggested image/thumbnail: Clean before/after workflow visual.

13. Case Study Copy
Hero headline
Foretrace: automating foreclosure research inside a client’s Obsidian CRM
Hero subheadline
A Python-powered client automation system that collects county foreclosure data, matches it against Excel tax records, uses GPT-4o for ambiguous property resolution, and exports deal sheets from a workflow-native dashboard.
Overview paragraph
Foretrace is a private client project built under Vanta Solutions to automate a foreclosure research workflow. The system gathers listing data from several New Jersey county sources, joins those records against Excel-based tax data, resolves uncertain matches with GPT-4o when deterministic logic is not enough, and publishes results into the client’s Obsidian CRM. The project began as a Streamlit dashboard and evolved into a more useful workflow integration with one-button resolves, parallel scraping, and deal sheet exports.
Problem paragraph
Before Foretrace, the client’s workflow required manually moving between foreclosure listing sources, tax spreadsheets, CRM notes, and deal sheet preparation. The work was repetitive and fragmented: collect records, compare them against tax data, identify lot matches, review ambiguous cases, and organize final outputs. The challenge was not simply displaying data; it was turning scattered public records and spreadsheet-based property data into a repeatable review process.
Solution paragraph
The solution was a Python automation pipeline that handles the workflow in stages. The scraper collects foreclosure records from multiple county sources, the processing layer normalizes and joins records against Excel tax data, and the matching layer identifies likely property matches. When programmatic matching cannot resolve a record, GPT-4o assists with candidate matching. Results are then written into an Obsidian dashboard that fits the client’s existing CRM process, with resolve actions and exports that generate deal sheets directly into the client’s folder structure.
Technical architecture paragraph
Foretrace uses a staged data architecture: external foreclosure listing records and Excel tax files enter a Python backend, where they are cleaned, normalized, and matched. The backend uses parallel scraping and joining to improve throughput, with benchmarking across different worker counts to evaluate performance. Deterministic matching handles straightforward records, while GPT-4o is used selectively for ambiguous cases. The output layer updates an Obsidian-based dashboard and supports deal sheet exports, giving the client a practical review surface without requiring a separate SaaS-style application.
Key features section
Multi-county foreclosure data collection: Collects listing records from several New Jersey county sources.
Excel tax-data matching: Joins scraped records against spreadsheet-based tax records to identify matching lots.
GPT-4o fallback resolver: Uses AI only when deterministic matching cannot confidently resolve a record.
Parallel scraping and joining: Uses a worker-based structure to improve runtime and throughput.
Worker benchmark testing: Compares different worker counts to tune scraping performance.
Streamlit prototype: Initial dashboard used to validate the workflow quickly.
Obsidian CRM integration: Upgraded dashboard fits into the client’s existing workspace.
One-button resolves: Helps process uncertain matches from the dashboard.
Deal sheet exports: Generates deal sheets directly into the client’s existing folder structure.
Challenge paragraph
The hardest part of the project was not scraping data; it was making the data useful. Foreclosure listings and tax records can differ in formatting, completeness, and identifiers, which makes property matching a real entity-resolution problem. Foretrace addresses this by combining deterministic matching rules with a GPT-4o fallback path for ambiguous records, keeping the workflow reviewable instead of pretending every match can be fully automated.
Outcome paragraph
The final system turns a fragmented foreclosure research process into a structured workflow. The client can work from an Obsidian dashboard, review updated records, resolve uncertain matches, and export deal sheets without rebuilding the research trail manually. The result is a practical automation system that supports faster, more organized property review.
Lessons learned paragraph
Foretrace reinforced that the best technical solution is not always a standalone app. The first Streamlit version was useful for proving the idea, but the stronger product decision was integrating with Obsidian because that was where the client already worked. The project also showed the importance of using AI selectively: deterministic matching should handle the obvious cases, while GPT-4o should assist with the ambiguous ones.
Future roadmap paragraph
Future improvements could include formal match-confidence scoring, better logging, configurable county adapters, incremental scraping, stronger test fixtures for source changes, improved unresolved-match review queues, export templates, and privacy-safe reporting dashboards.
CTA paragraph
Foretrace represents the kind of practical automation Vanta Solutions is built to deliver: systems that connect messy data, intelligent processing, and real client workflows into tools that save time and support better decisions.

14. Blog Post Opportunities
1. Building a Python Pipeline for Foreclosure Research Automation
Subtitle: How I turned scattered county listings and Excel tax records into a reviewable client workflow.
 Target audience: Recruiters, backend engineers, clients.
 Why valuable: Best general case-study post.
 Main angle: End-to-end system design.
 Outline:
The manual workflow.
Why scraping alone was not enough.
Excel tax data as a reference source.
Matching records.
GPT fallback.
Obsidian integration.
Lessons learned.
 Technical details: Python pipeline, joins, matching, exports.
 Visuals: Full architecture diagram, before/after workflow.
 Code snippets: Sanitized pipeline pseudocode.
 SEO keywords: Python automation, data pipeline, workflow automation, real estate data automation.
 Difficulty: Medium.
 Write now or later: Write now.
2. Why the Hard Part Was Property Matching, Not Scraping
Subtitle: Lessons from joining messy foreclosure listings against tax records.
 Target audience: Data engineers, technical interviewers.
 Why valuable: Shows engineering depth.
 Main angle: Entity resolution.
 Outline:
Raw data collection.
Why records do not line up.
Normalization.
Deterministic matching.
Ambiguous cases.
Human review.
 Technical details: Matching keys, normalization, confidence states.
 Visuals: Matching decision tree.
 Code snippets: Example matching function with fake data.
 SEO keywords: entity resolution, record linkage, Python data matching, Excel data pipeline.
 Difficulty: High.
 Write now or later: Write after you can show more matching details.
3. Using GPT-4o as a Fallback Resolver Instead of a Magic Button
Subtitle: A practical pattern for adding LLMs to messy data workflows.
 Target audience: AI engineers, recruiters, technical readers.
 Why valuable: Shows mature AI integration.
 Main angle: LLMs as selective fallback systems.
 Outline:
Why not send everything to GPT?
Deterministic first pass.
Candidate selection.
Prompt structure.
Reviewable outputs.
Cost/reliability benefits.
 Technical details: Prompt shape, candidate lists, validation boundaries.
 Visuals: AI fallback branch diagram.
 Code snippets: Sanitized GPT resolver pseudocode.
 SEO keywords: GPT-4o entity resolution, LLM fallback, AI data matching, human-in-the-loop AI.
 Difficulty: High.
 Write now or later: Write soon, after sanitizing examples.
4. From Streamlit Prototype to Obsidian CRM Integration
Subtitle: Why the best dashboard was the one that fit the client’s existing workflow.
 Target audience: Product-minded engineers, founders, clients.
 Why valuable: Shows product judgment.
 Main angle: Workflow-native software.
 Outline:
Building the first prototype.
What Streamlit validated.
Why standalone dashboards create friction.
Why Obsidian fit the client.
How exports completed the workflow.
 Technical details: Dashboard output, file-based CRM integration.
 Visuals: Streamlit → Obsidian timeline.
 Code snippets: Optional Markdown generation example.
 SEO keywords: Streamlit prototype, Obsidian CRM, workflow automation, internal tools.
 Difficulty: Medium.
 Write now or later: Write now.
5. Benchmarking Parallel Scrapers: How Many Workers Is Too Many?
Subtitle: Measuring worker counts in a Python scraping pipeline.
 Target audience: Backend engineers, technical interviewers.
 Why valuable: Shows performance engineering.
 Main angle: Benchmark-driven optimization.
 Outline:
Why parallelism mattered.
Worker pool setup.
Benchmark methodology.
Results.
Tradeoffs.
Lessons.
 Technical details: Worker count, runtime, error rates, rate limits.
 Visuals: Worker count vs runtime chart.
 Code snippets: concurrent.futures pseudocode if confirmed.
 SEO keywords: Python parallel scraping, worker benchmark, concurrent futures scraping.
 Difficulty: High.
 Write now or later: Later, after you gather real benchmark numbers.
6. Designing Human-in-the-Loop Automation for Client Workflows
Subtitle: Why Foretrace keeps uncertain property matches reviewable.
 Target audience: Clients, founders, AI engineers.
 Why valuable: Shows responsible automation.
 Main angle: Automation should accelerate judgment, not hide uncertainty.
 Outline:
What should be automated.
What should be reviewed.
Resolve queues.
AI fallback.
Export workflow.
 Technical details: Match statuses, review states.
 Visuals: Review queue mockup.
 Code snippets: Status enum example.
 SEO keywords: human in the loop automation, AI workflow design, client automation.
 Difficulty: Medium.
 Write now or later: Write now.
7. Building Client Software Around Existing Tools
Subtitle: The case for integrating with Obsidian instead of forcing a new app.
 Target audience: Founders, consultants, clients.
 Why valuable: Shows consulting/product maturity.
 Main angle: Adoption > novelty.
 Outline:
The temptation to build a new app.
Existing workflow constraints.
File-native integrations.
Obsidian as CRM surface.
Lessons for client software.
 Technical details: Obsidian/Markdown output if confirmed.
 Visuals: CRM integration diagram.
 Code snippets: Optional generated note template.
 SEO keywords: custom software consulting, Obsidian workflow, internal tools.
 Difficulty: Low to medium.
 Write now or later: Write now.
8. Privacy-Safe Case Studies for Client Automation Projects
Subtitle: How to show technical depth without exposing client data.
 Target audience: Developers with client projects, recruiters.
 Why valuable: Useful meta-post for your portfolio.
 Main angle: Showing private work responsibly.
 Outline:
What not to show.
How to anonymize data.
Mock dashboards.
Architecture diagrams.
Claims and evidence.
 Technical details: Sanitized sample data patterns.
 Visuals: Before/after anonymization.
 Code snippets: Fake data generator.
 SEO keywords: private client case study, portfolio privacy, software consulting portfolio.
 Difficulty: Low.
 Write now or later: Write now.
Best blog picks
Best beginner-friendly blog post: Building Client Software Around Existing Tools.
Best technical deep dive: Why the Hard Part Was Property Matching, Not Scraping.
Best founder/product post: From Streamlit Prototype to Obsidian CRM Integration.
Best recruiter-facing post: Building a Python Pipeline for Foreclosure Research Automation.
Best post to pair with the project page: Using GPT-4o as a Fallback Resolver Instead of a Magic Button.

15. Resume and LinkedIn Translation
Resume bullets
Use these selectively. Pick 2–3 max for a resume.
Built a Python data automation pipeline that scrapes foreclosure listing data across multiple New Jersey counties and joins results against Excel tax records for property-level matching.
Integrated GPT-4o as a fallback entity-resolution layer for ambiguous property matches after deterministic matching logic failed.
Migrated an initial Streamlit prototype into an Obsidian-based client CRM dashboard with resolve actions and deal sheet exports.
Benchmarked parallel scraping performance across worker counts to tune throughput and improve pipeline efficiency.
Automated the path from county listing research to client-ready deal sheet exports, reducing repetitive manual handoff across websites, spreadsheets, and CRM notes.
Designed a human-in-the-loop property review workflow that keeps uncertain matches visible while automating high-confidence record joins.
Processed foreclosure listing and tax-record data through a staged Python backend for scraping, normalization, matching, AI fallback resolution, and file-based exports.
Delivered a private client automation system aligned with an existing Obsidian CRM, improving adoption by integrating directly into the client’s established workflow.
Developed configurable scraping and matching logic for multi-county foreclosure research, supporting scalable expansion across similar county data sources.
Built a workflow-native internal tool combining Python automation, Excel data ingestion, GPT-4o-assisted matching, and Obsidian dashboard generation.
LinkedIn project description
Foretrace is a private client automation project I built under Vanta Solutions to streamline foreclosure research. The system uses Python to collect foreclosure listing data from multiple New Jersey county sources, joins those records against Excel tax datasets, and applies programmatic property matching to identify likely lot-level matches. When deterministic matching cannot confidently resolve a record, GPT-4o is used as a fallback resolver for ambiguous cases.
The project started as a Streamlit dashboard and evolved into an Obsidian-based CRM integration tailored to the client’s existing workflow. The upgraded version supports dashboard updates, one-button resolves, parallel scraping and join logic, worker-count benchmarking, and deal sheet exports into the client’s folder structure.
This project is a strong example of practical data automation: combining backend engineering, real-world data cleaning, AI-assisted matching, and workflow-aware product design.
Interview explanation
Foretrace was a private client project where I built a Python automation pipeline for foreclosure research. The client needed to collect foreclosure listings from several New Jersey county sources and compare those records against Excel tax data to find matching properties.
The first version was a Streamlit dashboard, which helped prove the workflow. But the client already used Obsidian as a CRM, so I upgraded the system to integrate into their existing Obsidian workflow instead of forcing them to use a separate app.
The technically interesting part was the matching layer. The scraper could collect data, but the real challenge was joining those records against tax data when fields were inconsistent or ambiguous. I used deterministic matching first, then GPT-4o as a fallback resolver only when programmatic matching could not confidently resolve a property. I also benchmarked different worker counts for the scraping process to improve efficiency.
The final workflow let the client review updated records in Obsidian, resolve uncertain matches, and export deal sheets directly into their deal sheet folder.
30-second pitch
Foretrace is a private client automation system I built for foreclosure research. It uses Python to collect listing data from multiple New Jersey county sources, joins those records against Excel tax data, and uses GPT-4o as a fallback when property matches are ambiguous. I first built it as a Streamlit prototype, then upgraded it into the client’s Obsidian CRM with one-button resolves, parallel scraping, and deal sheet exports.
2-minute pitch
Foretrace is one of my strongest client automation projects because it solved a real operational workflow, not just a technical toy problem. The client needed to research foreclosure listings across several New Jersey counties, compare those listings against Excel tax records, identify matching lots, and organize the results into deal sheets.
I built a Python pipeline that collects the listing data, normalizes it, joins it against the tax data, and attempts deterministic property matching first. The key challenge was that not every listing cleanly matches the tax records, so I added GPT-4o as a fallback resolver for ambiguous cases. I tried to use AI responsibly: it does not replace the whole matching system; it only helps when the programmatic logic fails.
The first version was a Streamlit dashboard, which was useful for validating the workflow. But the client already used Obsidian as their CRM, so the stronger product move was integrating the system into Obsidian. The upgraded version updates the dashboard from scraped results, supports one-button resolves, uses parallel scraping and joining for efficiency, and exports deal sheets directly into the client’s deal sheet folder.
What I like about the project is that it combines backend engineering, data processing, AI integration, and client-centered product design. It shows I can understand a messy real-world process and build software that actually fits how someone works.

16. Implementation Guidance for CLI
Files/components likely needed
Assuming a React/Vite or Next.js portfolio:
src/
  data/
    projects.ts
    blogIdeas.ts
  pages/
    projects/
      ForetracePage.tsx
  components/
    projects/
      ProjectHero.tsx
      ProjectMeta.tsx
      StackChips.tsx
      ArchitectureDiagram.tsx
      FeatureGrid.tsx
      WorkflowComparison.tsx
      MediaGallery.tsx
      ChallengeSection.tsx
      TechStackPanel.tsx
      ImpactCards.tsx
      RoadmapSection.tsx
      CaseStudySection.tsx
      ProjectCTA.tsx
  assets/
    projects/
      foretrace/
        hero-dashboard.png
        architecture.svg
        matching-flow.svg
        worker-benchmark.png
        obsidian-dashboard-mock.png
        deal-sheet-export.gif
Data object shape
Use a single data object for the project and render sections dynamically.
type Project = {
  id: string;
  slug: string;
  title: string;
  tagline: string;
  status: string;
  timeline: string;
  category: string[];
  visibility: "public" | "private" | "partially-public" | "unknown";
  featured: boolean;
  priority: number;
  stack: string[];
  summary: string;
  longDescription: string;
  problem: string;
  solution: string;
  architecture: {
    simple: string;
    technical: string;
    steps: string[];
  };
  features: {
    name: string;
    description: string;
    type: string[];
    visual?: string;
  }[];
  impact: {
    label: string;
    description: string;
    evidenceStatus: "confirmed" | "qualitative" | "needs-metric";
  }[];
  challenges: {
    title: string;
    summary: string;
    proof: string;
  }[];
  visuals: {
    name: string;
    type: string;
    priority: "high" | "medium" | "low";
    description: string;
  }[];
  seo: {
    title: string;
    description: string;
    keywords: string[];
  };
  privacyNotes: string[];
};
Suggested route
/projects/foretrace
Suggested component hierarchy
<ProjectPage>
  <ProjectHero />
  <ProjectOverview />
  <ProblemSolution />
  <WorkflowComparison />
  <ArchitectureDiagram />
  <FeatureGrid />
  <TechStackPanel />
  <ChallengeSection />
  <ImpactCards />
  <MediaGallery />
  <LessonsLearned />
  <RoadmapSection />
  <ProjectCTA />
</ProjectPage>
Suggested props
ProjectHero
{
  title: "Foretrace",
  eyebrow: "Private Client Build",
  tagline: "...",
  stack: ["Python", "GPT-4o", "Streamlit", "Obsidian", "Excel"],
  image: "/assets/projects/foretrace/hero-dashboard.png"
}
FeatureGrid
{
  features: [
    {
      name: "GPT-4o fallback matching",
      description: "Uses GPT-4o only when deterministic matching cannot confidently resolve a property.",
      icon: "Brain"
    }
  ]
}
ArchitectureDiagram
{
  sources: ["County Foreclosure Sources", "Excel Tax Records"],
  pipeline: ["Parallel Scraper Workers", "Normalizer", "Matching Engine"],
  ai: "GPT-4o Fallback Resolver",
  outputs: ["Obsidian Dashboard", "Deal Sheet Exports"]
}
Suggested sections
Hero.
Overview.
Problem.
Solution.
Architecture.
Matching logic.
AI fallback.
Product evolution.
Features.
Results.
Screenshots.
Lessons.
Roadmap.
CTA.
Suggested animations
Hero dashboard fades up.
Data cards slide from left to right.
Match status chip transitions from amber to green.
Architecture arrows animate on scroll.
Worker lanes animate in parallel.
Deal sheet export icon slides into folder.
Suggested responsive behavior
Desktop:
Split hero layout.
Architecture diagram full width.
Feature grid 3 columns.
Media gallery 2 columns.
Tablet:
Hero stacks.
Feature grid 2 columns.
Diagram scrolls horizontally if needed.
Mobile:
Single-column layout.
Replace complex diagram with stacked step cards.
Keep screenshots cropped and readable.
Use short section headings.
Suggested placeholder assets
Use fake/anonymized data:
123 Example Ave
Block 0000
Lot 00
County A
Index 000000/2026
Match Status: Resolved
Review Status: Needs Review
Deal Sheet: example-deal-sheet.md
Suggested JSON/YAML project object
Use the detailed object in section 17.
Suggested MDX frontmatter object
---
title: "Foretrace: Building a Foreclosure Research Automation Pipeline"
description: "A case study on Python scraping, Excel tax-data matching, GPT-4o fallback resolution, and Obsidian CRM integration."
date: "2026-XX-XX"
project: "foretrace"
tags:
  - Python
  - Data Engineering
  - Automation
  - GPT-4o
  - Obsidian
  - Streamlit
visibility: "sanitized-client-case-study"
---
Accessibility considerations
Do not rely on color alone for match statuses.
Use labels like “Resolved,” “Needs Review,” and “AI Suggested.”
Add alt text for diagrams.
Ensure dashboard screenshots have readable contrast.
Provide text explanation below architecture visuals.
Avoid tiny table text on mobile.
Use keyboard-accessible accordions if sections collapse.
SEO metadata
Recommended keywords:
Python automation
data pipeline
workflow automation
foreclosure research automation
GPT-4o integration
entity resolution
record matching
Obsidian CRM
Streamlit dashboard
client automation software
Privacy placeholders
Include a visible note:
All screenshots use anonymized or fictional records. Client information, real addresses, private deal sheets, and source-specific operational details are omitted.

17. CLI-Ready Project Object
const foretraceProject = {
  id: "foretrace",
  slug: "foretrace",
  title: "Foretrace",
  tagline: "Foreclosure research automation for an Obsidian-based client CRM.",
  status: "Private Client Build",
  timeline: "2026 / exact dates unknown",
  category: [
    "Data Automation",
    "Backend Engineering",
    "Workflow Automation",
    "AI-Assisted Matching",
    "Client Software",
    "Real Estate Research Tools"
  ],
  featured: true,
  priority: 1,
  visibility: "partially-public",
  audience: [
    "Recruiters",
    "Backend Engineering Teams",
    "Data Engineering Teams",
    "AI/ML Engineering Teams",
    "Full-Stack Engineering Teams",
    "Consulting Clients",
    "Technical Interviewers"
  ],
  stack: {
    confirmed: [
      {
        name: "Python",
        role: "Core backend automation for scraping, data processing, matching, benchmarking, and exports."
      },
      {
        name: "Salesweb",
        role: "Source of foreclosure listing data across several New Jersey counties. Public copy should phrase this carefully as county foreclosure listing sources."
      },
      {
        name: "Excel Tax Data",
        role: "Reference dataset used for joining and matching lot/property records."
      },
      {
        name: "GPT-4o",
        role: "Fallback resolver for ambiguous property matches when programmatic matching fails."
      },
      {
        name: "Streamlit",
        role: "Initial dashboard prototype."
      },
      {
        name: "Obsidian",
        role: "Client CRM/workspace where the upgraded dashboard is integrated."
      },
      {
        name: "Parallel Workers",
        role: "Performance-oriented scraping and joining structure with worker-count benchmarks."
      }
    ],
    likelyButUnconfirmed: [
      "pandas",
      "openpyxl",
      "requests",
      "BeautifulSoup",
      "Selenium or Playwright",
      "concurrent.futures",
      "Markdown generation",
      "local filesystem storage",
      "batch scripts"
    ],
    doNotClaimUnlessConfirmed: [
      "FastAPI",
      "Flask",
      "PostgreSQL",
      "Supabase",
      "SQLite",
      "Docker",
      "NSSM",
      "Cloud deployment",
      "Authentication",
      "CI/CD",
      "Monitoring stack",
      "Official API usage",
      "100% matching accuracy"
    ]
  },
  summary:
    "Foretrace is a private client automation system that collects foreclosure listing data from multiple New Jersey county sources, joins it against Excel tax records, uses GPT-4o for ambiguous property matching, and publishes results into an Obsidian-based CRM workflow with resolve actions and deal sheet exports.",
  longDescription:
    "Foretrace began as a Streamlit dashboard for foreclosure research and evolved into a workflow-native Obsidian CRM integration. The system uses Python to scrape county foreclosure listings, normalize records, ingest Excel tax data, perform property-level matching, and route unresolved cases through GPT-4o as a fallback resolver. It includes parallel scraping and joining for performance, worker-count benchmark testing, one-button resolves, and exports that generate deal sheets directly into the client's folder structure.",
  problem:
    "The client's foreclosure research workflow was fragmented across county listing websites, Excel tax files, manual property matching, Obsidian CRM notes, and deal sheet preparation. The process required repetitive cross-referencing and made it difficult to quickly move from raw records to actionable review.",
  solution:
    "Build a Python automation pipeline that gathers foreclosure data, joins it against tax records, resolves ambiguous matches with GPT-4o when needed, and integrates the results into the client's existing Obsidian CRM with dashboard updates, resolve actions, and deal sheet exports.",
  architecture: {
    simple:
      "Foretrace collects foreclosure listings, compares them to tax records, uses AI when a match is unclear, and updates an Obsidian dashboard where the client can review and export deal sheets.",
    technical:
      "The system is a staged Python data pipeline: multi-county scraping, field normalization, Excel tax-data ingestion, deterministic property matching, GPT-4o fallback entity resolution, Obsidian dashboard output, and folder-based deal sheet exports. Performance is improved through parallel scraping/joining and benchmarked across worker counts.",
    dataFlow: [
      "County foreclosure sources provide raw listing records.",
      "Excel tax files provide reference property/lot data.",
      "Python scraper collects and normalizes listing data.",
      "Tax loader parses Excel records.",
      "Matching engine joins foreclosure records against tax data.",
      "Unresolved records are routed to GPT-4o fallback matching.",
      "Matched and unresolved records are written into an Obsidian dashboard.",
      "Selected records can be exported as deal sheets into the client's folder."
    ],
    diagramBoxes: [
      "County Foreclosure Sources",
      "Excel Tax Records",
      "Python Scraper Workers",
      "Normalizer",
      "Matching Engine",
      "GPT-4o Fallback Resolver",
      "Obsidian CRM Dashboard",
      "Deal Sheet Export Folder"
    ]
  },
  features: [
    {
      name: "Multi-county foreclosure data collection",
      description:
        "Collects foreclosure listing information from several New Jersey county sources.",
      categories: ["core", "recruiter", "technical"],
      visual: "County source tiles feeding into pipeline diagram."
    },
    {
      name: "Excel tax-data ingestion",
      description:
        "Loads Excel tax records and transforms them into reference data for property matching.",
      categories: ["core", "technical"],
      visual: "Spreadsheet-to-record transformation."
    },
    {
      name: "Programmatic property matching",
      description:
        "Joins scraped foreclosure records against tax data to find matching lots/properties.",
      categories: ["core", "impressive", "technical"],
      visual: "Matching table with resolved status."
    },
    {
      name: "GPT-4o fallback resolver",
      description:
        "Uses GPT-4o to assist with ambiguous property matches when deterministic matching cannot resolve a record.",
      categories: ["impressive", "AI", "technical"],
      visual: "Unresolved record branching into AI-assisted match card."
    },
    {
      name: "Streamlit prototype",
      description:
        "Initial dashboard used to validate the workflow quickly.",
      categories: ["product", "timeline"],
      visual: "Sanitized Streamlit dashboard screenshot."
    },
    {
      name: "Obsidian CRM integration",
      description:
        "Upgraded dashboard updates inside the client's existing Obsidian CRM.",
      categories: ["core", "product", "client-friendly"],
      visual: "Obsidian dashboard mockup."
    },
    {
      name: "One-button resolves",
      description:
        "Allows the client to resolve ambiguous records from the dashboard workflow.",
      categories: ["client-friendly", "visual"],
      visual: "GIF of unresolved card becoming resolved."
    },
    {
      name: "Parallel scraping and joins",
      description:
        "Uses a parallel worker structure to improve scraping and joining efficiency.",
      categories: ["technical", "performance"],
      visual: "Worker lanes animation."
    },
    {
      name: "Worker-count benchmarks",
      description:
        "Benchmarks scraping performance across varying worker counts.",
      categories: ["technical", "performance"],
      visual: "Worker count vs runtime chart."
    },
    {
      name: "Deal sheet exports",
      description:
        "Exports selected results directly into the client's deal sheet folder.",
      categories: ["core", "client-friendly", "visual"],
      visual: "Export-to-folder GIF."
    }
  ],
  impact: {
    confirmed: [
      "Built a Python system to scrape foreclosure information from several New Jersey counties.",
      "Joined scraped foreclosure data against Excel tax data.",
      "Used GPT-4o for records that could not be programmatically matched.",
      "Created an initial Streamlit dashboard.",
      "Upgraded the dashboard into the client's Obsidian CRM.",
      "Added one-button resolves.",
      "Added parallel scraping and join structure.",
      "Benchmarked scraping performance across worker counts.",
      "Enabled deal sheet exports into the client's deal sheet folder."
    ],
    qualitative: [
      "Reduced repetitive manual research.",
      "Made property review more organized.",
      "Integrated automation into the client's existing workflow.",
      "Used AI selectively for ambiguous cases.",
      "Connected raw data collection to actionable exports."
    ],
    metricsToCollect: [
      "Number of counties supported.",
      "Average scrape runtime.",
      "Number of records processed per run.",
      "Automatic match rate.",
      "GPT fallback rate.",
      "Manual review time before vs after.",
      "Worker benchmark results.",
      "Deal sheets exported.",
      "Client-reported time saved."
    ]
  },
  challenges: [
    {
      title: "Property record matching",
      summary:
        "The core challenge was joining messy foreclosure listing records against Excel tax records when fields did not always align cleanly.",
      proof:
        "Shows data engineering, normalization, entity resolution, and practical AI fallback design."
    },
    {
      title: "Workflow integration",
      summary:
        "The project evolved from a standalone Streamlit dashboard into an Obsidian CRM integration to fit the client's actual workflow.",
      proof:
        "Shows product judgment and client-centered engineering."
    },
    {
      title: "Performance tuning",
      summary:
        "The scraping workflow was benchmarked across worker counts to improve pipeline efficiency.",
      proof:
        "Shows backend optimization and measurement-driven iteration."
    },
    {
      title: "AI boundary design",
      summary:
        "GPT-4o was used only after deterministic matching failed, keeping the system grounded and reviewable.",
      proof:
        "Shows mature LLM integration rather than AI hype."
    }
  ],
  visuals: {
    style:
      "Dark, forensic, municipal, data-heavy, Obsidian-inspired, professional.",
    palette: [
      "#080A0C",
      "#12161B",
      "#1F2933",
      "#334155",
      "#E5E7EB",
      "#94A3B8",
      "#38BDF8",
      "#10B981",
      "#F59E0B"
    ],
    hero:
      "Obsidian CRM dashboard mockup with fake property records, match status chips, and export button.",
    diagrams: [
      "Full architecture diagram",
      "Matching decision tree",
      "Streamlit-to-Obsidian timeline",
      "Worker benchmark chart"
    ]
  },
  mediaAssetsNeeded: [
    {
      name: "Obsidian CRM Dashboard Mockup",
      type: "screenshot/mockup",
      priority: "high",
      description:
        "Sanitized dashboard showing fake foreclosure records, match status, resolve action, and export button."
    },
    {
      name: "Architecture Diagram",
      type: "SVG/React diagram",
      priority: "high",
      description:
        "County sources and Excel data flowing into Python pipeline, GPT fallback, Obsidian dashboard, and deal sheet export."
    },
    {
      name: "Matching Flow Diagram",
      type: "diagram",
      priority: "high",
      description:
        "Exact/programmatic matching first, GPT fallback second, human review for uncertainty."
    },
    {
      name: "Deal Sheet Export GIF",
      type: "GIF/video",
      priority: "high",
      description:
        "Click export and show fake deal sheet appearing in a folder."
    },
    {
      name: "Worker Benchmark Chart",
      type: "chart",
      priority: "medium",
      description:
        "Runtime vs worker count using real benchmark data if available."
    },
    {
      name: "Streamlit Prototype Screenshot",
      type: "screenshot/mockup",
      priority: "medium",
      description:
        "Initial dashboard prototype with fake data."
    }
  ],
  caseStudySections: [
    "Hero",
    "Overview",
    "Problem",
    "Solution",
    "Architecture",
    "Matching Logic",
    "AI Fallback",
    "Product Evolution",
    "Features",
    "Performance",
    "Impact",
    "Screenshots",
    "Lessons Learned",
    "Roadmap",
    "CTA"
  ],
  blogIdeas: [
    "Building a Python Pipeline for Foreclosure Research Automation",
    "Why the Hard Part Was Property Matching, Not Scraping",
    "Using GPT-4o as a Fallback Resolver Instead of a Magic Button",
    "From Streamlit Prototype to Obsidian CRM Integration",
    "Benchmarking Parallel Scrapers: How Many Workers Is Too Many?",
    "Designing Human-in-the-Loop Automation for Client Workflows",
    "Building Client Software Around Existing Tools",
    "Privacy-Safe Case Studies for Client Automation Projects"
  ],
  resumeBullets: [
    "Built a Python data automation pipeline that scrapes foreclosure listing data across multiple New Jersey counties and joins results against Excel tax records for property-level matching.",
    "Integrated GPT-4o as a fallback entity-resolution layer for ambiguous property matches after deterministic matching logic failed.",
    "Migrated an initial Streamlit prototype into an Obsidian-based client CRM dashboard with resolve actions and deal sheet exports.",
    "Benchmarked parallel scraping performance across worker counts to tune throughput and improve pipeline efficiency.",
    "Automated the path from county listing research to client-ready deal sheet exports, reducing repetitive manual handoff across websites, spreadsheets, and CRM notes."
  ],
  seo: {
    title:
      "Foretrace Case Study | Python Foreclosure Research Automation with GPT-4o and Obsidian",
    description:
      "A private client case study on building a Python automation pipeline for foreclosure listings, Excel tax-data matching, GPT-4o-assisted property resolution, and Obsidian CRM integration.",
    keywords: [
      "Python automation",
      "data pipeline",
      "foreclosure research automation",
      "GPT-4o integration",
      "entity resolution",
      "record matching",
      "Obsidian CRM",
      "Streamlit dashboard",
      "workflow automation",
      "client automation software"
    ]
  },
  privacyNotes: [
    "Use anonymized screenshots only.",
    "Do not show real client data.",
    "Do not show real property addresses.",
    "Do not show private deal sheets.",
    "Do not expose API keys or prompts containing client data.",
    "Phrase scraping carefully as county listing data collection.",
    "Avoid claims of legal, financial, or investment advice.",
    "Avoid claiming guaranteed accuracy or profitability."
  ],
  unknowns: [
    "Exact project dates.",
    "Exact number of counties supported.",
    "Exact scraping libraries used.",
    "Exact Excel parsing library.",
    "Exact concurrency implementation.",
    "Whether Markdown files are generated for Obsidian.",
    "Whether the system has a database.",
    "Whether the system runs manually, on a schedule, or as a service.",
    "Actual benchmark results.",
    "Actual match rate.",
    "Actual time saved.",
    "Exact deal sheet format."
  ],
  nextSteps: [
    "Confirm public project name.",
    "Collect real benchmark numbers.",
    "Create fake/sanitized Obsidian dashboard screenshot.",
    "Document matching logic at a high level.",
    "Create architecture diagram.",
    "Decide which source names are safe to mention publicly.",
    "Write the main case study page.",
    "Create one technical blog post about GPT fallback matching.",
    "Create one product blog post about Streamlit-to-Obsidian evolution."
  ]
};

18. Unknowns and Follow-Up Questions
Critical unknowns
These affect public accuracy.
Exact project name
Is “Foretrace” definitely the public-facing name?
Exact timeline
When did the project start?
Is it ongoing?
When did Streamlit version happen?
When did Obsidian integration happen?
Number of counties
How many New Jersey counties are supported?
Exact source visibility
Are you comfortable naming Salesweb publicly?
Should public copy only say “county foreclosure listing portals”?
Terms/compliance posture
Are there any source restrictions that should affect how the public case study is worded?
Actual benchmark results
What worker counts were tested?
What runtimes did each produce?
Actual impact metrics
How long did the manual workflow take before?
How long does a full run take now?
How many records are processed per run?
Actual match performance
What percentage are matched programmatically?
What percentage require GPT fallback?
What percentage still need manual review?
Obsidian implementation
Does it generate Markdown files?
Does it update existing notes?
Does it use buttons/plugins?
Does it run from scripts?
Deal sheet format
Are exports Markdown, Excel, PDF, DOCX, CSV, or another format?
Nice-to-have unknowns
Exact county list.
Exact Python libraries.
Exact file structure.
Whether there is a config file.
Whether logs are stored.
Whether errors are retried.
Whether GPT prompts are structured JSON.
Whether match confidence is tracked.
Whether there is a cache.
Whether the client runs it manually or automatically.
Whether exports use templates.
Whether the project has tests.
Whether the Streamlit prototype still exists.
Whether screenshots can be sanitized from real UI.
Questions to answer later
What is the official public name: Foretrace or something else?
Can I publicly say this was for foreclosure research?
Can I publicly mention New Jersey?
Can I publicly mention Salesweb?
How many counties does the current version support?
What fields are scraped?
What fields are used for matching?
What Excel columns are used?
How does the GPT-4o fallback prompt work at a high level?
Is GPT output automatically accepted or manually reviewed?
What exact runtime improvements came from parallel workers?
What worker counts were benchmarked?
What does “one-button resolve” technically do?
What does the Obsidian dashboard look like?
Are deal sheets generated as Markdown, PDF, Excel, or another format?
What would be safe to show in screenshots?
What claims would the client be comfortable with?
Can you quote any client feedback?
Is there a public GitHub repo, private repo, or no repo?
Is this actively maintained?

19. CLI_BUILD_PACKET
PROJECT: Foretrace

FINAL POSITIONING:
Foretrace is a private client automation system under Vanta Solutions that turns foreclosure research into a structured, reviewable workflow. It should be presented as a backend/data automation and AI-assisted matching project, not as a generic scraper or investment tool. The strongest framing is: Python data pipeline + Excel tax-data matching + GPT-4o fallback entity resolution + Obsidian CRM integration + deal sheet exports.

PUBLIC TAGLINE:
Foreclosure research automation for an Obsidian-based client CRM.

ONE-LINE:
Built a Python-powered workflow that collects multi-county foreclosure listing data, joins it against Excel tax records, resolves ambiguous matches with GPT-4o, and exports deal sheets from an Obsidian dashboard.

VISIBILITY:
Partially public. Use sanitized screenshots and fake data. Do not expose client data, private addresses, deal sheets, API keys, exact source implementation details, or anything that sounds like bypassing site restrictions.

FINAL STACK:
Confirmed:
- Python
- Salesweb / county foreclosure listing sources
- Excel tax data
- GPT-4o
- Streamlit
- Obsidian
- Parallel scraping/workers
- Deal sheet folder exports

Likely but unconfirmed:
- pandas
- openpyxl
- requests / BeautifulSoup / lxml
- Selenium / Playwright
- concurrent.futures / multiprocessing / asyncio
- Markdown generation
- local filesystem storage
- Windows scripts

Do not claim unless verified:
- FastAPI
- Flask
- PostgreSQL
- SQLite
- Supabase
- Docker
- NSSM
- Cloud deployment
- Authentication
- CI/CD
- Monitoring
- Official API usage
- 100% accuracy
- Real-time SaaS

FINAL PAGE ROUTE:
/projects/foretrace

SEO TITLE:
Foretrace Case Study | Python Foreclosure Research Automation with GPT-4o and Obsidian

SEO DESCRIPTION:
A private client case study on building a Python automation pipeline for foreclosure listings, Excel tax-data matching, GPT-4o-assisted property resolution, and Obsidian CRM integration.

FINAL PAGE SECTIONS:
1. Hero
2. Overview
3. Problem
4. Solution
5. Architecture
6. Matching Logic
7. AI Fallback
8. Product Evolution: Streamlit to Obsidian
9. Features
10. Technical Stack
11. Performance / Worker Benchmark
12. Impact
13. Screenshots / Media
14. Challenges
15. Lessons Learned
16. Future Roadmap
17. CTA

FINAL HERO COPY:
Foretrace is a private client automation system that turns foreclosure listing research into a structured review workflow. Built with Python, the system collects county foreclosure data, joins it against Excel tax records, uses GPT-4o for ambiguous property matches, and publishes results into the client’s Obsidian CRM with resolve actions and deal sheet exports.

FINAL PROBLEM COPY:
The client’s foreclosure research workflow was fragmented across county listing sources, Excel tax files, manual property matching, Obsidian CRM notes, and deal sheet preparation. The bottleneck was not one task; it was the repeated handoff between sources, spreadsheets, review notes, and final outputs.

FINAL SOLUTION COPY:
Foretrace automates the workflow in stages: Python scripts gather foreclosure records, normalize the data, join results against Excel tax records, and identify confident property matches. When programmatic matching cannot resolve a record, GPT-4o assists with candidate matching. Final results are surfaced inside the client’s Obsidian dashboard, where unresolved records can be reviewed and deal sheets can be exported.

FINAL ARCHITECTURE COPY:
The architecture is built around a staged data pipeline. County listing data and Excel tax records enter the Python backend, where records are normalized and matched. Ambiguous cases branch into a GPT-4o fallback resolver. Matched and unresolved records are written into the client’s Obsidian CRM and exported into the deal sheet folder when selected.

FINAL FEATURES:
- Multi-county foreclosure data collection
- Excel tax-data ingestion
- Programmatic property matching
- GPT-4o fallback resolver
- Streamlit prototype
- Obsidian CRM integration
- One-button resolves
- Parallel scraping and joining
- Worker-count benchmark testing
- Deal sheet exports

FINAL MEDIA PLAN:
High priority:
1. Obsidian CRM dashboard mockup with fake records.
2. Full architecture diagram.
3. Matching decision tree.
4. GPT fallback review card.
5. Deal sheet export GIF.

Medium priority:
1. Streamlit prototype screenshot.
2. Worker benchmark chart.
3. Streamlit-to-Obsidian timeline.
4. Parallel worker animation.

Privacy-safe fake data:
- 123 Example Ave
- County A
- Block 0000
- Lot 00
- Index 000000/2026
- Match Status: Resolved
- Review Status: Needs Review
- Deal Sheet: example-deal-sheet.md

FINAL CASE STUDY COPY BLOCKS:

Hero headline:
Foretrace: automating foreclosure research inside a client’s Obsidian CRM

Hero subheadline:
A Python-powered client automation system that collects county foreclosure data, matches it against Excel tax records, uses GPT-4o for ambiguous property resolution, and exports deal sheets from a workflow-native dashboard.

Overview:
Foretrace is a private client project built under Vanta Solutions to automate a foreclosure research workflow. The system gathers listing data from several New Jersey county sources, joins those records against Excel-based tax data, resolves uncertain matches with GPT-4o when deterministic logic is not enough, and publishes results into the client’s Obsidian CRM.

Challenge:
The hardest part was not scraping data; it was making the data useful. Foreclosure listings and tax records can differ in formatting, completeness, and identifiers, which makes property matching a real entity-resolution problem.

Outcome:
The final system turns a fragmented foreclosure research process into a structured workflow. The client can work from an Obsidian dashboard, review updated records, resolve uncertain matches, and export deal sheets without rebuilding the research trail manually.

Lessons:
The project showed that automation is most valuable when it fits the user’s existing workflow. The first Streamlit version proved the pipeline, but the stronger product decision was integrating directly into Obsidian.

FINAL BLOG IDEAS:
1. Building a Python Pipeline for Foreclosure Research Automation
2. Why the Hard Part Was Property Matching, Not Scraping
3. Using GPT-4o as a Fallback Resolver Instead of a Magic Button
4. From Streamlit Prototype to Obsidian CRM Integration
5. Benchmarking Parallel Scrapers: How Many Workers Is Too Many?
6. Designing Human-in-the-Loop Automation for Client Workflows
7. Building Client Software Around Existing Tools
8. Privacy-Safe Case Studies for Client Automation Projects

FINAL RESUME BULLETS:
- Built a Python data automation pipeline that scrapes foreclosure listing data across multiple New Jersey counties and joins results against Excel tax records for property-level matching.
- Integrated GPT-4o as a fallback entity-resolution layer for ambiguous property matches after deterministic matching logic failed.
- Migrated an initial Streamlit prototype into an Obsidian-based client CRM dashboard with resolve actions and deal sheet exports.
- Benchmarked parallel scraping performance across worker counts to tune throughput and improve pipeline efficiency.
- Automated the path from county listing research to client-ready deal sheet exports, reducing repetitive manual handoff across websites, spreadsheets, and CRM notes.

FINAL PRIVACY NOTES:
- Use fake records in screenshots.
- Do not show real client data.
- Do not show real addresses.
- Do not show private deal sheets.
- Do not expose API keys.
- Do not show GPT prompts containing client data.
- Do not overexplain source-specific scraping behavior.
- Publicly phrase source collection as county foreclosure listing data collection.
- Avoid legal, financial, or investment advice framing.
- Avoid guaranteed accuracy or profitability claims.

FINAL NEXT STEPS:
1. Confirm public project name.
2. Confirm exact timeline.
3. Confirm number of counties supported.
4. Gather worker benchmark numbers.
5. Gather before/after workflow timing if available.
6. Create anonymized Obsidian dashboard mockup.
7. Create architecture diagram.
8. Create matching decision tree.
9. Decide whether Salesweb can be named publicly.
10. Build /projects/foretrace using the structured project object.

