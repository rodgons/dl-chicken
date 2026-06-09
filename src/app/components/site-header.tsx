type NavItem = {
  label: string;
  href: string;
  key: string;
};

const navItems: NavItem[] = [
  { label: "Home", href: "/#top", key: "home" },
  { label: "Menu", href: "/#menu", key: "menu" },
  { label: "World Cup", href: "/worldcup", key: "worldcup" },
];

type SiteHeaderProps = {
  active?: "home" | "worldcup";
  orderHref?: string;
};

export function SiteHeader({
  active = "home",
  orderHref = "#order",
}: SiteHeaderProps) {
  return (
    <header className="fixed top-0 z-50 flex h-20 w-full items-center justify-between border-surface-variant border-b bg-background/90 px-6 backdrop-blur-md">
      <a
        href="/#top"
        className="flex items-center gap-2"
        aria-label="DownLow home"
      >
        <span className="text-2xl text-primary-container" aria-hidden="true">
          🍗
        </span>
        <span className="font-black font-display text-2xl text-primary-container uppercase tracking-normal">
          DownLow
        </span>
      </a>

      <nav
        className="hidden items-center gap-6 md:flex"
        aria-label="Primary navigation"
      >
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
