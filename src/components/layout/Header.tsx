import { useState } from "react";
import { site } from "../../content/site";
import { assetPath } from "../../qa/assets";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-page/90 backdrop-blur-md supports-[backdrop-filter]:bg-page/80">
      <div className="section-shell flex items-center justify-between py-4 md:py-5">
        <a href="#top" className="font-display text-base text-accent md:text-[26px] md:tracking-[-0.52px]">
          {site.brand}
        </a>

        <nav className="hidden items-center gap-6 xl:gap-10 xl:flex" aria-label="Основная навигация">
          {site.nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="font-body text-sm font-extralight text-ink transition hover:text-accent md:text-base"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          className="flex size-10 items-center justify-center xl:hidden"
          aria-expanded={open}
          aria-label={open ? "Закрыть меню" : "Открыть меню"}
          onClick={() => setOpen((value) => !value)}
        >
          <img src={assetPath("icon-menu.svg")} alt="" width={24} height={10} className="h-2.5 w-6" />
        </button>
      </div>

      {open ? (
        <nav className="border-t border-surface px-4 py-4 xl:hidden" aria-label="Мобильная навигация">
          <ul className="flex flex-col gap-3">
            {site.nav.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="block py-1 font-body text-base font-extralight text-ink"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      ) : null}
    </header>
  );
}
