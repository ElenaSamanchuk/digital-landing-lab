import { teamMembers } from "../../content/team";
import { getImageCrop } from "../../content/imageCrops";
import { CroppedImage } from "../ui/CroppedImage";
import { KickerTitle } from "../ui/KickerTitle";

export function TeamSection() {
  return (
    <section
      id="team"
      className="section-shell section-inset section-deferred py-[60px] md:py-[100px]"
      aria-labelledby="team-heading"
    >
      <div className="lg:grid lg:grid-cols-[440px_minmax(0,1fr)] lg:gap-5">
        <h2
          id="team-heading"
          className="section-title whitespace-pre-line px-2.5 lg:px-0 lg:pt-0"
        >
          {"Специалисты\nDigital Landing Lab"}
        </h2>

        <div className="-mx-5 mt-9 flex gap-2.5 overflow-x-auto px-5 pb-2 [scrollbar-width:none] lg:mx-0 lg:mt-0 lg:grid lg:grid-cols-3 lg:gap-5 lg:overflow-visible lg:px-0 [&::-webkit-scrollbar]:hidden">
          {teamMembers.map((member) => (
            <article
              key={member.name}
              className="min-h-[492px] min-w-[250px] shrink-0 rounded-card bg-surface p-[15px] lg:min-h-[529px] lg:min-w-0 lg:max-w-[280px] lg:p-5"
            >
              <div className="flex items-center gap-[15px]">
                <div className="relative size-[70px] shrink-0 overflow-hidden rounded-card">
                  <CroppedImage
                    src={member.photo}
                    alt={`${member.role} ${member.name}`}
                    width={70}
                    height={70}
                    loading="lazy"
                    crop={getImageCrop(member.photo)}
                  />
                </div>
                <div>
                  <p className="font-display text-base tracking-[-0.32px] text-ink">
                    {member.role}
                    <span className="block">{member.name}</span>
                  </p>
                  <p className="mt-[15px] font-body text-sm font-extralight tracking-[-0.28px] text-muted">
                    {member.experience}
                  </p>
                </div>
              </div>

              <div className="mt-[15px] lg:mt-6">
                <KickerTitle>Навыки</KickerTitle>
                <ul className="mt-[15px] space-y-[3px] font-body text-sm font-extralight leading-[1.25] tracking-[-0.28px] text-ink lg:mt-5 lg:text-base lg:tracking-[-0.32px]">
                  {member.skills.map((skill) => (
                    <li key={skill} className="whitespace-pre-line">
                      {skill}
                    </li>
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
