import { teamMembers } from "../../content/team";
import { resolvePublicPath } from "../../qa/assets";
import { KickerTitle } from "../ui/KickerTitle";

export function TeamSection() {
  return (
    <section id="team" className="section-shell section-inset py-14 md:py-[100px]" aria-labelledby="team-heading">
      <div className="lg:grid lg:grid-cols-[440px_minmax(0,1fr)] lg:gap-5">
        <h2
          id="team-heading"
          className="section-title whitespace-pre-line lg:pt-0"
        >
          {"Специалисты\nDigital Landing Lab"}
        </h2>

        <div className="-mx-5 mt-8 flex gap-4 overflow-x-auto px-5 pb-2 [scrollbar-width:none] lg:mx-0 lg:mt-0 lg:grid lg:grid-cols-3 lg:gap-5 lg:overflow-visible lg:px-0 [&::-webkit-scrollbar]:hidden">
          {teamMembers.map((member) => (
            <article
              key={member.name}
              className="min-h-[492px] min-w-[250px] shrink-0 rounded-card bg-surface p-4 lg:min-h-[529px] lg:min-w-0 lg:p-5"
            >
              <div className="flex items-center gap-4">
                <img
                  src={resolvePublicPath(member.photo)}
                  alt={`${member.role} ${member.name}`}
                  width={70}
                  height={70}
                  loading="lazy"
                  decoding="async"
                  className="size-[70px] rounded-card object-cover object-top"
                />
                <div>
                  <p className="font-display text-base tracking-[-0.32px] text-ink">
                    {member.role}
                    <span className="block">{member.name}</span>
                  </p>
                  <p className="mt-3 font-body text-sm font-extralight tracking-[-0.28px] text-muted">
                    {member.experience}
                  </p>
                </div>
              </div>

              <div className="mt-6">
                <KickerTitle>Навыки</KickerTitle>
                <ul className="mt-5 space-y-0.5 font-body text-base font-extralight leading-[1.25] tracking-[-0.32px] text-ink">
                  {member.skills.map((skill) => (
                    <li key={skill} className="whitespace-pre-line">{skill}</li>
                  ))}
                </ul>
              </div>

              <a
                href="#cases"
                className="mt-6 inline-block font-display text-base tracking-[-0.32px] text-muted underline lg:mt-8"
              >
                Портфолио
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
