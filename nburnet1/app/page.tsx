"use client";
import { title, subtitle } from "@/components/primitives";
import Resume from "../public/resume.json";
import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/input";
import { Chip } from "@nextui-org/chip";
import { useState } from "react";
import { Image } from "@nextui-org/image";
import { Link } from "@nextui-org/link";
import LaunchIcon from "@mui/icons-material/Launch";

export default function Home() {
  const keywordTooltips: Record<string, string> = {
    "CI/CD": "Continuous Integration / Continuous Deployment",
    "DDD": "Domain-Driven Design",
    "TDD": "Test Driven Development",
    "EDA": "Event-Driven Architecture",
    "UNS": "Unified Namespace",
    "MSA": "Microservices Architecture",
  };
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isError, setIsError] = useState(false);
  const [Error, setError] = useState("");

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    const formData = new FormData(event.target as HTMLFormElement);

    fetch("/resume.json", {
      method: "POST",
      body: formData,
    })
      .then((response) => setIsSubmitted(true))
      .catch((error) => {
        setIsError(true);
        setError(error);
      });
  };

  return (
    <>
      <section className="flex flex-col h-1/4 md:h-1/3 justify-start gap-4 py-8 md:py-10">
        <p className={"text-primary-700 "}>Hi, my name is</p>
        <div className="inline-block max-w-xl">
          <h1 className={title({ class: "" })}>{Resume.basics.name}</h1>
          <br />
          <h1 className={title({ class: "text-foreground-500" })}>
            {Resume.basics.label}
          </h1>
          <h2 className={subtitle({ class: "mt-4 text-foreground-500" })}>
            {Resume.basics.summary}
          </h2>
        </div>

        <div className="flex gap-3"></div>
      </section>

      <section className="flex flex-col gap-4 pb-8">
        <h3
          className={title({ size: "sm", class: "mt-4 text-foreground-500" })}
        >
          Work Experience
        </h3>
        {Resume.work.map((work, index) => (
          <div
            key={index}
            className="flex flex-col opacity-100 gap-2 lg:opacity-60 hover:opacity-100"
          >
            <h4 className={subtitle({ class: "text-foreground" })}>
              {work.position}
            </h4>
            <p className="text-primary-700 flex md:hidden">
              {work.startDate} - {work.endDate == "" ? "Present" : work.endDate}
            </p>
            <div className="flex justify-between">
              <Link href={work.url} className="gap-2 text-primary-700">
                <p>{work.name}</p>
                <LaunchIcon fontSize="small" className="text-default-500" />
              </Link>
              <p className="text-primary-700 hidden md:flex justify-end">
                {work.startDate} -{" "}
                {work.endDate == "" ? "Present" : work.endDate}
              </p>
            </div>

            <ul className="list-disc list-inside">
              {work.highlights &&
                work.highlights.map((highlight, index) => (
                  <li key={index}>{highlight}</li>
                ))}
            </ul>
          </div>
        ))}
      </section>

      <section className="flex flex-col gap-4 pb-8">
        <h3
          className={title({ size: "sm", class: "mt-4 text-foreground-500" })}
        >
          Education
        </h3>
        {Resume.education.map((education, index) => (
          <div
            key={index}
            className="flex flex-col opacity-100 gap-2 lg:opacity-60 hover:opacity-100"
          >
            <h4 className={subtitle({ class: "text-foreground" })}>
              {education.studyType
                ? `${education.studyType} in ${education.area}`
                : education.area}
            </h4>
            <p className="text-primary-700 md:hidden flex ">
              {education.startDate} - {education.endDate}
            </p>
            <div className="flex justify-between">
              <p className="text-primary-700">{education.institution}</p>
              <p className="text-primary-700 md:flex justify-end hidden ">
                {education.startDate} - {education.endDate}
              </p>
            </div>
            <p>{education.score ? `GPA: ${education.score}` : ""}</p>
          </div>
        ))}
      </section>

      <section className="flex flex-col gap-4 pb-8">
        <h3
          className={title({ size: "sm", class: "mt-4 text-foreground-500" })}
        >
          Projects
        </h3>
        {Resume.projects.map((project, index) => (
          <div
            key={index}
            className="flex flex-col gap-2 opacity-100 lg:opacity-60 hover:opacity-100"
          >
            <Link href={project.url} className="flex ">
              <h4
                className={subtitle({
                  fullWidth: false,
                  class: "w-min text-foreground item-center",
                })}
              >
                {project.name}
              </h4>
              <LaunchIcon fontSize="small" className="text-default-500" />
            </Link>
            <p className="text-primary-700 flex md:hidden">
              {project.startDate} -{" "}
              {project.endDate == "" ? "Present" : project.endDate}
            </p>
            <div className="flex justify-between">
              <p className="text-primary-700">{project.description}</p>
              <p className="text-primary-700 justify-end hidden md:flex">
                {project.startDate} -{" "}
                {project.endDate == "" ? "Present" : project.endDate}
              </p>
            </div>

            <div>
              <ul className="list-disc list-inside">
                {project.highlights &&
                  project.highlights.map((highlight, index) => (
                    <li key={index}>{highlight}</li>
                  ))}
              </ul>
            </div>
          </div>
        ))}
      </section>

      <section className="flex flex-col gap-4 pb-8">
        <h3
          className={title({ size: "sm", class: "mt-4 text-foreground-500" })}
        >
          Skills
        </h3>
        <div className="flex flex-col md:grid md:grid-cols-2 lg:flex-row gap-4 lg:justify-evenly">
          {Resume.skills.map((skill, index) => (
            <div
              key={index}
              className="flex flex-col opacity-100 gap-2 lg:opacity-60 hover:opacity-100"
            >
              <h4 className={subtitle({ class: "text-foreground" })}>
                {skill.name}
              </h4>
              <ul className="grid grid-cols-2 gap-2 text-center">
                {skill.keywords &&
                  skill.keywords.map((keyword, index) => (
                    <Chip
                      size="lg"
                      className="bg-background-800 rounded text-sm"
                      key={index}
                    >
                      <span title={keywordTooltips[keyword] || keyword}>{keyword}</span>
                    </Chip>
                  ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="flex flex-col gap-4 pb-8">
        <h3
          id="contact"
          className={title({ size: "sm", class: "mt-4 text-foreground-500" })}
        >
          Contact
        </h3>
        <div className="container max-w-lg">
          {!isError && !isSubmitted ? (
            <form
              method="POST"
              name="contact"
              data-netlify="true"
              onSubmit={handleSubmit}
            >
              <input type="hidden" name="form-name" value="contact" />

              <Input
                className="rounded px-1"
                variant="bordered"
                isRequired
                type="text"
                name="name"
                label="Name"
                id="name"
              />
              <Input
                className="rounded px-1"
                variant="bordered"
                isRequired
                type="email"
                name="email"
                label="Email"
                id="email"
              />
              <Input
                label="Phone Number (Optional)"
                type="tel"
                name="telephone"
                id="telephone"
                className="rounded px-1"
                variant="bordered"
              />

              <Input
                className="rounded px-1"
                variant="bordered"
                isRequired
                type="textarea"
                label="Message"
                name="message"
                id="message"
              />

              <Button
                variant="shadow"
                color="primary"
                type="submit"
                name="submit"
                className="mt-4"
              >
                Send Message
              </Button>
            </form>
          ) : (
            <></>
          )}
          {isError && (
            <center>
              <p className="px-1">
                There was an error submitting your form. Please try again later.
              </p>
            </center>
          )}
          {isSubmitted && (
            <center>
              <p className="px-1">Thank you! I will get back to you soon.</p>
            </center>
          )}
        </div>
      </section>
    </>
  );
}
