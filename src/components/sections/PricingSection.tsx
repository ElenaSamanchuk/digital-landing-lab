import { pricingIntro, pricingPlans } from "../../content/pricing";
import { assetPath } from "../../qa/assets";
import { KickerTitle } from "../ui/KickerTitle";
import { PrimaryButton } from "../ui/PrimaryButton";

export function PricingSection() {
  return (
    <section
      id="pricing"
      className="section-shell section-deferred py-10 md:py-16"
      aria-labelledby="pricing-heading"
    >
      <div className="mx-auto max-w-[300px] overflow-hidden rounded-card bg-surface px-[15px] py-10 md:max-w-none md:px-10 md:py-10">
        <div className="lg:grid lg:grid-cols-[minmax(0,440px)_minmax(0,1fr)] lg:items-start lg:gap-10">
          <div className="lg:pt-10">
            <h2 id="pricing-heading" className="section-title">
              Наши тарифы
            </h2>
            <p className="mt-4 max-w-md font-body text-lg leading-[1.35] tracking-[-0.36px] text-muted">
              {pricingIntro}
            </p>
          </div>

          <div className="mt-8 flex flex-col gap-5 md:mt-0 md:grid md:grid-cols-3 md:justify-items-center lg:justify-items-end">
            {pricingPlans.map((plan) => (
              <article
                key={plan.name}
                className="flex w-full flex-col rounded-card bg-page p-5 md:min-h-[683px] md:max-w-[280px]"
              >
                <div className="flex items-start justify-between">
                  <KickerTitle>{plan.name}</KickerTitle>
                  <span className="font-display text-lg tracking-[-0.36px] text-muted">//</span>
                </div>

                <ul className="mt-5 space-y-3 font-body text-sm font-extralight leading-[1.25] tracking-[-0.28px] text-ink md:space-y-3.5 md:text-base md:tracking-[-0.32px]">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex gap-2">
                      <span className="text-sm text-accent-faded">→</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                {plan.extras ? (
                  <>
                    <img
                      src={assetPath("divider.svg")}
                      alt=""
                      width={240}
                      height={1}
                      className="my-5 w-full"
                    />
                    <KickerTitle className="text-sm md:text-base">При необходимости:</KickerTitle>
                    <ul className="mt-4 space-y-3 font-body text-sm font-extralight leading-[1.25] tracking-[-0.28px] text-ink md:space-y-3.5 md:text-base md:tracking-[-0.32px]">
                      {plan.extras.map((extra) => (
                        <li key={extra} className="flex gap-2">
                          <span className="text-accent-faded">+</span>
                          <span>{extra}</span>
                        </li>
                      ))}
                    </ul>
                  </>
                ) : null}

                <PrimaryButton fullWidth className="mt-6 h-[45px] text-sm md:h-[55px] md:text-base">
                  Заполнить бриф
                </PrimaryButton>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
