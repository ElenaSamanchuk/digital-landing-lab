import { pricingIntro, pricingPlans } from "../../content/pricing";
import { assetPath } from "../../qa/assets";
import { KickerTitle } from "../ui/KickerTitle";
import { PrimaryButton } from "../ui/PrimaryButton";
import { SectionHeading } from "../ui/SectionHeading";

export function PricingSection() {
  return (
    <section id="pricing" className="section-shell py-14 md:py-24" aria-labelledby="pricing-heading">
      <div className="overflow-hidden rounded-card bg-surface px-4 py-8 md:px-10 md:py-10">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,420px)_minmax(0,1fr)] lg:items-start">
          <div>
            <SectionHeading id="pricing-heading" title="Наши тарифы" />
            <p className="mt-4 max-w-md font-body text-sm font-extralight leading-[1.35] text-ink md:text-base">
              {pricingIntro}
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {pricingPlans.map((plan) => (
              <article
                key={plan.name}
                className={`flex flex-col rounded-card bg-page p-5 ${
                  plan.highlighted ? "ring-2 ring-accent" : ""
                }`}
              >
                <div className="flex items-start justify-between">
                  <KickerTitle>{plan.name}</KickerTitle>
                  <span className="font-display text-lg text-muted">//</span>
                </div>

                <ul className="mt-5 space-y-3.5 font-body text-sm font-extralight leading-[1.25] text-ink md:text-base">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex gap-2">
                      <span className="text-accent-faded">→</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                {plan.extras ? (
                  <>
                    <img src={assetPath("divider.svg")} alt="" className="my-5 w-full" />
                    <KickerTitle className="text-base">При необходимости:</KickerTitle>
                    <ul className="mt-4 space-y-3.5 font-body text-sm font-extralight leading-[1.25] text-ink md:text-base">
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
