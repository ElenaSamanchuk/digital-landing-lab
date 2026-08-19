import { teamMembers } from "../../content/team";
import { resolvePublicPath } from "../../qa/assets";
import { KickerTitle } from "../ui/KickerTitle";

export function TeamSection() {
  return (
    <section id="team" className="section-shell py-14 md:py-[100px]" aria-labelledby="team-heading">
      <div className="xl:grid xl:grid-cols-[440px_minmax(0,1fr)] xl:gap-5">
        <h2
          id="team-heading"
          className="section-title whitespace-pre-line xl:pt-0"
        >
          {"Специалисты\nDigital Landing Lab"}
        </h2>

        <div className="mt-8 flex gap-4 overflow-x-auto pb-2 xl:mt-0 xl:grid xl:grid-cols-3 xl:gap-5 xl:overflow-visible">
          {teamMembers.map((member) => (
            <article
              key={member.name}
              className="min-h-[492px] min-w-[250px] shrink-0 rounded-card bg-surface p-4 xl:min-h-[529px] xl:min-w-0 xl:p-5"
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
                className="mt-6 inline-block font-display text-base tracking-[-0.32px] text-muted underline xl:mt-8"
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
