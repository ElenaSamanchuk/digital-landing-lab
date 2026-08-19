import { workSteps } from "../../content/steps";
import { PrimaryButton } from "../ui/PrimaryButton";

export function StepsSection() {
  return (
    <section id="steps" className="section-shell py-14 md:py-[100px]" aria-labelledby="steps-heading">
      <h2 id="steps-heading" className="section-title text-center">Этапы работы</h2>

      <div className="mt-8 grid gap-5 md:mt-12 md:grid-cols-2">
        {workSteps.map((step) => (
          <article
            key={step.number}
            className="relative min-h-[143px] overflow-hidden rounded-card bg-surface p-10"
          >
            <p className="font-display text-base tracking-[-0.32px] text-ink">
              <span className="text-[10.32px] text-accent">{step.number} </span>
              {step.title}
            </p>
            <p className="mt-3 max-w-[375px] font-body text-base font-extralight leading-[1.25] tracking-[-0.32px] text-ink">
              {step.description}
            </p>
            <span
              aria-hidden
              className="absolute right-8 top-6 font-display text-[125px] leading-[1.35] tracking-[-2.5px] text-accent-soft md:right-10"
            >
              {step.number}
            </span>
          </article>
        ))}
      </div>

      <PrimaryButton fullWidth className="mt-6 md:mt-8">
        Перейти к брифу
      </PrimaryButton>
    </section>
  );
}
