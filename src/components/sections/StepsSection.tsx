import { workSteps } from "../../content/steps";
import { PrimaryButton } from "../ui/PrimaryButton";
import { SectionHeading } from "../ui/SectionHeading";

export function StepsSection() {
  return (
    <section id="steps" className="section-shell py-14 md:py-24" aria-labelledby="steps-heading">
      <SectionHeading id="steps-heading" align="center" title="Этапы работы" />

      <div className="mt-8 grid gap-4 md:mt-12 md:grid-cols-2">
        {workSteps.map((step) => (
          <article
            key={step.number}
            className="relative overflow-hidden rounded-card bg-surface p-5 md:p-10"
          >
            <p className="font-display text-base tracking-[-0.32px] text-ink">
              <span className="text-[10px] text-accent">{step.number} </span>
              {step.title}
            </p>
            <p className="mt-3 max-w-md font-body text-sm font-extralight leading-[1.25] text-ink md:text-base">
              {step.description}
            </p>
            <span
              aria-hidden
              className="absolute bottom-4 right-5 font-display text-[55px] leading-none tracking-[-1.1px] text-accent-soft md:bottom-6 md:right-8 md:text-[125px] md:tracking-[-2.5px]"
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
