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
      <div className="overflow-hidden rounded-card bg-surface px-4 py-8 md:px-10 md:py-10">
        <div className="lg:grid lg:grid-cols-[minmax(0,440px)_minmax(0,1fr)] lg:items-start lg:gap-10">
          <div className="lg:pt-10">
            <h2 id="pricing-heading" className="section-title">Наши тарифы</h2>
            <p className="mt-4 max-w-md font-body text-lg leading-[1.35] tracking-[-0.36px] text-muted">
              {pricingIntro}
            </p>
          </div>

          <div className="mt-8 grid gap-5 md:mt-0 md:grid-cols-3 md:justify-items-center lg:justify-items-end">
            {pricingPlans.map((plan) => (
              <article
                key={plan.name}
                className="flex min-h-[683px] w-full max-w-[280px] flex-col rounded-card bg-page p-5"
              >
                <div className="flex items-start justify-between">
                  <KickerTitle>{plan.name}</KickerTitle>
                  <span className="font-display text-lg tracking-[-0.36px] text-muted">//</span>
                </div>

                <ul className="mt-5 space-y-3.5 font-body text-base font-extralight leading-[1.25] tracking-[-0.32px] text-ink">
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
                    <KickerTitle className="text-base">При необходимости:</KickerTitle>
                    <ul className="mt-4 space-y-3.5 font-body text-base font-extralight leading-[1.25] tracking-[-0.32px] text-ink">
                      {plan.extras.map((extra) => (
                        <li key={extra} className="flex gap-2">
                          <span className="text-accent-faded">+</span>
                          <span>{extra}</span>
                        </li>
                      ))}
                    </ul>
                  </>
                ) : null}

                <PrimaryButton fullWidth className="mt-6">
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
