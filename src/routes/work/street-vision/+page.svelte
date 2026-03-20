<script>
    import streetvision from "$lib/assets/work/street-vision/streetvision.png";
    import completestreets from "$lib/assets/work/street-vision/complete-streets.png";
    import dundas from "$lib/assets/work/street-vision/dundas.png";
    import semantic from "$lib/assets/work/street-vision/semantic.png";
    import home from "$lib/assets/work/street-vision/home.png";
    import scan from "$lib/assets/work/street-vision/scan.png";
    import report from "$lib/assets/work/street-vision/report.png";
    import { MagnifyingGlassIcon, ShieldCheckIcon, ArticleIcon } from "phosphor-svelte";
    import Contents from "$lib/components/Contents.svelte";
    import Overview from "$lib/components/Overview.svelte";
    import Insight from "$lib/components/Insight.svelte";

    const sections = [
        { id: "overview", title: "Overview" },
        { id: "architecture", title: "Agentic Architecture" },
        { id: "interface", title: "Interface" },
        { id: "data-quality", title: "Data Quality" },
        { id: "reflection", title: "Reflection" },
    ];
</script>

<div class="flex flex-col gap-8 md:grid md:grid-cols-[1fr_4fr] md:gap-8">
    <aside class="hidden md:block">
        <Contents {sections} />
    </aside>

    <section class="prose mx-8 my-8 flex flex-col md:max-w-200">
        <Overview
            title="StreetVision"
            img={streetvision}
            roles={["GenAI / Technical Lead"]}
            timeline={["2024 - Present"]}
            technologies={["PydanticAI", "FastAPI", "Next.js", "Mapbox", "OSMnx"]}
            skills={[
                "GenAI Architecture",
                "Full-Stack Development",
                "Design Research",
            ]}
            showGithub={false}
            githubLink="https://github.com/ananmaysharan/street-vision"
            link=""
        />

        <section id="overview">
            <h3>Overview</h3>
            <h2>
                An agentic AI system that uses vision language models to score urban environments for walkability and accessibility from street-level imagery.
            </h2>

            <div class="flex flex-col gap-4">
                <Insight text="Conventional walkability scores measure distance to amenities, not the quality of the walk itself. A neighborhood can score well while its sidewalks are cracked, unlit, and missing curb ramps." />
                <Insight text="Object detection can count benches or flag crosswalks, but can't reason about context the way a planner would — language models unlock this capability." />
                <Insight text="Manual field audits which planners already do produce rich data but take weeks per neighborhood." />

            </div>

            <div class="flex flex-col items-center gap-10 my-8">
                <img src={dundas} alt="Street-level imagery" class="w-100 border border-border" />

                <img src={semantic} alt="Semantic analysis" class="w-full border border-border p-5" />
            </div>

            <h4>Background</h4>
            <p>
                This project was a prototype developed for the City of Toronto, which I started at the Canadian Urban Institute in late 2024. I was the technical lead, working with urban planners, an academic researcher, and a data analyst. The original prototype used a single VLM to evaluate street-level imagery against a structured urban design rubric based on the City of Toronto Complete Street guidelines. I presented findings and a strategic roadmap for AI implementation to stakeholders at CUI and the City of Toronto.
            </p>
                        <p>
                Testing the prototype with planners through in-context observations and stakeholder interviews surfaced a few things that led to an iteration on the intervention. Planners needed to see evidence, not just scores. Single-model scoring had reliability issues. Imagery quality varied wildly and the system was silently hiding data gaps. And the first question planners asked was always "can I trust this?" rather than "what's the score?"
            </p>
            <div class="my-10">
                <img src={completestreets} alt="Complete Streets guidelines" class="mx-auto h-100 shadow-xl cursor-pointer hover:rotate-2 transition" />
            </div>
            <Insight text="Planners were already using Google Street View imagery manually to triage areas to perform field inspections in." />

            <p>
                We rebuilt the system from the ground up as a full-stack application with a multi-agent pipeline, an evidence-first interface, and data quality as a first-class concern.
            </p>
        </section>

        <section id="architecture">
            <h3>Agentic Architecture</h3>
            <p>
                I designed an agentic pipeline to address the reliability issues we observed in the initial prototype. Each agent has a specific role, runs on a deliberately chosen model, and produces structured output that the next agent (or the frontend) can consume.
            </p>

            <div class="not-prose grid grid-cols-1 gap-4 my-8 md:grid-cols-3">
                <div class="border border-border p-6 flex flex-col gap-4">
                    <div class="flex items-center gap-3">
                        <div class="border border-border p-2">
                            <MagnifyingGlassIcon size={24} weight="bold" />
                        </div>
                        <div>
                            <p class="font-serif text-base font-medium m-0">Scoring Agent</p>
                            <p class="text-text-secondary text-sm m-0">Gemini 3 Flash</p>
                        </div>
                    </div>
                    <p class="text-sm leading-relaxed m-0">
                        Takes 4-6 street images per sample point. Chain-of-thought prompting: describe what you see, reason against each rubric criterion, assign scores. Outputs 10 subscores with justifications and a confidence score.
                    </p>
                </div>

                <div class="border border-border p-6 flex flex-col gap-4">
                    <div class="flex items-center gap-3">
                        <div class="border border-border p-2">
                            <ShieldCheckIcon size={24} weight="bold" />
                        </div>
                        <div>
                            <p class="font-serif text-base font-medium m-0">Verification Agent</p>
                            <p class="text-text-secondary text-sm m-0">Claude Sonnet</p>
                        </div>
                    </div>
                    <p class="text-sm leading-relaxed m-0">
                        Adversarial second opinion on ~20% of points (random sample + outliers). Receives scores and raw images, can confirm, adjust, or flag for human review. A different model family catches systematic bias.
                    </p>
                </div>

                <div class="border border-border p-6 flex flex-col gap-4">
                    <div class="flex items-center gap-3">
                        <div class="border border-border p-2">
                            <ArticleIcon size={24} weight="bold" />
                        </div>
                        <div>
                            <p class="font-serif text-base font-medium m-0">Synthesis Agent</p>
                            <p class="text-text-secondary text-sm m-0">Claude Sonnet/Opus</p>
                        </div>
                    </div>
                    <p class="text-sm leading-relaxed m-0">
                        Aggregates point-level scores into a neighborhood narrative. Identifies spatial patterns, generates findings and recommendations, and opens every report with a data quality statement.
                    </p>
                </div>
            </div>

            <h4>Framework: PydanticAI</h4>
            <p>
                All three agents run on PydanticAI, which is model-agnostic — the same code works across Gemini, Claude, and OpenAI. This made it easy to swap models during development and test how each performed on the same images. Structured, type-safe outputs via Pydantic mean the frontend can render agent results without defensive parsing.
            </p>

            <div class="not-prose my-8 border border-border p-6 overflow-x-auto">
                <svg viewBox="0 0 820 310" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto" style="min-width: 600px;">
                    <!-- Street Images -->
                    <rect x="10" y="130" width="140" height="60" rx="4" fill="none" stroke="currentColor" stroke-width="1.5"/>
                    <text x="80" y="155" text-anchor="middle" font-size="12" font-weight="600" fill="currentColor">Street Images</text>
                    <text x="80" y="172" text-anchor="middle" font-size="10" fill="currentColor" opacity="0.6">4-6 per point</text>

                    <!-- Arrow 1 -->
                    <line x1="150" y1="160" x2="195" y2="160" stroke="currentColor" stroke-width="1.5"/>
                    <polygon points="195,155 205,160 195,165" fill="currentColor"/>

                    <!-- Scoring Agent -->
                    <rect x="205" y="120" width="150" height="80" rx="4" fill="none" stroke="currentColor" stroke-width="1.5"/>
                    <text x="280" y="148" text-anchor="middle" font-size="12" font-weight="600" fill="currentColor">Scoring Agent</text>
                    <text x="280" y="165" text-anchor="middle" font-size="10" fill="currentColor" opacity="0.6">Gemini 3 Flash</text>
                    <text x="280" y="182" text-anchor="middle" font-size="10" fill="currentColor" opacity="0.6">10 subscores + confidence</text>

                    <!-- Arrow 2 -->
                    <line x1="355" y1="160" x2="400" y2="160" stroke="currentColor" stroke-width="1.5"/>
                    <polygon points="400,155 410,160 400,165" fill="currentColor"/>

                    <!-- Branch up to Verification (from midpoint of arrow 2) -->
                    <line x1="377" y1="160" x2="377" y2="55" stroke="currentColor" stroke-width="1.5" stroke-dasharray="4,3"/>
                    <line x1="377" y1="55" x2="415" y2="55" stroke="currentColor" stroke-width="1.5" stroke-dasharray="4,3"/>
                    <polygon points="415,50 425,55 415,60" fill="currentColor"/>

                    <!-- Verification Agent -->
                    <rect x="425" y="20" width="130" height="70" rx="4" fill="none" stroke="currentColor" stroke-width="1.5" stroke-dasharray="4,3"/>
                    <text x="490" y="48" text-anchor="middle" font-size="12" font-weight="600" fill="currentColor">Verification</text>
                    <text x="490" y="65" text-anchor="middle" font-size="10" fill="currentColor" opacity="0.6">Claude Sonnet</text>
                    <text x="490" y="80" text-anchor="middle" font-size="10" fill="currentColor" opacity="0.6">~20% of points</text>

                    <!-- Arrow from verification back down into Finalized Scores -->
                    <line x1="490" y1="90" x2="490" y2="120" stroke="currentColor" stroke-width="1.5" stroke-dasharray="4,3"/>
                    <polygon points="485,118 490,128 495,118" fill="currentColor"/>

                    <!-- Finalized Scores -->
                    <rect x="410" y="130" width="160" height="60" rx="4" fill="none" stroke="currentColor" stroke-width="1.5"/>
                    <text x="490" y="155" text-anchor="middle" font-size="12" font-weight="600" fill="currentColor">Finalized Scores</text>
                    <text x="490" y="172" text-anchor="middle" font-size="10" fill="currentColor" opacity="0.6">All points</text>

                    <!-- Arrow 3 -->
                    <line x1="570" y1="160" x2="615" y2="160" stroke="currentColor" stroke-width="1.5"/>
                    <polygon points="615,155 625,160 615,165" fill="currentColor"/>

                    <!-- Synthesis Agent -->
                    <rect x="625" y="120" width="150" height="80" rx="4" fill="none" stroke="currentColor" stroke-width="1.5"/>
                    <text x="700" y="148" text-anchor="middle" font-size="12" font-weight="600" fill="currentColor">Synthesis Agent</text>
                    <text x="700" y="165" text-anchor="middle" font-size="10" fill="currentColor" opacity="0.6">Claude Sonnet/Opus</text>
                    <text x="700" y="182" text-anchor="middle" font-size="10" fill="currentColor" opacity="0.6">Narrative + findings</text>

                    <!-- Arrow 4 -->
                    <line x1="700" y1="200" x2="700" y2="240" stroke="currentColor" stroke-width="1.5"/>
                    <polygon points="695,240 700,250 705,240" fill="currentColor"/>

                    <!-- Report -->
                    <rect x="620" y="250" width="160" height="50" rx="4" fill="none" stroke="currentColor" stroke-width="1.5"/>
                    <text x="700" y="271" text-anchor="middle" font-size="12" font-weight="600" fill="currentColor">Neighborhood Report</text>
                    <text x="700" y="288" text-anchor="middle" font-size="10" fill="currentColor" opacity="0.6">Data quality + recommendations</text>
                </svg>
            </div>
        </section>

        <section id="interface">
            <h3>Interface</h3>
            <p>
                The core UX insight came from journey mapping the planners' existing workflow: it's zoom-based. They start at the neighborhood level ("where are the problems?") and drill into specific locations ("what's wrong here?"). I designed the interface around that pattern.
            </p>

            <h4>Home</h4>
            <p>
                A welcome screen showing recent reports with walkability and accessibility scores at a glance, quick access to start a new scan, and action items that need attention.
            </p>
            <img src={home} alt="StreetVision home screen" class="w-full border border-border" />

            <h4>Scan</h4>
            <p>
                Split-panel layout: a neighborhood selection panel on the left, a full interactive Mapbox map on the right. Select a Toronto neighborhood polygon, hit Analyze, and watch a three-step progress chain stream: mapping the street network, generating sample points, downloading imagery.
            </p>
            <img src={scan} alt="StreetVision scan view" class="w-full border border-border" />

            <h4>Reports</h4>
            <p>
                Split-panel again: a scrollable report sidebar with overall scores, data quality card, AI-generated summary, key findings, and recommendations, alongside the interactive map showing all assessed points. The data quality card surfaces points assessed vs. total, coverage gaps, and stale imagery counts.
            </p>
            <img src={report} alt="StreetVision report view" class="w-full border border-border" />
        </section>

        <section id="data-quality">
            <h3>Data Quality</h3>
            <p>
                This is where most AI-for-planning tools are designed in ways that can lead to equity and fairness concerns. Street-level imagery coverage is inconsistent, biased toward wealthier and more-trafficked areas, and variable in quality (night captures, obstructed views, seasonal differences).
            </p>
            <p>
                Every sample point shown carries metadata: coverage status (full, partial, or none), image date, image quality, and flags for things like winter imagery, construction zones, or stale data. Points with no coverage show up on the map as grey markers. The intention was to make sure that coverage gaps are visible, not invisible, although more work remains to be done to make this robust and actionable for planners.
            </p>
        </section>

        <section id="reflection">
            <h3>Reflection</h3>
            <p>
                The biggest shift in how I think about building with AI came from spending time with the planners who would actually use this. Early on I was focused on model accuracy and pipeline throughput. But conducting in-context observations of their workflow and interviewing them about how they currently assess streets (mostly scrolling through Google Street View and taking notes in a spreadsheet) changed what I prioritized. The features that mattered most to them weren't the ones I would have guessed. They cared about being able to contest a score, about understanding why the system flagged something, and about knowing where the data was thin.
            </p>
            <p>
                Building the system to be model-agnostic was a decision I'm glad I made early. PydanticAI let me swap between Gemini, Claude, and OpenAI with the same code, which meant I could test how different models behaved on the same images without rewriting the pipeline. That flexibility also made the verification agent possible in the first place, since the whole point is using a different model family to catch blind spots.
            </p>
            <p>
                Work continues on this project. I'm reading HCI research on AI-assisted decision making, particularly around calibrated trust, automation bias, and how interface design affects whether people over-rely on or under-trust model outputs. That research is shaping how I think about the next iteration of the inspect and report views, and what "appropriate trust" actually looks like when planners are using these scores to allocate real budget.
            </p>
        </section>

    </section>
</div>
