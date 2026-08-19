import { workSteps } from "../../content/steps";
import { PrimaryButton } from "../ui/PrimaryButton";

export function StepsSection() {
  return (
    <section
      id="steps"
      className="section-shell section-inset section-deferred py-14 md:py-[100px]"
      aria-labelledby="steps-heading"
    >
      <h2 id="steps-heading" className="section-title px-2.5 text-left md:px-0 md:text-center">
        Этапы работы
      </h2>

      <div className="-mx-5 mt-8 flex gap-2.5 overflow-x-auto px-5 pb-2 [scrollbar-width:none] md:mx-0 md:mt-12 md:grid md:grid-cols-2 md:gap-5 md:overflow-visible md:px-0 [&::-webkit-scrollbar]:hidden">
        {workSteps.map((step) => (
          <article
            key={step.number}
            className="relative min-h-[160px] min-w-[270px] shrink-0 overflow-hidden rounded-card bg-surface p-[15px] md:min-h-[143px] md:min-w-0 md:p-10"
          >
            <p className="font-display text-base tracking-[-0.32px] text-ink">
              <span className="text-[10.32px] text-accent">{step.number} </span>
              {step.title}
            </p>
            <p className="mt-3 max-w-[244px] font-body text-sm font-extralight leading-[1.25] tracking-[-0.28px] text-ink md:max-w-[375px] md:text-base md:tracking-[-0.32px]">
              {step.description}
            </p>
            <span
              aria-hidden
              className="absolute bottom-0 right-4 font-display text-[55px] leading-[1.35] tracking-[-1.1px] text-accent-soft md:right-10 md:top-6 md:text-[125px] md:tracking-[-2.5px]"
            >
              {step.number}
            </span>
          </article>
        ))}
      </div>

      <PrimaryButton fullWidth className="mx-auto mt-6 h-[45px] max-w-[300px] text-sm md:mt-8 md:h-[55px] md:max-w-none md:text-base">
        Перейти к брифу
      </PrimaryButton>
    </section>
  );
}
