"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { CommandMenu } from "@/components/command-menu";
import { Section } from "@/components/ui/section";
import { GlobeIcon, MailIcon, PhoneIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { RESUME_DATA } from "@/data/resume-data";




export default function Page() {
 
  return (
    <main className="relative mx-auto w-full scroll-my-12 overflow-auto p-4 print:p-12 md:p-16 bg-[#000000]">
          
      <section className="mx-auto w-full max-w-2xl space-y-8  print:space-y-6 bg-[#000000] ">
        <div className="flex items-center justify-between">
          <div className="flex-1 space-y-1.5">
            <h1 className="text-4xl text-blue-600  font-bold">{RESUME_DATA.name}</h1>
            <p className="max-w-md text-pretty font-mono text-sm text-muted-foreground">
              {RESUME_DATA.about}
            </p>
            <p className="max-w-md items-center text-pretty font-mono text-xs text-muted-foreground">
              <a
                className="inline-flex gap-x-1.5 align-baseline leading-none hover:underline text-blue-600"
                href={RESUME_DATA.locationLink}
                target="_blank"
              >
                <GlobeIcon className="size-3" />
                {RESUME_DATA.location}
              </a>
            </p>
            <div className="flex gap-x-1 pt-1 font-mono text-sm text-muted-foreground print:hidden ">
              {RESUME_DATA.contact.email ? (
                <Button className="size-10" variant="outline" size="icon" asChild>
                  <a href={`mailto:${RESUME_DATA.contact.email}`}>
                    <MailIcon className="size-4" />
                  </a>
                </Button>
              ) : null}
              {RESUME_DATA.contact.tel ? (
                <Button className="size-10 " variant="outline" size="icon" asChild>
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
  <h2 className="text-xl md:text-3xl font-semibold text-slate-100 mb-4 border-l-4 border-blue-500 pl-3">
    Skills
  </h2>
  <div className="bg-gray-900 p-4 rounded-lg shadow-md">
    {Object.entries(RESUME_DATA.skills[0]).map(([category, skills]) => (
      <div key={category} className="mb-4">
        <h3 className="text-lg font-semibold text-blue-400">{category}</h3>
        <div className="flex flex-wrap gap-2 mt-2">
          {Array.isArray(skills) &&
            skills.map((skill: string) => (
              <span
                key={skill}
                className="bg-blue-600 text-white text-sm px-2.5 py-1 rounded-md shadow"
              >
                {skill}
              </span>
            ))}
        </div>
      </div>
    ))}
  </div>
</Section>




<Section className="print-force-new-page scroll-mb-16">
  <h2 className="text-2xl md:text-3xl font-bold  text-slate-100 mb-4 border-l-4 border-blue-600 pl-3">
    Projects
  </h2>
  <div className="w-full max-w-6xl mx-auto grid grid-cols-1 gap-3 print:grid-cols-3 print:gap-2 md:grid-cols-2 lg:grid-cols-3 lg:gap-4 lg:w-full lg:mx-0">
    {RESUME_DATA.projects.map((project) => (
      <div
        key={project.title}
        className="relative bg-gray-900 rounded-lg shadow-md p-4 border border-gray-200 border-gray-700 w-full h-full"
      >
        <div className="flex justify-between items-center">
          <a
            href={"link" in project ? project.link.href : "#"}
            target="_blank"
            rel="noopener noreferrer"
            className="text-lg font-semibold text-gray-800 text-white hover:underline truncate"
          >
            {project.title}
          </a>
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
        <p className="text-sm text-gray-600 text-gray-300 mt-1">{project.description}</p>
        <div className="mt-3 flex flex-wrap gap-2">
          {project.techStack.map((tag) => (
            <span key={tag} className="text-xs  bg-blue-800 text-blue-600 text-white px-2 py-1 rounded">
              {tag}
            </span>
          ))}
        </div>
      </div>
    ))}
  </div>
</Section>





{/* Education Section */}
<Section>
        <h2 className="text-2xl md:text-3xl font-bold text-slate-100 text-slate-100 mb-4 border-l-4 border-blue-600 pl-3">
          Education
        </h2>
        {RESUME_DATA.education.map((education) => (
          <div key={education.school} className="bg-gray-900 text-gray-200 rounded-lg shadow-md p-4 border  border-gray-700">
            <div className="flex items-center justify-between">
              <h3 className="font-semibold">{education.school}</h3>
              <div className="text-sm tabular-nums text-gray-500">{education.start} - {education.end}</div>
            </div>
            <p className=" text-gray-300 mt-2">{education.degree}</p>
          </div>
        ))}
      </Section>
      {/* Open Source Contributions Section */}
      <Section>
        <h2 className="text-2xl md:text-3xl font-bold text-slate-100 mb-4 border-l-4 border-blue-600 pl-3">
          Open Source Contributions
        </h2>
        {RESUME_DATA.work.map((work) => (
          <div key={work.company} className="bg-gray-900 rounded-lg shadow-md p-4 border text-gray-200 border-gray-700">
            <div className="flex justify-between items-center">
              <a className="font-semibold hover:text-blue-600 transition-colors" href={work.link}>
                {work.company}
              </a>
              <div className="text-sm tabular-nums text-gray-500">{work.start} - {work.end ?? "Present"}</div>
            </div>
            <p className=" text-gray-300 mt-2">{work.description}</p>
          </div>
        ))}
      </Section>

      {/* Community Involvement Section */}
      <Section>
        <h2 className="text-2xl md:text-3xl font-bold  text-slate-100 mb-4 border-l-4 border-blue-600 pl-3">
          Community Involvement and Networking
        </h2>
        {RESUME_DATA.COMMUNITY_DATA.map((community) => (
          <div key={community.organization} className="bg-gray-900 rounded-lg shadow-md p-4 border  border-gray-700">
            <div className="flex justify-between items-center">
              <a href={community.link} target="_blank" rel="noopener noreferrer" className="font-semibold hover:text-blue-600 text-slate-100 transition-colors">
                {community.organization}
              </a>
            </div>
            <p className=" text-gray-300 mt-2">{community.role}</p>
          </div>
        ))}
      </Section>
      </section>
    </main>
  );
}