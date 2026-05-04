# MasteryPath — CLAUDE.md

> Living knowledge base. Update after every meaningful task. Keep under 200 lines.

## Vision
AI-driven adaptive learning platform. 4 fixed tracks → AI-generated curriculum → interactive session with streaming AI tutor + visual curriculum map.

## Stack
Next.js 15 (App Router) · TypeScript strict · Tailwind CSS v4 · Supabase Auth (`@supabase/ssr`) · Zustand (UI/session state) · TanStack Query v5 (server state) · React Hook Form + Zod v4 · SSE streaming (EventSource) · Lucide React · Sonner

## The 4 MVP Tracks (Fixed — Never Change Without Explicit Instruction)
`python` · `ai-engineering` · `forex` · `stocks`
Every Zod schema touching track selection must use exactly these 4 IDs.

---

## What's Been Built (Session 1)
Full scaffold from empty directory. All files listed below exist and type-check clean.

**Config:** `package.json`, `tsconfig.json`, `next.config.ts` (`outputFileTracingRoot` set), `postcss.config.mjs`, `.env.local` (placeholders), `.gitignore`

**Core:** `src/app/globals.css` (Tailwind v4 `@theme` tokens + landing palette) · `src/lib/utils.ts` · `src/types/learning.ts` + `api.ts` + `global.d.ts` (CSS module declaration) · `src/app/layout.tsx` (Inter + Lora fonts) · `providers.tsx` · `page.tsx` (landing page)

**Supabase:** `src/lib/supabase/client.ts` · `server.ts` · `middleware.ts` · root `middleware.ts` (protects /dashboard, /session, /new-journey)

**API client:** `src/lib/api/client.ts` — typed fetch wrapper, `getLearningPaths`, `getSession`, `generateCurriculum`, `buildChatStreamUrl`

**Stores:** `ui-store.ts` (sidebar) · `chat-store.ts` (SSE stream buffer) · `session-store.ts` (progress markers)

**Hooks:** `use-learning-paths` · `use-session` · `use-generate-curriculum` · `use-chat-stream` (EventSource, streams to chat-store)

**Auth:** `SignInForm.tsx` · `SignUpForm.tsx` · `/sign-in` · `/sign-up` pages

**Dashboard:** `(dashboard)/layout.tsx` · `dashboard/page.tsx` + `DashboardClient.tsx` · `PathCard.tsx` · `Sidebar.tsx` (collapsible)

**New Journey:** `JourneyWizard.tsx` (3-step stepper) · `TrackSelector.tsx` · `GoalForm.tsx` · `ScheduleForm.tsx` · `/new-journey/page.tsx`

**Session:** `session/[sessionId]/page.tsx` · `SessionLayout.tsx` · `CurriculumMap.tsx` · `ChatPanel.tsx` · `ChatMessage.tsx` + `StreamingMessage.tsx`

---

## Architectural Rules

**State split:** Zustand = sidebar, chat buffer, SSE stream, optimistic progress. TanStack Query = paths list, session data, mutations. Never mix.

**Supabase SSR:** Server Components → `src/lib/supabase/server.ts`. Client Components → `src/lib/supabase/client.ts`. Middleware refreshes cookie on every request.

**SSE pattern:** One EventSource per submission. Tokens → `appendStreamToken()`. On `[DONE]` or error → `finalizeStream()` → persists as ChatMessage.

**Zod v4:** Use `message:` not `required_error:` — the latter no longer exists in Zod v4.

**Tailwind v4 canonical classes:** `@theme` tokens auto-generate utilities. Always use `bg-accent`, `text-text-primary`, `border-border`, `bg-surface`, `bg-surface-raised`. Never use `bg-[var(--color-accent)]` etc. — redundant and triggers IDE warnings.

**Button + links:** `Button` has no `asChild`. For link-buttons: `className={buttonVariants({ variant, size })}` on `<Link>`.

**Routes:** `/` → landing page (public) · `/sign-in` · `/sign-up` · `/dashboard` · `/new-journey` · `/session/[id]`

**Landing page palette** (light theme — separate from app dark theme):
- BG: `#EDE8DC` · Green: `#1B3829` · Text: `#111111` · Muted: `#6B7280` · Card: `#FFFFFF` · Border: `#E2DDD4`
- Lora italic via `.lp-serif` utility class — used for decorative heading words (Zero, broken, mastery.)
- Landing uses arbitrary Tailwind values (`bg-[#EDE8DC]`) — `@theme` canonical classes are for the app dark theme only

**Landing page tracks vs MVP:** Landing page shows 6 demo tracks for marketing. The real app enforces only 4 MVP tracks (`python`, `ai-engineering`, `forex`, `stocks`).

## What's Been Built (Session 2)
Landing page (`src/components/landing/`): `Navbar.tsx` (sticky, scroll-aware, mobile menu) · `HeroSection.tsx` (badge, clamp headline, product mockup, floating cards) · `StatsBar.tsx` (dark green, 4 stats) · `ProblemSection.tsx` (6 comparison cards, MasteryPath highlighted) · `HowItWorksSection.tsx` (4 step cards) · `TracksSection.tsx` (client — filter tabs + 6 track cards) · `MemorySection.tsx` (split layout + memory card mockup) · `PricingSection.tsx` (3 tiers, dark bg, radial glow) · `CTABanner.tsx` · `Footer.tsx` (4-col, disclaimer)

---

## Design & UI Rules

**Screenshot comparison (mandatory):** When building or updating any UI component from a Figma screenshot, keep iterating and comparing until the implementation is **≥90% visually accurate** to the reference. Do not mark UI work done below this threshold.

**No creative liberty:** Follow Figma exactly. Only deviate to fix a functional UX flaw.

**Fluid design:** Use `clamp()` for all font sizes and spacing. Audit at 768px, 1024px, 1440px. Target <3px variance from Figma at each breakpoint.

**Component states:** Every interactive element must implement Hover, Active, Focus, and Loading. Use `tailwindcss-animate` for transitions.

**Session page:** AI Chat is the primary focal point. Curriculum map is secondary. On mobile, curriculum map is hidden (`hidden md:flex`) or behind a toggle.

**Overflow:** Code snippets and financial data strings (e.g. `EUR/USD 1.08432`) must not break layout — handle horizontal overflow cleanly.

---

## Pending / Deferred

| Item | Blocked by |
|---|---|
| Landing page pixel-perfect refinement pass | Needs user to view at http://localhost:3001 and compare |
| App dark theme color tokens, typography, spacing | Figma screenshots for dashboard/session pages |
| Real API URL + endpoint paths | Co-founder's API |
| SSE auth mechanism (query param vs header) | Co-founder's API spec |
| Visual curriculum map design | Figma |
| `tailwindcss-animate` transitions | Design pass |
| Fluid `clamp()` typography pass | Figma screenshots |
| Mobile curriculum map toggle | Design pass |

---

## Known Issues
- **Port 3001:** Port 3000 is occupied on this machine. Dev server auto-selects 3001.
- **Parent lockfile:** `C:\Users\pc\package-lock.json` belongs to a different project — do not delete. `outputFileTracingRoot` in `next.config.ts` suppresses the Next.js warning.
- **Manual scaffold:** `create-next-app` rejected the folder name (capital letters). Project was scaffolded by hand — intentional.
