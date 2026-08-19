import { contactActions } from "../../content/steps";
import { assetPath, resolvePublicPath } from "../../qa/assets";

export function ContactsSection() {
  return (
    <section id="contacts" className="section-shell py-10 md:pb-24 md:pt-12" aria-labelledby="contacts-heading">
      <div className="overflow-hidden rounded-card bg-surface px-4 py-8 md:px-10 md:py-10">
        <div className="lg:grid lg:grid-cols-[minmax(0,802px)_minmax(0,430px)] lg:gap-10">
          <h2 id="contacts-heading" className="section-title max-w-[802px]">
            Мы можем помочь вам с любым из этапов создания сайта по отдельности
          </h2>

          <div className="mt-8 space-y-10 lg:mt-0">
            {contactActions.map((action) => (
              <article key={action.cta}>
                <p className="font-body text-base leading-[1.35] tracking-[-0.32px]">
                  <span className="text-accent">/</span>
                  <span className="text-muted"> {action.label}</span>
                </p>
                <a href="#brief" className="link-pill mt-5 h-[55px]">
                  <span className="flex items-center gap-2.5">
                    <img
                      src={resolvePublicPath(action.photo)}
                      alt={action.cta}
                      width={55}
                      height={55}
                      loading="lazy"
                      decoding="async"
                      className="size-[55px] rounded-full object-cover object-top"
                    />
                    <span className="font-display text-base tracking-[-0.32px] text-ink">
                      {action.cta}
                    </span>
                  </span>
                  <span className="flex size-[35px] shrink-0 items-center justify-center rounded-full bg-accent">
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
        <p className="mt-2 font-body text-base font-extralight text-on-accent/90">
          Заполните короткий бриф — мы свяжемся с вами и предложим оптимальный тариф.
        </p>
      </div>
    </section>
  );
}
