import { useParams } from "react-router-dom";
import { CASE_STUDIES_MOCK_DATA } from "@/_mock/case-studies";
import { InnerPagesHeader } from "@/components/template/InnerPagesHeader";
import { PillsComponent } from "@/components/shared/PillsComponent";

export const CaseStudiesInnerPage = () => {
  const { id } = useParams();
  const caseStudies = CASE_STUDIES_MOCK_DATA.find(
    (item) => item.id === Number(id) // convert param to number
  );

  if (!caseStudies) {
    return <div>Design not found</div>;
  }
  return (
    <div className={"flex flex-col gap-48  select-none bg-[#FCFCFC]"}>
      <InnerPagesHeader
        title={caseStudies.project_name}
        subtitle={caseStudies.subtitle}
        hasButton={true}
        designGallery={false}
        backgroundImage={"bg-vcg"}
        external_link={true}
        link={caseStudies.project_link}
      />

      <div className="px-24 pb-48 tablet:px-48 tablet:pb-48 laptop:pb-64 laptop:px-48 flex flex-col gap-[32px]">
        <div className="flex flex-col gap-[32px]">
          {/* project overview */}
          <div className="flex items-center gap-48">
            <div className="flex flex-col gap-8">
              <h3 className="text-heading-study font-extrabold text-primary-900">
                Project Overview
              </h3>
              <div className="flex flex-col gap-8">
                {caseStudies.project_overview.map((value) => (
                  <p className="text-body-study text-body-text">{value}</p>
                ))}
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
                  {caseStudies.my_role}
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-8 w-full">
              <h3 className="text-heading-study font-extrabold text-primary-900 capitalize">
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
          <div className="flex flex-col gap-[12px] w-full">
            <h3 className="text-heading-study font-extrabold text-primary-900 capitalize">
              Tools used
            </h3>
            <div className="flex gap-8">
              {caseStudies.tools.map((value) => (
                <PillsComponent title={value} />
              ))}
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
              {caseStudies.challenges.map((value) => (
                <p className="text-body-study text-body-text">{value}</p>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-8">
            <h3 className="text-heading-study font-extrabold text-primary-900">
              Who was the target audience?
            </h3>
            <div className="flex flex-col gap-8">
              <p className="text-body-study text-body-text">
                {caseStudies.target_audience}
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-8">
            <h3 className="text-heading-study font-extrabold text-primary-900">
              Was there an existing website or was it built from scratch?
            </h3>
            <div className="flex flex-col gap-8">
              <p className="text-body-study text-body-text">
                {caseStudies.existing_site}
              </p>
            </div>
          </div>
        </div>

        <hr />

        <div className="flex flex-col gap-[32px]">
          <h3 className="text-tools-card font-extrabold text-primary-500 uppercase">
            Research & Insights
          </h3>
          <div className="flex flex-col gap-8">
            <h3 className="text-heading-study font-extrabold text-primary-900">
              Client Discovery Questionnaire
            </h3>
            <div className="flex flex-col gap-8">
              {caseStudies.discovery_questions.map((value) => (
                <p className="text-body-study text-body-text">{value}</p>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-8">
            <h3 className="text-heading-study font-extrabold text-primary-900 capitalize">
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
          <div className="flex flex-col gap-24">
            <div className="flex flex-col gap-8">
              <h3 className="text-heading-study font-extrabold text-primary-900 capitalize">
                user personas
              </h3>
              <div className="flex flex-col gap-16">
                <p className="text-body-study text-body-text">
                  {caseStudies.user_persona_overview}
                </p>

                <div className="lex flex-col gap-8">
                  <h6 className="text-body-study text-body-text font-bold">
                    {caseStudies.user_persona_1}
                  </h6>
                  <p className="text-body-study text-body-text">
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
          </div>
        </div>
      </div>
    </div>
  );
};
