import { useParams } from "react-router-dom";
import { CASE_STUDIES_MOCK_DATA } from "@/_mock/case-studies";
import { InnerPagesHeader } from "@/components/template/InnerPagesHeader";
import { useState } from "react";
import { useEffect } from "react";

export const CaseStudiesInnerPage = () => {
  const { id } = useParams();
  const [scrollY, setScrollY] = useState(0);

  const caseStudies = CASE_STUDIES_MOCK_DATA.find(
    (item) => item.id === Number(id) // convert param to number
  );

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!caseStudies) {
    return <div>Design not found</div>;
  }

  // normalize: 0 = top, 1 = scrolled 200px (cap at 1)
  const scrollProgress = Math.min(scrollY / 200, 1);

  console.log("scrollProgress", scrollProgress);
  return (
    <div
      className={
        "flex laptop:overflow-hidden flex-col select-none bg-[#FCFCFC]"
      }
      // className={
      //   "flex laptop:overflow-hidden laptop:h-screen flex-col select-none bg-[#FCFCFC]"
      // }
    >
      {scrollProgress ? (
        "NEW SCROLL HEADER"
      ) : (
        <InnerPagesHeader
          title={caseStudies.project_name}
          subtitle={caseStudies.subtitle}
          hasButton={true}
          designGallery={false}
          backgroundImage={caseStudies.header_bg}
          external_link={true}
          link={caseStudies.project_link}
          color_theme={caseStudies.color_theme}
          button_style={caseStudies.button_style}
        />
      )}

      {/* content */}
      <div className="overflow-auto flex flex-col w-full">
        <section id="project-overview" className="flex flex-col gap-[32px]">
          <img
            src={`/images/case-studies/${caseStudies.project_overview}`}
            alt=""
            className="object-cover"
          />
        </section>

        <section id="process" className="flex flex-col gap-24">
          <img
            src={`/images/case-studies/${caseStudies.design_process}`}
            alt=""
            className="object-cover"
          />
        </section>

        <section id="background" className="flex flex-col gap-[32px]">
          <img
            src={`/images/case-studies/${caseStudies.project_background}`}
            alt=""
            className="object-cover"
          />
        </section>

        <section id="research" className="flex flex-col gap-[32px]">
          <img
            src={`/images/case-studies/${caseStudies.research_analysis}`}
            alt=""
            className="object-cover"
          />
        </section>

        <section id="personas" className="flex flex-col gap-[32px]-">
          {caseStudies.user_persona.map((value) => (
            <img
              src={`/images/case-studies/${value}`}
              alt=""
              className="object-cover"
            />
          ))}
        </section>

        <section id="direction" className="flex flex-col gap-[32px]">
          <img
            src={`/images/case-studies/${caseStudies.design_direction}`}
            alt=""
            className="object-cover"
          />
        </section>
        <section className="flex flex-col gap-[32px] object-cover">
          <img
            src={`/images/case-studies/${caseStudies.design_mockup}`}
            alt=""
            className="object-cover"
          />
        </section>
        <section
          id="wireframes"
          className="flex flex-col gap-[32px] object-cover"
        >
          <img
            src={`/images/case-studies/${caseStudies.wireframes}`}
            alt=""
            className="object-cover"
          />
        </section>
        <section
          id="final-designs"
          className="flex flex-col gap-[32px] object-cover"
        >
          <img
            src={`/images/case-studies/${caseStudies.final_designs}`}
            alt=""
            className="object-cover"
          />
        </section>
        <section
          id="development"
          className="flex flex-col gap-[32px] object-cover"
        >
          <img
            src={`/images/case-studies/${caseStudies.development}`}
            alt=""
            className="object-cover"
          />
        </section>
        <section
          id="outcomes"
          className="flex flex-col gap-[32px] object-cover"
        >
          <img
            src={`/images/case-studies/${caseStudies.outcomes}`}
            alt=""
            className="object-cover"
          />
        </section>
      </div>
    </div>
  );
};
