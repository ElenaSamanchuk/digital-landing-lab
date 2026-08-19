import { teamMembers } from "../../content/team";
import { KickerTitle } from "../ui/KickerTitle";
import { SectionHeading } from "../ui/SectionHeading";

export function TeamSection() {
  return (
    <section id="team" className="section-shell py-14 md:py-24" aria-labelledby="team-heading">
      <SectionHeading id="team-heading" title={"Специалисты\nDigital Landing Lab"} />

      <div className="mt-8 flex gap-4 overflow-x-auto pb-2 md:mt-12 md:grid md:grid-cols-3 md:gap-5 md:overflow-visible">
        {teamMembers.map((member) => (
          <article
            key={member.name}
            className="min-w-[250px] shrink-0 rounded-card bg-surface p-4 md:min-w-0 md:p-5"
          >
            <div className="flex items-center gap-4">
              <img
                src={member.photo}
                alt={`${member.role} ${member.name}`}
                width={70}
                height={70}
                loading="lazy"
                decoding="async"
                className="size-[70px] rounded-card object-cover object-bottom"
              />
              <div>
                <p className="font-display text-base tracking-[-0.32px] text-ink">
                  {member.role}
                  <span className="block">{member.name}</span>
                </p>
                <p className="mt-3 font-body text-sm font-extralight text-muted">
                  {member.experience}
                </p>
              </div>
            </div>

            <div className="mt-6">
              <KickerTitle>Навыки</KickerTitle>
              <ul className="mt-4 space-y-1 font-body text-sm font-extralight leading-[1.25] text-ink md:text-base">
                {member.skills.map((skill) => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
            </div>

            <a
              href="#cases"
              className="mt-6 inline-block font-display text-base tracking-[-0.32px] text-muted underline"
            >
              Портфолио
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}
