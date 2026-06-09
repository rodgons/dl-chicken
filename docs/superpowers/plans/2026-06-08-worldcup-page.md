# World Cup Page Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a static `/worldcup` page for DownLow Chicken Shack and add a World Cup header link on both pages.

**Architecture:** Extract the existing fixed header into a shared server component that accepts the active page and order target. Reuse it on `/` and `/worldcup`, then add a dedicated static World Cup page that follows the provided special-page layout with local images and existing Tailwind tokens.

**Tech Stack:** Next.js 16 App Router, React 19 server components, Tailwind CSS v4, `next/image`, Biome.

---

## File Structure

- Create: `src/app/components/site-header.tsx`
  - Shared fixed header component with DownLow brand, desktop nav, World Cup link, and `Order Now` CTA.
- Modify: `src/app/page.tsx`
  - Import and render `SiteHeader` instead of inline header markup.
- Create: `src/app/worldcup/page.tsx`
  - Static World Cup-themed special page using the supplied layout structure and local images.
- No global CSS changes are expected.
- No backend, API routes, cart state, or client-side countdown code will be added.

## Task 1: Shared Header Component

**Files:**
- Create: `src/app/components/site-header.tsx`
- Modify: `src/app/page.tsx`

- [ ] **Step 1: Create the shared header component**

Create `src/app/components/site-header.tsx` with this content:

```tsx
type NavItem = {
  label: string;
  href: string;
  key: string;
};

const navItems: NavItem[] = [
  { label: "Home", href: "/#top", key: "home" },
  { label: "Menu", href: "/#menu", key: "menu" },
  { label: "Locations", href: "/#locations", key: "locations" },
  { label: "Rewards", href: "/#rewards", key: "rewards" },
  { label: "World Cup", href: "/worldcup", key: "worldcup" },
];

type SiteHeaderProps = {
  active?: "home" | "worldcup";
  orderHref?: string;
};

export function SiteHeader({ active = "home", orderHref = "#order" }: SiteHeaderProps) {
  return (
    <header className="fixed top-0 z-50 flex h-20 w-full items-center justify-between border-surface-variant border-b bg-background/90 px-6 backdrop-blur-md">
      <a href="/#top" className="flex items-center gap-2" aria-label="DownLow home">
        <span className="text-2xl text-primary-container" aria-hidden="true">
          🍗
        </span>
        <span className="font-black font-display text-2xl text-primary-container uppercase tracking-normal">
          DownLow
        </span>
      </a>

      <nav className="hidden items-center gap-6 md:flex" aria-label="Primary navigation">
        {navItems.map((item) => {
          const isActive = item.key === active;

          return (
            <a
              key={item.key}
              href={item.href}
              className={`font-bold font-mono text-xs uppercase leading-none transition-colors hover:text-primary ${
                isActive
                  ? "border-primary border-b-2 pb-1 text-primary"
                  : "text-on-surface-variant"
              }`}
            >
              {item.label}
            </a>
          );
        })}
      </nav>

      <a
        href={orderHref}
        className="flex h-12 items-center rounded-lg bg-primary-container px-5 font-bold font-mono text-on-primary text-xs uppercase leading-none transition-all hover:bg-primary active:scale-95 sm:px-6"
      >
        Order Now
      </a>
    </header>
  );
}
```

- [ ] **Step 2: Replace the home page inline header**

In `src/app/page.tsx`, remove this line:

```tsx
const navLinks = ["Home", "Menu", "Locations", "Rewards"];
```

Add this import after the `next/image` import:

```tsx
import { SiteHeader } from "./components/site-header";
```

Replace the entire inline `<header>...</header>` block at the start of the component with:

```tsx
<SiteHeader active="home" orderHref="#order" />
```

- [ ] **Step 3: Run lint for the header change**

Run: `pnpm lint`

Expected: PASS with Biome reporting no errors.

- [ ] **Step 4: Commit the shared header change if commits are requested**

Run only if the user has explicitly requested commits:

```bash
git add src/app/components/site-header.tsx src/app/page.tsx
git commit -m "feat: share site header"
```

Expected: Commit succeeds and includes only the shared header files.

## Task 2: World Cup Page

**Files:**
- Create: `src/app/worldcup/page.tsx`

- [ ] **Step 1: Create the World Cup route file**

Create `src/app/worldcup/page.tsx` with this content:

```tsx
import Image from "next/image";
import { SiteHeader } from "../components/site-header";

const heroChips = [
  { icon: "⚽", label: "Match-day combo", tone: "text-primary" },
  { icon: "⏱", label: "Kickoff window", tone: "text-error" },
  { icon: "🔥", label: "Limited trays", tone: "text-secondary" },
];

const buzzPosts = [
  {
    initials: "FC",
    name: "@FRIEDCLUB",
    time: "18M AGO",
    body: "Pulled up before kickoff and that match-day combo was gone by halftime. Worth it.",
    bg: "bg-primary-container",
    text: "text-on-primary-container",
  },
  {
    initials: "GK",
    name: "@GOALKICKBITES",
    time: "42M AGO",
    body: "Best watch-party fuel in the city. Crunch louder than the crowd.",
    bg: "bg-secondary",
    text: "text-on-secondary",
  },
];

export default function WorldCupPage() {
  return (
    <>
      <div className="grainy-overlay fixed inset-0 z-[60]" aria-hidden="true" />
      <SiteHeader active="worldcup" orderHref="#match-day-combo" />

      <main className="pt-20">
        <section className="relative flex min-h-[70vh] flex-col justify-end overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/match-day-combo.png"
              alt="World Cup match-day chicken combo with fries and dipping sauce."
              fill
              priority
              sizes="100vw"
              className="object-cover opacity-70"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-background/5 via-background/55 to-background" />
          </div>

          <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-12">
            <div className="mb-6 inline-block animate-pulse rounded-lg bg-secondary-container px-4 py-2 font-bold font-mono text-white text-xs uppercase leading-none tracking-normal">
              Match Week Only
            </div>
            <h1 className="mb-4 max-w-3xl font-black font-display text-[clamp(3rem,8vw,5.25rem)] text-primary-container uppercase leading-none tracking-normal drop-shadow-lg">
              World Cup <br /> Watch Party Fuel
            </h1>
            <p className="mb-8 max-w-xl text-lg text-on-surface leading-[1.6]">
              Crispy chicken, hot fries, and cold drinks built for kickoff crowds,
              penalty nerves, and every extra-time craving.
            </p>
            <div className="flex flex-wrap gap-4">
              {heroChips.map((chip) => (
                <span
                  key={chip.label}
                  className="flex items-center gap-2 rounded-full border border-outline-variant bg-surface-container-high px-4 py-2 font-bold font-mono text-on-surface-variant text-xs uppercase leading-none tracking-normal"
                >
                  <span className={chip.tone} aria-hidden="true">
                    {chip.icon}
                  </span>
                  {chip.label}
                </span>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-12" id="match-day-combo">
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-12">
            <article className="group overflow-hidden rounded-xl border border-surface-variant bg-surface-container-low lg:col-span-8">
              <div className="relative h-64 overflow-hidden md:h-96">
                <Image
                  src="/images/finals-fuel-combo.png"
                  alt="Crispy chicken sandwich, fries, and drink combo."
                  fill
                  sizes="(min-width: 1024px) 66vw, 100vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-4 right-4 rounded-xl bg-primary-container px-6 py-4 text-on-primary-container shadow-2xl">
                  <span className="block font-bold font-mono text-xs uppercase leading-none opacity-80">
                    Combo Price
                  </span>
                  <span className="font-black font-display text-4xl">$18</span>
                </div>
              </div>
              <div className="p-5">
                <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
                  <div>
                    <h2 className="mb-2 font-extrabold font-display text-3xl text-primary leading-tight tracking-normal">
                      Limited Time: The Kickoff Crunch Combo
                    </h2>
                    <p className="max-w-2xl text-on-surface-variant leading-[1.5]">
                      Get an O.G. chicken sando, crispy fries, and a drink for
                      match day. No substitutions, just loud crunch and fast fuel
                      before the whistle blows.
                    </p>
                  </div>
                  <a
                    href="#story-promo"
                    className="flex min-h-14 items-center justify-center gap-2 whitespace-nowrap rounded-lg bg-primary-container px-10 py-5 font-bold font-display text-on-primary-container text-2xl transition-all hover:bg-primary active:scale-95"
                  >
                    Get the Deal
                    <span aria-hidden="true">→</span>
                  </a>
                </div>
              </div>
            </article>

            <div className="grid gap-4 lg:col-span-4 lg:grid-rows-2">
              <article className="flex flex-col justify-center rounded-xl border border-surface-variant bg-surface-container-high p-5 text-center">
                <span className="mb-4 text-5xl text-secondary" aria-hidden="true">
                  ⚡
                </span>
                <h3 className="mb-2 font-bold font-display text-2xl text-on-surface tracking-normal">
                  High Heat, High Stakes
                </h3>
                <p className="text-on-surface-variant">
                  We prep match-day trays before kickoff. When they sell out,
                  they stay sold out until the next fixture.
                </p>
              </article>

              <article className="relative flex flex-col justify-between overflow-hidden rounded-xl bg-primary-container p-5 text-on-primary-container">
                <span className="absolute -right-4 -bottom-4 text-9xl opacity-10" aria-hidden="true">
                  ⏱
                </span>
                <div>
                  <span className="mb-2 block font-bold font-mono text-xs uppercase leading-none opacity-70 tracking-normal">
                    Timer Running
                  </span>
                  <h3 className="font-black font-display text-4xl leading-tight tracking-normal">
                    Offer Ends After Final Whistle
                  </h3>
                </div>
                <div className="mt-4 flex gap-2 font-bold font-mono text-lg uppercase leading-none tracking-normal">
                  <div className="rounded bg-on-primary-container/10 px-3 py-2">90M</div>
                  <div className="rounded bg-on-primary-container/10 px-3 py-2">+5</div>
                  <div className="rounded bg-on-primary-container/10 px-3 py-2">VAR</div>
                </div>
              </article>
            </div>
          </div>
        </section>

        <section className="bg-surface-container-lowest py-12" id="story-promo">
          <div className="mx-auto max-w-7xl px-6">
            <div className="flex flex-col items-center gap-12 lg:flex-row">
              <div className="relative aspect-[9/16] w-full max-w-[360px] shrink-0 overflow-hidden rounded-2xl border-4 border-surface-variant bg-black shadow-2xl">
                <Image
                  src="/images/nashville-chicken-sandwich.png"
                  alt="Crispy chicken sandwich used in a social story promotion."
                  fill
                  sizes="360px"
                  className="object-cover opacity-80"
                />
                <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black via-black/20 to-transparent p-6">
                  <div className="mb-4 rounded-xl bg-primary-container p-4 text-on-primary-container">
                    <p className="font-black font-display text-xl uppercase leading-tight tracking-normal">
                      Crunch. Chant. Repeat.
                    </p>
                    <p className="mt-2 leading-[1.5]">
                      Match week only: Sando + fries + drink for $18. Order
                      before kickoff.
                    </p>
                  </div>
                  <a
                    href="#match-day-combo"
                    className="flex w-full items-center justify-center gap-2 rounded-full bg-white py-4 font-black font-display text-black"
                  >
                    Order Now
                    <span aria-hidden="true">🛍</span>
                  </a>
                </div>
                <div className="absolute top-4 left-0 flex w-full gap-1 px-4">
                  <div className="h-1 flex-1 overflow-hidden rounded-full bg-white/40">
                    <div className="h-full w-full bg-white" />
                  </div>
                  <div className="h-1 flex-1 overflow-hidden rounded-full bg-white/40">
                    <div className="h-full w-2/3 bg-white" />
                  </div>
                  <div className="h-1 flex-1 rounded-full bg-white/40" />
                </div>
              </div>

              <div className="flex-1 text-center lg:text-left">
                <span className="mb-4 block font-bold font-mono text-secondary text-xs uppercase leading-none tracking-normal">
                  Watch Party Buzz
                </span>
                <h2 className="mb-6 font-black font-display text-[clamp(2.75rem,7vw,4rem)] text-on-surface uppercase leading-none tracking-normal">
                  The Crowd Is Hungry
                </h2>
                <div className="mb-10 space-y-6">
                  {buzzPosts.map((post) => (
                    <article
                      key={post.name}
                      className="flex items-start gap-4 rounded-lg bg-surface-container p-4 text-left"
                    >
                      <div
                        className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full font-bold ${post.bg} ${post.text}`}
                      >
                        {post.initials}
                      </div>
                      <div>
                        <p className="text-on-surface leading-[1.5]">"{post.body}"</p>
                        <span className="font-bold font-mono text-on-surface-variant text-xs uppercase leading-none tracking-normal">
                          {post.name} • {post.time}
                        </span>
                      </div>
                    </article>
                  ))}
                </div>
                <a
                  href="/#top"
                  className="inline-flex min-h-14 items-center rounded-full border border-surface-variant bg-outline-variant px-8 py-4 font-bold font-mono text-on-surface text-xs uppercase leading-none transition-all hover:bg-surface-variant"
                >
                  Back to DownLow Home
                </a>
              </div>
            </div>
          </div>
        </section>

        <a
          href="#match-day-combo"
          className="fixed bottom-8 left-1/2 z-[100] flex -translate-x-1/2 items-center gap-3 rounded-full bg-primary-container px-6 py-4 font-black font-display text-lg text-on-primary-container shadow-2xl transition-transform active:scale-95 md:right-8 md:left-auto md:translate-x-0"
        >
          <span aria-hidden="true">🧺</span>
          Match Cart (0)
        </a>
      </main>

      <footer className="w-full border-surface-variant border-t bg-surface-container-low py-12">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 px-6 md:flex-row">
          <div className="text-center md:text-left">
            <span className="mb-2 block font-black font-display text-2xl text-primary uppercase tracking-normal">
              DownLow
            </span>
            <p className="max-w-md text-on-surface-variant leading-[1.5]">
              © 2024 DownLow Chicken Shack. World Cup promotion is a static demo.
              Match outcomes not guaranteed, but crunch is.
            </p>
          </div>
          <nav className="flex flex-wrap justify-center gap-6" aria-label="Footer navigation">
            {["Menu", "Locations", "Rewards", "Contact", "Terms"].map((link) => (
              <a
                key={link}
                href={`/#${link.toLowerCase()}`}
                className="text-on-surface-variant transition-colors hover:text-on-surface"
              >
                {link}
              </a>
            ))}
          </nav>
        </div>
      </footer>
    </>
  );
}
```

- [ ] **Step 2: Run lint for the new route**

Run: `pnpm lint`

Expected: PASS with Biome reporting no errors. If Biome reports formatting differences, run `pnpm format`, then run `pnpm lint` again.

- [ ] **Step 3: Commit the World Cup route if commits are requested**

Run only if the user has explicitly requested commits:

```bash
git add src/app/worldcup/page.tsx
git commit -m "feat: add world cup page"
```

Expected: Commit succeeds and includes only `src/app/worldcup/page.tsx`.

## Task 3: Static Build Verification

**Files:**
- Verify: `src/app/page.tsx`
- Verify: `src/app/worldcup/page.tsx`
- Verify: `src/app/components/site-header.tsx`

- [ ] **Step 1: Run production build**

Run: `pnpm build`

Expected: PASS. The output should include successful compilation and route generation for `/` and `/worldcup`.

- [ ] **Step 2: Check working tree for intended files**

Run: `git status --short`

Expected: Changed files should be limited to:

```text
 M src/app/page.tsx
?? src/app/components/site-header.tsx
?? src/app/worldcup/page.tsx
?? docs/superpowers/specs/2026-06-08-worldcup-page-design.md
?? docs/superpowers/plans/2026-06-08-worldcup-page.md
```

Additional `.superpowers/brainstorm/...` files may exist from the visual companion and should not be committed unless the user requests preserving brainstorming artifacts.

- [ ] **Step 3: Final commit if commits are requested and previous tasks were not committed**

Run only if the user has explicitly requested commits and the task commits were skipped:

```bash
git add src/app/components/site-header.tsx src/app/page.tsx src/app/worldcup/page.tsx docs/superpowers/specs/2026-06-08-worldcup-page-design.md docs/superpowers/plans/2026-06-08-worldcup-page.md
git commit -m "feat: add world cup special page"
```

Expected: Commit succeeds and excludes `.superpowers/brainstorm` files.

## Self-Review

- Spec coverage: Task 1 adds the shared header and World Cup link on the existing page. Task 2 creates the `/worldcup` static page with hero, bento combo card, urgency cards, social story, footer, and floating action pill. Task 3 verifies lint/build and intended files.
- Placeholder scan: No implementation placeholders remain. The route code, component code, commands, and expected outcomes are explicit.
- Type consistency: `SiteHeader` accepts `active?: "home" | "worldcup"` and both pages use only those values. `orderHref` is a string anchor passed by each page.
