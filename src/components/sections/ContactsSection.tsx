import { contactActions } from "../../content/steps";
import { assetPath, resolvePublicPath } from "../../qa/assets";
import { SectionHeading } from "../ui/SectionHeading";

export function ContactsSection() {
  return (
    <section id="contacts" className="section-shell py-14 md:pb-24 md:pt-12" aria-labelledby="contacts-heading">
      <div className="overflow-hidden rounded-card bg-surface px-4 py-8 md:px-10 md:py-10">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,420px)_minmax(0,1fr)]">
          <SectionHeading id="contacts-heading" title="Мы можем помочь вам с любым из этапов создания сайта по отдельности." />

          <div className="space-y-5">
            {contactActions.map((action) => (
              <article key={action.cta}>
                <p className="font-body text-sm font-normal leading-[1.35] text-muted md:text-base">
                  <span className="text-accent">/</span> {action.label}
                </p>
                <a
                  href="#brief"
                  className="link-pill mt-4"
                >
                  <span className="flex items-center gap-2.5">
                    <img
                      src={resolvePublicPath(action.photo)}
                      alt={action.cta}
                      width={55}
                      height={55}
                      loading="lazy"
                      decoding="async"
                      className="size-[45px] rounded-full object-cover object-top md:size-[55px]"
                    />
                    <span className="font-display text-sm tracking-[-0.32px] text-ink md:text-base">
                      {action.cta}
                    </span>
                  </span>
                  <span className="flex size-[30px] shrink-0 items-center justify-center rounded-full bg-accent md:size-[35px]">
                    <img
                      src={assetPath("icon-cursor.png")}
                      alt=""
                      width={16}
                      height={16}
                      className="size-4 rotate-[9deg]"
                    />
                  </span>
                </a>
              </article>
            ))}
          </div>
        </div>
      </div>

      <div id="brief" className="mt-10 rounded-card bg-accent px-6 py-8 text-center md:mt-12">
        <p className="font-display text-lg text-on-accent md:text-xl">
          Готовы обсудить проект?
        </p>
        <p className="mt-2 font-body text-sm font-extralight text-on-accent/90 md:text-base">
          Заполните короткий бриф — мы свяжемся с вами и предложим оптимальный тариф.
        </p>
      </div>
    </section>
  );
}
