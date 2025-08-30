import { useParams } from "react-router-dom";
import { CASE_STUDIES_MOCK_DATA } from "@/_mock/case-studies";
import { InnerPagesHeader } from "@/components/template/InnerPagesHeader";
import { PillsComponent } from "@/components/shared/PillsComponent";
("use client");
import { useEffect, useState } from "react";

const sections = [
  {
    id: "project-overview",
    label: "Project Overview",
    children: [
      { id: "roles", label: "My Role & Timeline" },
      { id: "tools-used", label: "Tools Used" },
    ],
  },
  {
    id: "problem",
    label: "The Problem",
    children: [
      { id: "challenge", label: "Challenge The Project Aim To Solve" },
      { id: "audience", label: "Target Audience" },
      { id: "website", label: "Existing Website" },
    ],
  },
  {
    id: "research",
    label: "Research & Insights",
    children: [
      { id: "questions", label: "Questionnaire" },
      { id: "competitor", label: "Competitor Analysis" },
      { id: "personas", label: "user personas" },
      { id: "direction", label: "Design direction" },
      { id: "navigation", label: "Site Architecture & Navigation" },
    ],
  },
  {
    id: "wireframes",
    label: "Wireframes & Initial Concepts",
    children: [
      { id: "home-wireframe", label: "Homepage Wireframe" },
      { id: "calc-wireframe", label: "Savings Calculator Wireframe" },
      { id: "other-wireframe", label: "Other Page Wireframes" },
    ],
  },
  {
    id: "designs",
    label: "Final Designs",
    children: [
      { id: "home-design", label: "Homepage Design" },
      { id: "career-design", label: "Careers Page" },
      { id: "blog-design", label: "blog page and blog posts" },
    ],
  },
  {
    id: "results",
    label: "Results",
    children: [
      { id: "improvements", label: "User Feedback & Improvements" },
      { id: "development", label: "Implementation & Development" },
      { id: "admin", label: "admin interface of the calculator" },
      { id: "launch", label: "Did the site launch?" },
      { id: "feedback", label: "Client feedbacks" },
    ],
  },
  {
    id: "learnings",
    label: "What I Learned",
    children: [
      { id: "questions", label: "challenges I overcame" },
      { id: "competitor", label: "What I'd do differently next time?" },
    ],
  },
];

export const CaseStudiesInnerPage = () => {
  const { id } = useParams();
  const caseStudies = CASE_STUDIES_MOCK_DATA.find(
    (item) => item.id === Number(id) // convert param to number
  );

  if (!caseStudies) {
    return <div>Design not found</div>;
  }

  const [activeId, setActiveId] = useState("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { threshold: 0.6 }
    );

    sections.forEach((section) => {
      const sectionEl = document.getElementById(section.id);
      if (sectionEl) observer.observe(sectionEl);

      section.children.forEach((child) => {
        const childEl = document.getElementById(child.id);
        if (childEl) observer.observe(childEl);
      });
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className={"flex flex-col gap-48 select-none bg-[#FCFCFC]"}>
      <InnerPagesHeader
        title={caseStudies.project_name}
        subtitle={caseStudies.subtitle}
        hasButton={true}
        designGallery={false}
        backgroundImage={"bg-vcg"}
        external_link={true}
        link={caseStudies.project_link}
      />

      <div className="flex gap-48 px-24 pb-48 tablet:px-48 tablet:pb-48 laptop:pb-64 laptop:pr-48 laptop:pl-[32px]">
        {/* navigation */}
        <div className="min-w-[180px] flex flex-col gap-16">
          {sections.map((section) => (
            <div key={section.id} className="flex flex-col gap-8">
              <a
                href={`#${section.id}`}
                className={`uppercase pl-8 py-[2px] border-l-[3px] text-body-text text-study-nav-heading cursor-pointer line-clamp-1
              ${
                activeId === section.id ||
                section.children.some((c) => c.id === activeId)
                  ? "text-primary-500 border-l-primary-500"
                  : "text-gray-500 border-transparent hover:border-l-primary-500 hover:text-primary-500"
              }`}
              >
                {section.label}
              </a>

              <div className="pl-[12px] flex flex-col gap-[4px]">
                {section.children.map((child) => (
                  <a
                    key={child.id}
                    href={`#${child.id}`}
                    className={`px-8 py-[4px] rounded-[6px] w-fit capitalize line-clamp-1 text-study-nav-body cursor-pointer text-clip
                  ${
                    activeId === child.id
                      ? "bg-primary-100 text-primary-500"
                      : "text-[#C1C1C3] hover:bg-primary-100 hover:text-primary-500"
                  }`}
                  >
                    {child.label}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* <div className="min-w-[230px] flex flex-col gap-16">
          <div className="flex flex-col gap-8">
            <a
              href="#project-overview"
              className="uppercase text-study-nav-heading text-body-text active:text-primary-500 pl-8 py-[2px] border-transparent active:border-l-primary-500 border-l-[3px] hover:border-l-primary-500 hover:text-primary-500 cursor-pointer"
            >
              Project Overview
            </a>

            <div className="pl-[12px] flex flex-col gap-[4px]">
              <a
                href="#my-role"
                className=" px-8 py-[4px] rounded-[6px] active:bg-primary-100 active:text-primary-500 w-fit capitalize line-clamp-1 text-study-nav-body text-[#C1C1C3]  hover:bg-primary-100  hover:text-primary-500 cursor-pointer "
              >
                My role & Timeline
              </a>
            </div>
          </div>
        </div> */}

        {/* contents */}
        <div className=" flex flex-col gap-[32px] w-full">
          <section id="project-overview" className="flex flex-col gap-[32px]">
            {/* project overview */}
            <div className="flex items-center gap-48">
              <div className="flex flex-col gap-8">
                <h3 className="text-heading-study font-extrabold text-primary-700 uppercase">
                  Project Overview
                </h3>
                <div className="flex flex-col gap-8">
                  {caseStudies.project_overview.map((value) => (
                    <p className="text-body-study text-body-text">{value}</p>
                  ))}
                </div>
              </div>
            </div>

            {/* My role */}
            <div className="flex gap-48">
              <div id="roles" className="flex flex-col gap-8 w-full">
                <h3 className="text-heading-study-sm font-extrabold text-primary-700 uppercase">
                  My role
                </h3>
                <div className="flex flex-col gap-8">
                  <p className="text-body-study text-body-text">
                    {caseStudies.my_role}
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-8 w-full">
                <h3 className="text-heading-study-sm font-extrabold text-primary-700 uppercase">
                  Timeline
                </h3>
                <div className="flex flex-col gap-8">
                  <p className="text-body-study text-body-text">
                    {caseStudies.timeline}
                  </p>
                </div>
              </div>
            </div>

            {/* tools used */}
            <div id="tools-used" className="flex flex-col gap-[12px] w-full">
              <h3 className="text-heading-study-sm font-extrabold text-primary-700 uppercase">
                Tools used
              </h3>
              <div className="flex gap-8">
                {caseStudies.tools.map((value) => (
                  <PillsComponent title={value} />
                ))}
              </div>
            </div>
          </section>

          <hr className="border border-primary-100" />

          <section id="problem" className="flex flex-col gap-24">
            <h3 className="text-tools-card text-[26px] font-extrabold text-primary-500 uppercase">
              The Problem
            </h3>

            <div id="challenge" className="flex flex-col gap-8">
              <h3 className="text-heading-study-sm font-extrabold text-primary-700 uppercase">
                What challenge did the project aim to solve?
              </h3>
              <div className="flex flex-col gap-8">
                {caseStudies.challenges.map((value) => (
                  <p className="text-body-study text-body-text">{value}</p>
                ))}
              </div>
            </div>
            <div id="audience" className="flex flex-col gap-8">
              <h3 className="text-heading-study-sm font-extrabold text-primary-700 uppercase">
                Who was the target audience?
              </h3>
              <div className="flex flex-col gap-8">
                <p className="text-body-study text-body-text">
                  {caseStudies.target_audience}
                </p>
              </div>
            </div>
            <div id="website" className="flex flex-col gap-8">
              <h3 className="text-heading-study-sm font-extrabold text-primary-700 uppercase">
                Was there an existing website or was it built from scratch?
              </h3>
              <div className="flex flex-col gap-8">
                <p className="text-body-study text-body-text">
                  {caseStudies.existing_site}
                </p>
              </div>
            </div>
          </section>

          <hr className="border border-primary-100" />

          <section id="research" className="flex flex-col gap-[32px]">
            <h3 className="text-tools-card text-[26px] font-extrabold text-primary-500 uppercase">
              Research & Insights
            </h3>
            <div id="questions" className="flex flex-col gap-8">
              <h3 className="text-heading-study-sm font-extrabold text-primary-700 uppercase">
                Client Discovery Questionnaire
              </h3>
              <div className="flex flex-col gap-8">
                {caseStudies.discovery_questions.map((value) => (
                  <p className="text-body-study text-body-text">{value}</p>
                ))}
              </div>
            </div>

            <div id="competitor" className="flex flex-col gap-8">
              <h3 className="text-heading-study-sm font-extrabold text-primary-700 uppercase">
                competitor analysis
              </h3>
              <div className="flex flex-col gap-24">
                <p className="text-body-study text-body-text">
                  {caseStudies.competitor_analysis}
                </p>

                <img
                  src={`/images/case-studies/${caseStudies.competitor_analysis_image_1}`}
                  alt=""
                />
                <p className="text-body-study text-body-text">
                  {caseStudies.competitor_analysis_cont}
                </p>
                <img
                  src={`/images/case-studies/${caseStudies.competitor_analysis_image_2}`}
                  alt=""
                  width={"100%"}
                />
              </div>
            </div>

            <div id="personas" className="flex flex-col gap-24">
              <div className="flex flex-col gap-8">
                <h3 className="text-heading-study-sm font-extrabold text-primary-700 uppercase">
                  user personas
                </h3>
                <div className="flex flex-col gap-16">
                  <p className="text-body-study text-body-text">
                    {caseStudies.user_persona_overview}
                  </p>

                  <div className="flex flex-col gap-8">
                    <h6 className="text-body-study text-body-text font-bold">
                      {caseStudies.user_persona_1}
                    </h6>
                    <p className="text-body-study text-body-text pl-16">
                      {caseStudies.user_persona_1_desc}
                    </p>
                  </div>
                </div>
              </div>

              <img
                src={`/images/case-studies/${caseStudies.user_persona_1_img}`}
                alt=""
                width={"100%"}
              />

              <div className="lex flex-col gap-8">
                <h6 className="text-body-study text-body-text font-bold">
                  {caseStudies.user_persona_2}
                </h6>
                <p className="text-body-study text-body-text pl-16">
                  {caseStudies.user_persona_2_desc}
                </p>
              </div>
              <img
                src={`/images/case-studies/${caseStudies.user_persona_2_img}`}
                alt=""
                width={"100%"}
              />

              <p className="text-body-study text-body-text">
                {caseStudies.persona_conclusion}
              </p>
            </div>

            <div id="direction" className="flex flex-col gap-8">
              <h3 className="text-heading-study-sm font-extrabold text-primary-700 uppercase">
                Design direction
              </h3>
              <div className="flex flex-col gap-16">
                <p className="text-body-study text-body-text">
                  {caseStudies.design_direction}
                </p>
              </div>
            </div>

            <div id="navigation" className="flex flex-col gap-24">
              <div className="flex flex-col gap-8">
                <h3 className="text-heading-study-sm font-extrabold text-primary-700 uppercase">
                  Site Architecture & Navigation
                </h3>
                <div className="flex flex-col gap-16">
                  <p className="text-body-study text-body-text">
                    {caseStudies.architecture_overview}
                  </p>

                  <ul className="pl-24">
                    {caseStudies.architecture_bullets.map((value) => (
                      <li className="text-body-study text-body-text list-disc  ">
                        {value}
                      </li>
                    ))}
                  </ul>

                  <p className="text-body-study text-body-text">
                    {caseStudies.archi_conclusion}
                  </p>
                </div>
              </div>

              <img
                src={`/images/case-studies/${caseStudies.site_map}`}
                alt=""
                width={"100%"}
              />

              <img
                src={`/images/case-studies/${caseStudies.navigation_image}`}
                alt=""
                width={"100%"}
              />
            </div>
          </section>

          <hr className="border border-primary-100" />

          <section id="wireframes" className="flex flex-col gap-[32px]">
            <h3 className="text-tools-card text-[26px] font-extrabold text-primary-500 uppercase">
              Research & Insights
            </h3>

            <div id="home-wireframe" className="flex flex-col gap-24">
              <div className="flex flex-col gap-8">
                <h3 className="text-heading-study-sm font-extrabold text-primary-700 uppercase">
                  Initial Homepage Wireframe
                </h3>
                <div className="flex flex-col gap-8">
                  {caseStudies.home_wireframe_desc.map((value) => (
                    <p className="text-body-study text-body-text">{value}</p>
                  ))}
                </div>
              </div>

              <div className=" flex flex-col gap-16">
                <img
                  src={`/images/case-studies/${caseStudies.home_wireframe}`}
                  alt=""
                  width={"100%"}
                />

                <p className="text-[14px] font-normal italic text-body-text">
                  {caseStudies.home_wireframe_caption}
                </p>
              </div>
            </div>

            <div id="calc-wireframe" className="flex flex-col gap-24">
              <div className="flex flex-col gap-8">
                <h3 className="text-heading-study-sm font-extrabold text-primary-700 uppercase">
                  Initial Savings Calculator Wireframe
                </h3>
                <div className="flex flex-col gap-8">
                  {caseStudies.calc_wireframe_desc.map((value) => (
                    <p className="text-body-study text-body-text">{value}</p>
                  ))}
                </div>
              </div>

              <div className=" flex flex-col gap-16">
                <img
                  src={`/images/case-studies/${caseStudies.calc_wireframe}`}
                  alt=""
                  width={"100%"}
                />

                <p className="text-[14px] font-normal italic text-body-text">
                  {caseStudies.calc_wireframe_caption}
                </p>
              </div>
            </div>

            <div id="other-wireframe" className="flex flex-col gap-24">
              <div className="flex flex-col gap-8">
                <h3 className="text-heading-study-sm font-extrabold text-primary-700 uppercase">
                  Other Page Wireframes
                </h3>
                <div className="flex flex-col gap-8">
                  {caseStudies.other_wireframe_desc.map((value) => (
                    <p className="text-body-study text-body-text">{value}</p>
                  ))}
                </div>
              </div>

              <div className=" flex flex-col gap-24">
                {caseStudies.other_wireframe_imgs.map((value) => (
                  <img
                    src={`/images/case-studies/${value}`}
                    alt=""
                    width={"100%"}
                    className="rounded-[8px]"
                  />
                ))}
              </div>
            </div>
          </section>

          <hr className="border border-primary-100 my-16" />

          <section id="designs" className="flex flex-col gap-[32px]">
            <h3 className="text-tools-card text-[26px] font-extrabold text-primary-500 uppercase">
              Final Designs
            </h3>

            <div className="flex flex-col gap-[32px]">
              <div className="flex flex-col gap-8">
                <h3 className="text-heading-study-sm font-extrabold text-primary-700 uppercase">
                  Final Hi-Fidelity Design
                </h3>
                <div className="flex flex-col gap-8">
                  {caseStudies.final_design_desc.map((value) => (
                    <p className="text-body-study text-body-text">{value}</p>
                  ))}
                </div>
              </div>

              <div id="home-design" className=" flex flex-col gap-16">
                <div className="flex gap-16">
                  {caseStudies.home_design.map((value) => (
                    <img
                      src={`/images/case-studies/${value}`}
                      alt=""
                      width={"100%"}
                      className="rounded-[8px]"
                    />
                  ))}
                </div>
                <p className="text-[14px] font-normal italic text-body-text">
                  {caseStudies.home_design_caption}
                </p>
              </div>

              <div id="career-design" className=" flex flex-col gap-16">
                <div className="flex gap-16">
                  {caseStudies.career_design.map((value) => (
                    <img
                      src={`/images/case-studies/${value}`}
                      alt=""
                      width={"100%"}
                      className="rounded-[8px]"
                    />
                  ))}
                </div>
                <p className="text-[14px] font-normal italic text-body-text">
                  {caseStudies.career_design_caption}
                </p>
              </div>

              <div id="blog-design" className=" flex flex-col gap-16">
                <div className="flex gap-16">
                  {caseStudies.blog_design.map((value) => (
                    <img
                      src={`/images/case-studies/${value}`}
                      alt=""
                      width={"100%"}
                      className="rounded-[8px]"
                    />
                  ))}
                </div>
                <p className="text-[14px] font-normal italic text-body-text">
                  {caseStudies.blog_design_caption}
                </p>
              </div>
            </div>
          </section>

          <hr className="border border-primary-100 my-8" />

          <section id="results" className="flex flex-col gap-[32px]">
            <h3 className="text-tools-card text-[26px] font-extrabold text-primary-500 uppercase">
              Results
            </h3>

            <div id="improvements" className="flex flex-col gap-8">
              <h3 className="text-heading-study-sm font-extrabold text-primary-700 uppercase">
                User Feedback & Improvements
              </h3>
              <div className="flex flex-col gap-8">
                {caseStudies.improvements.map((value) => (
                  <p className="text-body-study text-body-text">{value}</p>
                ))}
              </div>
            </div>
            <div id="development" className="flex flex-col gap-16">
              <div className="flex flex-col gap-8">
                <h3 className="text-heading-study-sm font-extrabold text-primary-700 uppercase">
                  Implementation & Development
                </h3>
                <div className="flex flex-col gap-8">
                  {caseStudies.development_overview.map((value) => (
                    <p className="text-body-study text-body-text">{value}</p>
                  ))}
                </div>
                <ul className="pl-24">
                  {caseStudies.plugin_list.map((value) => (
                    <li className="text-body-study text-body-text list-disc  ">
                      {value}
                    </li>
                  ))}
                </ul>
                <div className="flex flex-col gap-8">
                  {caseStudies.development_cont.map((value) => (
                    <p className="text-body-study text-body-text">{value}</p>
                  ))}
                </div>
              </div>
              <div  className=" flex flex-col gap-16">
                <div className="flex flex-col gap-16">
                  {caseStudies.calc_design.map((value) => (
                    <img
                      src={`/images/case-studies/${value}`}
                      alt=""
                      width={"100%"}
                      className="rounded-[8px]"
                    />
                  ))}
                </div>
                <p className="text-[14px] font-normal italic text-body-text">
                  {caseStudies.calc_design_caption}
                </p>
              </div>
            </div>
          </section>

          <section
            id="learnings"
            className="flex flex-col gap-[32px]"
          ></section>
        </div>
      </div>
    </div>
  );
};
