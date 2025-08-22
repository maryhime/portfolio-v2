import React from "react";
import InnerPagesLayout from "../layout/InnerPagesLayout";
import { PillsComponent } from "../../components/general/PillsComponent";

const VcgCaseStudy = () => {
  return (
    <InnerPagesLayout
      title={
        <>
          Modernizing Virtual Champ’s <br /> Online Presence for Better <br />{" "}
          Client Engagement
        </>
      }
      subtitle={
        <>
          A full redesign of a Virtual Champ’s outdated website to improve user{" "}
          <br /> experience, align with brand growth, and attract global
          clients.
        </>
      }
      hasButton={true}
      backgroundImage={"bg-vcg"}
      link={"https://virtualchamps.com/"}
    >
      <div className="flex flex-col gap-[32px]">
        {/* project overview */}
        <div className="flex items-center gap-48">
          <div className="flex flex-col gap-8">
            <h3 className="text-heading-study font-extrabold text-primary-900">
              Project Overview
            </h3>
            <div className="flex flex-col gap-8">
              <p className="text-body-study text-body-text">
                This project involved a complete redesign and rebuild of Virtual
                Champ Global’s website to improve user experience, modernize the
                visual design, and better communicate the organization’s global
                mission.{" "}
              </p>
              <p className="text-body-study text-body-text">
                The goal was to create a user-friendly, responsive, and scalable
                platform that meets the needs of a diverse international
                audience.
              </p>
            </div>
          </div>
          <img
            src="/images/case-studies/thumbnails/vcg thumbnail 2.svg"
            alt=""
          />
        </div>

        {/* My role */}
        <div className="flex gap-48">
          <div className="flex flex-col gap-8 w-full">
            <h3 className="text-heading-study font-extrabold text-primary-900 capitalize">
              My role
            </h3>
            <div className="flex flex-col gap-8">
              <p className="text-body-study text-body-text">
                I was responsible for the full UX and UI design, as well as
                front-end development of the site—from initial research and
                wireframing to final build and deployment.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-8 w-full">
            <h3 className="text-heading-study font-extrabold text-primary-900 capitalize">
              Timeline
            </h3>
            <div className="flex flex-col gap-8">
              <p className="text-body-study text-body-text">
                April 2024 - July 2024
              </p>
            </div>
          </div>
        </div>

        {/* tools used */}
        <div className="flex flex-col gap-[12px] w-full">
          <h3 className="text-heading-study font-extrabold text-primary-900 capitalize">
            Tools used
          </h3>
          <div className="flex gap-8">
            <PillsComponent title={"Figjam"} />
            <PillsComponent title={"figma"} />
            <PillsComponent title={"Wordpress"} />
            <PillsComponent title={"Elementor pro"} />
            <PillsComponent title={"react js"} />
            <PillsComponent title={"tailwind"} />
            <PillsComponent title={"vite"} />
          </div>
        </div>
      </div>

      <hr />

      <div className="flex flex-col gap-24">
        <h3 className="text-tools-card font-extrabold text-primary-500 uppercase">
          The Problem
        </h3>

        <div className="flex flex-col gap-8">
          <h3 className="text-heading-study font-extrabold text-primary-900">
            What challenge did the project aim to solve?
          </h3>
          <div className="flex flex-col gap-8">
            <p className="text-body-study text-body-text">
              The primary goal of VCG’s website revamp was to transform their
              outdated online presence into a modern, high-converting platform.
            </p>
            <p className="text-body-study text-body-text">
              The existing site lacked visual appeal, clear user flows, and the
              ability to effectively engage and convert visitors. The redesign
              focused on improving usability, aligning with current design
              standards, and supporting business growth through a more strategic
              and user-centered experience.
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-8">
          <h3 className="text-heading-study font-extrabold text-primary-900">
            Who was the target audience?
          </h3>
          <div className="flex flex-col gap-8">
            <p className="text-body-study text-body-text">
              The website targets potential clients and business partners
              seeking professional BPO services. These include decision-makers
              looking for outsourcing solutions in customer support, virtual
              assistance, and back-office operations.
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-8">
          <h3 className="text-heading-study font-extrabold text-primary-900">
            Was there an existing website or was it built from scratch?
          </h3>
          <div className="flex flex-col gap-8">
            <p className="text-body-study text-body-text">
              VCG had an existing website, but due to outdated design and
              limited functionality, they chose to build a completely new site
              from scratch to better align with their brand and business goals.
            </p>
          </div>
        </div>
      </div>

      <hr />

      <div className="flex flex-col gap-24">
        <h3 className="text-tools-card font-extrabold text-primary-500 uppercase">
          Research & Insights
        </h3>
        <div className="flex flex-col gap-8">
          <h3 className="text-heading-study font-extrabold text-primary-900">
            Client Discovery Questionnaire
          </h3>
          <div className="flex flex-col gap-8">
            <p className="text-body-study text-body-text">
              To align the project with the client’s vision and business goals,
              I began by sending a structured questionnaire focused on
              understanding their challenges with the existing website and their
              expectations for the new one.
            </p>
            <p className="text-body-study text-body-text">
              The responses provided clarity on key priorities, such as design
              preferences, functionality needs, and business objectives. This
              step helped ensure that the redesign would meet client
              expectations without compromising on user experience.
            </p>
            <p className="text-body-study text-body-text">
              As part of the questionnaire, I also asked the client to share
              three inspiration websites (design pegs) that reflected their
              desired look and feel. These references were later used to guide
              both the ideation and design phases, ensuring a visual direction
              that felt aligned with the brand.
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-8">
          <h3 className="text-heading-study font-extrabold text-primary-900 capitalize">
            competitor analysis
          </h3>
          <div className="flex flex-col gap-24">
            <p className="text-body-study text-body-text">
              To understand industry trends and user expectations, I conducted a
              competitive analysis of leading BPO companies, including
              Cloudstaff, Accenture, Penbrothers, etc. I compared their website
              features, how their menu was laid out, service presentation, CTAs,
              and UX patterns in a comparison table. This analysis helped
              identify gaps and opportunities that informed the redesign
              strategy for VCG.
            </p>

            <img
              src="/images/case-studies/competitor-analysis-vcg.jpg"
              alt=""
            />
            <p className="text-body-study text-body-text">
              The table below was mainly for comparing what they show in their
              navigation menu versus the old VCG website. This helped me
              understand and get an idea on what to add or remove in the VCG’s
              main navigation menu.
            </p>
            <img
              src="/images/case-studies/competitor-analysis-2-vcg.jpg"
              alt=""
              width={"100%"}
            />
          </div>
        </div>
        <div className="flex flex-col gap-8">
          <h3 className="text-heading-study font-extrabold text-primary-900 capitalize">
            user personas
          </h3>
          <div className="flex flex-col gap-8">
            <p className="text-body-study text-body-text">
              Through the research and discovery phase, I identified{" "}
              <strong>two key user groups</strong> likely to visit and engage
              with the VCG website. Creating these personas helped uncover
              additional user scenarios and guided the overall direction of the
              site’s structure and content.
            </p>

            <div className="lex flex-col gap-8">
              <h6 className="text-body-study text-body-text">
                1. Business Decision Makers
              </h6>
              <p className="text-body-study text-body-text">
                This group includes small business owners, operations managers,
                and enterprise-level executives. They are responsible for
                choosing reliable BPO partners to outsource key business
                functions. Their main goals are to find cost-effective, scalable
                solutions that improve efficiency and streamline operations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </InnerPagesLayout>
  );
};

export default VcgCaseStudy;
