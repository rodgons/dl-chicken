import Image from "next/image";
import { SiteHeader } from "./components/site-header";

const tickerItems = [
  { id: "hot-chicken-1", label: "Nashville hot chicken" },
  { id: "stay-spicy-1", label: "Stay spicy" },
  { id: "student-deals-1", label: "Student deals daily" },
  { id: "late-night-1", label: "Open until 2AM" },
  { id: "hot-chicken-2", label: "Nashville hot chicken" },
  { id: "stay-spicy-2", label: "Stay spicy" },
  { id: "student-deals-2", label: "Student deals daily" },
  { id: "late-night-2", label: "Open until 2AM" },
];

const studentPerks = [
  "Crispy chicken sando + fries + drink",
  "Affordable student price",
  "Perfect for lunch breaks or study nights",
];

const galleryItems = [
  {
    title: "The O.G. Sando",
    src: "/images/nashville-chicken-sandwich.png",
    className: "md:col-span-2 md:row-span-2",
  },
  {
    title: "Late Night Vibes",
    src: "/images/students-sharing-meal.png",
    className: "md:col-span-2",
  },
  {
    title: "Crispy Baskets",
    src: "/images/fried-chicken-fries.png",
    className: "md:col-span-2",
  },
];

const valueCards = [
  {
    icon: "🔥",
    title: "Big Flavour",
    body: "We don't do bland. Our spice levels range from Mild to Insane, built for anyone chasing a punch in every bite.",
    border: "border-primary-container",
    iconBg: "bg-primary-container/10",
  },
  {
    icon: "⏱",
    title: "Convenient Choice",
    body: "Located right off campus with fast service. Order on your phone and keep moving between lectures, labs, and late study sessions.",
    border: "border-secondary-container",
    iconBg: "bg-secondary-container/10",
  },
  {
    icon: "$",
    title: "Good Value",
    body: "Large portions that won't drain your bank account. Get high-quality ingredients and full bellies for student prices.",
    border: "border-primary-fixed-dim",
    iconBg: "bg-primary-fixed-dim/10",
  },
];

export default function Home() {
  return (
    <>
      <div className="grainy-overlay fixed inset-0 z-[60]" aria-hidden="true" />
      <SiteHeader active="home" orderHref="#order" />

      <main id="top" className="pt-20">
        <section className="relative flex min-h-[85vh] items-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/nashville-chicken-sandwich.png"
              alt="Nashville hot chicken sandwich with pickles on a toasted bun."
              fill
              priority
              sizes="100vw"
              className="scale-105 object-cover opacity-60"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/10" />
          </div>

          <div className="relative z-10 mx-auto grid w-full max-w-7xl grid-cols-1 gap-4 px-6 lg:grid-cols-12">
            <div className="flex flex-col justify-center lg:col-span-7">
              <p className="mb-4 font-bold font-mono text-primary-container text-xs uppercase leading-none tracking-normal">
                Now open late
              </p>
              <h1 className="mb-6 font-black font-display text-[clamp(2.5rem,8vw,4.5rem)] text-on-background uppercase leading-none tracking-normal">
                DownLow <br />
                <span className="text-glow-primary text-primary-container">
                  Chicken Shack
                </span>
              </h1>
              <p className="mb-10 max-w-xl text-lg text-on-surface-variant leading-[1.6]">
                Crispy Nashville-style chicken made for busy students, quick
                cravings, and big flavour. Experience the heat that's taking
                over campus.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="#order"
                  className="flex min-h-14 items-center gap-2 rounded-lg bg-primary-container px-8 py-4 font-bold font-display text-on-primary-container text-xl transition-all hover:bg-primary active:scale-95 sm:px-10"
                >
                  Order Now
                  <span aria-hidden="true">⚡</span>
                </a>
                <a
                  href="#student-promo"
                  className="flex min-h-14 items-center rounded-lg border-2 border-on-surface px-8 py-4 font-bold font-display text-on-surface text-xl transition-all hover:bg-on-surface hover:text-background sm:px-10"
                >
                  Student Promo
                </a>
              </div>
            </div>
          </div>

          <div className="absolute bottom-0 w-full overflow-hidden border-primary-container/20 border-y bg-secondary-container py-3">
            <div className="animate-marquee flex w-max whitespace-nowrap">
              {tickerItems.map((item) => (
                <span
                  key={item.id}
                  className="px-8 font-bold font-mono text-on-secondary text-xs uppercase leading-none tracking-normal"
                >
                  {item.label}
                </span>
              ))}
            </div>
          </div>
        </section>

        <section
          id="student-promo"
          className="bg-surface-container-low px-6 py-12"
        >
          <div className="mx-auto max-w-7xl">
            <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
              <div>
                <p className="mb-4 block font-bold font-mono text-secondary text-xs uppercase leading-none tracking-normal">
                  Campus Fuel
                </p>
                <h2 className="mb-6 font-extrabold font-display text-3xl text-on-background leading-tight tracking-normal">
                  Student-Friendly Flavour Without Breaking the Bank
                </h2>
                <p className="mb-8 text-lg text-on-surface-variant leading-[1.6]">
                  DownLow Chicken Shack is a go-to choice for students like Sam
                  who want bold flavour, filling portions, and fast convenience
                  at a price that makes sense for the campus lifestyle. We get
                  that study sessions are long and meal plans are limited.
                </p>
                <ul className="mb-8 flex flex-col gap-4">
                  {studentPerks.map((perk) => (
                    <li key={perk} className="flex items-start gap-3">
                      <span
                        className="text-primary-container"
                        aria-hidden="true"
                      >
                        ✓
                      </span>
                      <span>{perk}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="#order"
                  className="inline-flex min-h-14 items-center rounded-xl bg-secondary-container px-8 py-4 font-bold font-display text-white text-xl transition-opacity hover:opacity-90"
                >
                  Claim Student Promo
                </a>
              </div>

              <div className="group relative" id="order">
                <div className="absolute -inset-4 rounded-3xl bg-primary-container/10 blur-2xl transition-all duration-500 group-hover:bg-primary-container/20" />
                <div className="relative overflow-hidden rounded-3xl border border-outline-variant bg-surface-container-high p-8 shadow-2xl">
                  <div
                    className="absolute top-0 right-0 p-6 text-6xl opacity-20"
                    aria-hidden="true"
                  >
                    🎓
                  </div>
                  <h3 className="mb-4 font-bold font-display text-2xl text-primary-container tracking-normal">
                    The Campus Combo
                  </h3>
                  <div className="mb-6 flex items-baseline gap-2">
                    <span className="font-black font-display text-4xl text-on-background">
                      $9.99
                    </span>
                    <span className="text-on-surface-variant line-through">
                      $14.99
                    </span>
                  </div>
                  <div className="mb-6 rounded-xl border border-outline-variant/30 bg-surface-container p-6">
                    <p className="text-on-surface italic">
                      "Show your student ID and enjoy a budget-friendly combo
                      made for campus life. No cap, just heat."
                    </p>
                  </div>
                  <div className="space-y-3">
                    <div className="h-2 w-full overflow-hidden rounded-full bg-surface-container">
                      <div className="h-full w-3/4 animate-pulse bg-primary-container" />
                    </div>
                    <p className="font-bold font-mono text-on-surface-variant text-xs uppercase leading-none tracking-normal">
                      Limited time campus offer - valid ID required
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="menu" className="px-6 py-12">
          <div className="mx-auto max-w-7xl">
            <div className="grid min-h-[600px] grid-cols-1 gap-4 md:grid-cols-4 md:grid-rows-2">
              {galleryItems.map((item) => (
                <article
                  key={item.title}
                  className={`${item.className} group relative min-h-72 overflow-hidden rounded-3xl border border-outline-variant`}
                >
                  <Image
                    src={item.src}
                    alt={`${item.title} at DownLow Chicken Shack.`}
                    fill
                    sizes="(min-width: 768px) 50vw, 100vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-background/80 to-transparent p-6 md:p-8">
                    <h3 className="font-bold font-display text-2xl tracking-normal">
                      {item.title}
                    </h3>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-surface-container-lowest px-6 py-12">
          <div className="mx-auto mb-16 max-w-7xl text-center">
            <p className="mb-4 block font-bold font-mono text-primary-container text-xs uppercase leading-none tracking-normal">
              Why we're the go-to
            </p>
            <h2 className="font-extrabold font-display text-3xl uppercase leading-tight tracking-normal">
              Built for the Grind
            </h2>
          </div>
          <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 md:grid-cols-3">
            {valueCards.map((card) => (
              <article
                key={card.title}
                className={`rounded-t-xl border-b-4 ${card.border} bg-surface-container-high p-8 transition-transform duration-300 hover:-translate-y-2`}
              >
                <div
                  className={`mb-6 flex h-14 w-14 items-center justify-center rounded-full ${card.iconBg} font-bold font-display text-3xl text-primary-container`}
                  aria-hidden="true"
                >
                  {card.icon}
                </div>
                <h3 className="mb-4 font-bold font-display text-2xl uppercase tracking-normal">
                  {card.title}
                </h3>
                <p className="text-on-surface-variant leading-normal">
                  {card.body}
                </p>
              </article>
            ))}
          </div>
        </section>

        <a
          href="#order"
          className="fixed right-8 bottom-8 z-[100] flex items-center gap-3 rounded-full bg-primary-container px-6 py-4 font-bold font-display text-on-primary-container text-xl shadow-2xl transition-all hover:scale-105 active:scale-95 md:hidden"
        >
          <span aria-hidden="true">🧺</span>
          Order Now
        </a>
      </main>

      <footer className="w-full border-surface-variant border-t bg-surface-container-low py-12">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-12 flex flex-col items-center justify-between gap-8 md:flex-row">
            <div className="flex flex-col items-center gap-2 md:items-start">
              <span className="font-black font-display text-2xl text-primary uppercase tracking-normal">
                DownLow
              </span>
              <p className="font-bold font-mono text-on-surface-variant text-xs uppercase leading-none tracking-normal">
                Est. 2026 - The heat is on
              </p>
            </div>
            <nav
              className="flex flex-wrap justify-center gap-8"
              aria-label="Footer navigation"
            >
              {["Menu", "Locations", "Rewards", "Contact", "Terms"].map(
                (link) => (
                  <a
                    key={link}
                    href={`#${link.toLowerCase()}`}
                    className="font-bold font-mono text-on-surface-variant text-xs uppercase leading-none tracking-normal transition-colors hover:text-on-surface"
                  >
                    {link}
                  </a>
                ),
              )}
            </nav>
            <div className="flex gap-4">
              <a
                className="flex h-10 w-10 items-center justify-center rounded-full bg-surface-container-high transition-colors hover:bg-primary-container hover:text-on-primary"
                href="#contact"
                aria-label="DownLow social profile"
              >
                @
              </a>
              <a
                className="flex h-10 w-10 items-center justify-center rounded-full bg-surface-container-high transition-colors hover:bg-primary-container hover:text-on-primary"
                href="mailto:hello@example.com"
                aria-label="Email DownLow"
              >
                ✉
              </a>
            </div>
          </div>
          <div className="border-surface-variant border-t pt-8 text-center">
            <p className="text-on-surface-variant text-sm uppercase tracking-normal opacity-80">
              © 2026 DownLow Chicken Shack. Student pricing applies with valid
              ID.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
