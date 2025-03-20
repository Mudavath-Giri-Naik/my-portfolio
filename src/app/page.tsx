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
    <main className="mx-auto max-w-4xl p-6 md:p-12 print:p-8 dark:bg-gray-950 bg-slate-50">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
        {/* Left Column */}
        <div className="space-y-6 md:col-span-1">
          <div className="space-y-4">
            <Avatar className="h-32 w-32 border-4 border-white shadow-lg">
              <AvatarImage alt={RESUME_DATA.name} src={RESUME_DATA.avatarUrl} />
              <AvatarFallback>{RESUME_DATA.initials}</AvatarFallback>
            </Avatar>

            <div>
              <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
                {RESUME_DATA.name}
              </h1>
              <p className="mt-1 text-lg font-medium text-gray-600 dark:text-gray-300">
                {RESUME_DATA.about}
              </p>
            </div>
          </div>

          <Section className="border-t pt-4">
            <h2 className="text-xs font-semibold uppercase tracking-wide text-gray-600 dark:text-gray-400">
              Contact
            </h2>
            <div className="mt-2 space-y-1">
              {RESUME_DATA.contact.email && (
                <a
                  href={`mailto:${RESUME_DATA.contact.email}`}
                  className="flex items-center gap-2 text-sm text-gray-700 hover:text-blue-600 dark:text-gray-300"
                >
                  <MailIcon className="h-4 w-4" />
                  {RESUME_DATA.contact.email}
                </a>
              )}
              {RESUME_DATA.contact.tel && (
                <a
                  href={`tel:${RESUME_DATA.contact.tel}`}
                  className="flex items-center gap-2 text-sm text-gray-700 hover:text-blue-600 dark:text-gray-300"
                >
                  <PhoneIcon className="h-4 w-4" />
                  {RESUME_DATA.contact.tel}
                </a>
              )}
              <a
                href={RESUME_DATA.locationLink}
                target="_blank"
                className="flex items-center gap-2 text-sm text-gray-700 hover:text-blue-600 dark:text-gray-300"
              >
                <GlobeIcon className="h-4 w-4" />
                {RESUME_DATA.location}
              </a>
              {RESUME_DATA.contact.social.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  className="flex items-center gap-2 text-sm text-gray-700 hover:text-blue-600 dark:text-gray-300"
                >
                  <social.icon className="h-4 w-4" />
                  {social.name}
                </a>
              ))}
            </div>
          </Section>

          <Section className="border-t pt-4">
            <h2 className="text-xs font-semibold uppercase tracking-wide text-gray-600 dark:text-gray-400">
              Skills
            </h2>
            <div className="mt-2 flex flex-wrap gap-2">
              {RESUME_DATA.skills.map((skill) => (
                <Badge
                  key={skill}
                  variant="secondary"
                  className="rounded-md px-3 py-1 text-sm font-medium"
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </Section>

          <Section className="border-t pt-4">
            <h2 className="text-xs font-semibold uppercase tracking-wide text-gray-600 dark:text-gray-400">
              Education
            </h2>
            {RESUME_DATA.education.map((education) => (
              <div key={education.school} className="mt-4">
                <h3 className="text-sm font-semibold text-gray-900 dark:text-gray-100">
                  {education.school}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {education.degree}
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-500">
                  {education.start} - {education.end}
                </p>
              </div>
            ))}
          </Section>
        </div>

        {/* Right Column */}
        <div className="space-y-8 md:col-span-2">
          <Section>
            <h2 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-gray-100">
              Professional Summary
            </h2>
            <p className="mt-2 text-gray-600 dark:text-gray-300">
              {RESUME_DATA.summary}
            </p>
          </Section>

          <Section>
            <h2 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-gray-100">
              Experience
            </h2>
            <div className="mt-4 space-y-6">
              {RESUME_DATA.work.map((work) => (
                <div key={work.company} className="border-l-4 border-blue-600 pl-4">
                  <div className="flex justify-between">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                        {work.company}
                      </h3>
                      <p className="text-sm font-medium text-blue-600">
                        {work.title}
                      </p>
                    </div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {work.start} - {work.end ?? 'Present'}
                    </p>
                  </div>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {work.badges.map((badge) => (
                      <Badge
                        key={badge}
                        className="rounded-md bg-blue-100 px-2 py-1 text-xs font-medium text-blue-800"
                      >
                        {badge}
                      </Badge>
                    ))}
                  </div>
                  <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
                    {work.description}
                  </p>
                </div>
              ))}
            </div>
          </Section>

          <Section>
            <h2 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-gray-100">
              Projects
            </h2>
            <div className="mt-4 grid gap-4 md:grid-cols-2">
              {RESUME_DATA.projects.map((project) => (
                <ProjectCard
                  key={project.title}
                  title={project.title}
                  description={project.description}
                  tags={project.techStack}
                  link={"link" in project ? project.link.href : undefined}
                  className="hover:border-blue-600 hover:shadow-lg transition-all"
                />
              ))}
            </div>
          </Section>
        </div>
      </div>

      <CommandMenu
        links={[
          {
            url: RESUME_DATA.personalWebsiteUrl,
            title: "Personal Website",
          },
          ...RESUME_DATA.contact.social.map((socialMediaLink) => ({
            url: socialMediaLink.url,
            title: socialMediaLink.name,
          })),
        ]}
      />
    </main>
  );
}
