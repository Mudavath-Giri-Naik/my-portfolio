import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CommandMenu } from "@/components/command-menu";
import { Metadata } from "next";
import { Section } from "@/components/ui/section";
import { GlobeIcon, MailIcon, PhoneIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { RESUME_DATA } from "@/data/resume-data";
import { ProjectCard } from "@/components/project-card";

export const metadata: Metadata = {
  title: `${RESUME_DATA.name} | ${RESUME_DATA.about}`,
  description: RESUME_DATA.summary,
};

export default function Page() {
  return (
    <main className="relative mx-auto w-full scroll-my-12 overflow-auto p-4 print:p-12 md:p-16 bg-[#000000]">
      
      <section className="mx-auto w-full max-w-2xl space-y-8 bg-white print:space-y-6 bg-[#000000] ">
        <div className="flex items-center justify-between">
          <div className="flex-1 space-y-1.5">
            <h1 className="text-4xl text-blue-600  font-bold">{RESUME_DATA.name}</h1>
            <p className="max-w-md text-pretty font-mono text-sm text-muted-foreground">
              {RESUME_DATA.about}
            </p>
            <p className="max-w-md items-center text-pretty font-mono text-xs text-muted-foreground">
              <a
                className="inline-flex gap-x-1.5 align-baseline leading-none hover:underline text-blue-400"
                href={RESUME_DATA.locationLink}
                target="_blank"
              >
                <GlobeIcon className="size-3" />
                {RESUME_DATA.location}
              </a>
            </p>
            <div className="flex gap-x-1 pt-1 font-mono text-sm text-muted-foreground print:hidden">
              {RESUME_DATA.contact.email ? (
                <Button className="size-10" variant="outline" size="icon" asChild>
                  <a href={`mailto:${RESUME_DATA.contact.email}`}>
                    <MailIcon className="size-4" />
                  </a>
                </Button>
              ) : null}
              {RESUME_DATA.contact.tel ? (
                <Button className="size-10" variant="outline" size="icon" asChild>
                  <a href={`tel:${RESUME_DATA.contact.tel}`}>
                    <PhoneIcon className="size-4" />
                  </a>
                </Button>
              ) : null}
              {RESUME_DATA.contact.social.map((social) => (
                <Button
                  key={social.name}
                  className="size-10"
                  variant="outline"
                  size="icon"
                  asChild
                >
                  <a href={social.url}>
                    <social.icon className="size-4" />
                  </a>
                </Button>
              ))}
            </div>
          </div>

          <Avatar className="w-28 h-28 sm:w-32 sm:h-32 md:w-36 md:h-36 lg:w-40 lg:h-40 xl:w-40 xl:h-40">
  <AvatarImage alt={RESUME_DATA.name} src={RESUME_DATA.avatarUrl} />
  <AvatarFallback>{RESUME_DATA.initials}</AvatarFallback>
</Avatar>

        </div>

        <Section>
          <h2 className="text-2xl md:text-3xl font-bold text-slate-800 dark:text-slate-100 mb-4 border-l-4 border-blue-600 pl-3">
            Skills
          </h2>
          <div className="flex flex-wrap gap-1">
            {RESUME_DATA.skills.map((skill) => (
              <Badge key={skill}>{skill}</Badge>
            ))}
          </div>
        </Section>

        <Section className="print-force-new-page scroll-mb-16">
  {/* Section Heading */}
  <h2 className="text-2xl md:text-3xl font-bold text-slate-800 text-yellow-50 mb-4 border-l-4 border-blue-600 pl-3">
    Projects
  </h2>

  {/* Project Cards Grid */}
  <div className="-mx-3 grid grid-cols-1 gap-3 print:grid-cols-3 print:gap-2 md:grid-cols-2 lg:grid-cols-3">
    {RESUME_DATA.projects.map((project) => (
      <div
        key={project.title}
        className="relative bg-white dark:bg-gray-900 rounded-lg shadow-md p-4 border border-gray-200 dark:border-gray-700 transition-transform hover:scale-[1.02] hover:shadow-lg"
      >
        {/* Project Title + Live Button (Fixed Position) */}
        <div className="flex justify-between items-center">
          {/* Clickable Title */}
          <a
            href={"link" in project ? project.link.href : "#"}
            target="_blank"
            rel="noopener noreferrer"
            className="text-lg font-semibold text-gray-800 dark:text-white hover:underline truncate"
          >
            {project.title}
          </a>

          {/* Live Button (Fixed) */}
          {"link" in project && project.link.href && (
            <a
              href={project.link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-red-500 text-white text-[10px] font-semibold px-2 py-0.5 rounded-full shadow-md transition-all duration-300 hover:bg-red-600 whitespace-nowrap"
            >
              Live
            </a>
          )}
        </div>

        {/* Project Description */}
        <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">{project.description}</p>

        {/* Tech Stack Tags */}
        <div className="mt-3 flex flex-wrap gap-2">
          {project.techStack.map((tag) => (
            <span key={tag} className="text-xs bg-blue-100 dark:bg-blue-800 text-blue-600 dark:text-white px-2 py-1 rounded">
              {tag}
            </span>
          ))}
        </div>
      </div>
    ))}
  </div>
</Section>





        <Section>
          <h2 className="text-2xl md:text-3xl font-bold text-slate-800 dark:text-slate-100 mb-4 border-l-4 border-blue-600 pl-3">
            Education
          </h2>
          {RESUME_DATA.education.map((education) => (
            <Card key={education.school}>
              <CardHeader>
                <div className="flex items-center justify-between gap-x-2 text-base">
                  <h3 className="font-semibold leading-none">{education.school}</h3>
                  <div className="text-sm tabular-nums text-gray-500">
                    {education.start} - {education.end}
                  </div>
                </div>
              </CardHeader>
              <CardContent className="mt-2">{education.degree}</CardContent>
            </Card>
          ))}
        </Section>

        <Section>
          <h2 className="text-2xl md:text-3xl font-bold text-slate-800 dark:text-slate-100 mb-4 border-l-4 border-blue-600 pl-3">
            Open Source Contributions
          </h2>
          {RESUME_DATA.work.map((work) => (
            <Card key={work.company}>
              <CardHeader>
                <div className="flex items-center justify-between gap-x-2 text-base">
                  <h3 className="font-semibold leading-none">
                    <a className="hover:text-blue-600 transition-colors" href={work.link}>
                      {work.company}
                    </a>
                  </h3>
                  <div className="text-sm tabular-nums text-gray-500">
                    {work.start} - {work.end ?? "Present"}
                  </div>
                </div>
              </CardHeader>
              <CardContent className="mt-2">{work.description}</CardContent>
            </Card>
          ))}
        </Section>

        <Section>
          <h2 className="text-2xl md:text-3xl font-bold text-slate-100 dark:text-slate-100 mb-4 border-l-4 border-blue-600 pl-3">
            Community Involvement and Networking
          </h2>
          <Card className="border border-slate-200 dark:border-slate-800 shadow-md rounded-lg ">
            <CardContent className=" space-y-6">
              {RESUME_DATA.COMMUNITY_DATA.map((community) => (
                <div key={community.organization} className="border-b border-slate-100 dark:border-slate-100 pb-4 last:border-b-0">
                  <h4 className="text-lg font-semibold hover:text-blue-600  dark:text-slate-100 transition-colors">
                    <a href={community.link} target="_blank" rel="noopener noreferrer">
                      {community.organization}
                    </a>
                  </h4>
                  <p className="text-slate-600 dark:text-slate-400">{community.role}</p>
                </div>
              ))}
            </CardContent>
          </Card>
        </Section>
      </section>
    </main>
  );
}
