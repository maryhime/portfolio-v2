import { useParams } from "react-router-dom";
import { DESIGN_GALLERY_MOCK_DATA } from "@/_mock/design-gallery";
import { InnerPagesHeader } from "@/components/template/InnerPagesHeader";
import { NavLink } from "react-router-dom";

export const WebDesignInnerPage = () => {
  const { id } = useParams();
  const design = DESIGN_GALLERY_MOCK_DATA.find(
    (item) => item.id === Number(id) // convert param to number
  );

  if (!design) {
    return <div>Design not found</div>;
  }

  return (
    <div className={"flex flex-col gap-48 select-none bg-[#FCFCFC]"}>
      <InnerPagesHeader
        title={design.project_name}
        subtitle={design.type}
        hasButton={design.hasLink}
        designGallery={true}
        backgroundImage={"bg-[url('/images/inner-banner-gallery.jpg')]"}
        link={design.link}
        external_link={design.hasLink}
        key={design.id}
        color_theme={'#D753BD'}
      />

      <div className="px-24 pb-48 tablet:px-48 tablet:pb-48 laptop:pb-64 laptop:px-64 flex flex-col gap-[32px]">
        <div className="flex gap-48 flex-col laptop:flex-row">
          <div className="flex flex-col gap-16 w-full">
            <h3 className="text-heading-study font-extrabold text-primary-900 uppercase">
              Color Scheme
            </h3>
            <div className="flex gap-8">
              <div
                className={`p-8 border rounded-card w-[75px] h-[75px] ${design.color_scheme_1}`}
              />
              <div
                className={`p-8 border rounded-card w-[75px] h-[75px] ${design.color_scheme_2}`}
              />
              <div
                className={`p-8 border rounded-card w-[75px] h-[75px] ${design.color_scheme_3}`}
              />
              <div
                className={`p-8 border rounded-card w-[75px] h-[75px] ${design.color_scheme_4}`}
              />
            </div>
          </div>
          <div
            className={
              design.has_typography ? "flex flex-col gap-8 w-full" : "hidden"
            }
          >
            <h3 className="text-heading-study font-extrabold text-primary-900 uppercase">
              Typography
            </h3>
            <div className="flex flex-col tablet:flex-row gap-8 justify-between laptop:items-center">
              <img
                src={`/images/design-gallery/typography/${design.typography}`}
                alt=""
                className="w-[217px]"
              />
              <div className="flex gap-8">
                <div
                  className={`p-8 border rounded-card w-[75px] h-[75px] ${design.typography_color_1}`}
                />
                <div
                  className={`p-8 border rounded-card w-[75px] h-[75px] ${design.typography_color_2}`}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex gap-48">
          <div className="flex flex-col gap-16 w-full">
            <h3 className="text-heading-study font-extrabold text-primary-900 uppercase">
              Design Screens
            </h3>

            {design.has_multiple_image ? (
              <div
                className={
                  design.has_more_than_2_image
                    ? `p-16 laptop:p-24 border rounded-card w-full grid grid-cols-1 tablet:grid-cols-3 laptop:grid-cols-4 gap-24 laptop:gap-16  ${design.color_bg}`
                    : `p-16 tablet:grid-cols-3 laptop:p-24 border rounded-card w-full flex flex-col tablet:grid laptop:grid-cols-2 gap-24 laptop:gap-16  ${design.color_bg}`
                }
              >
                {design.design_image.map((value) => (
                  <div className="relative inline-block group">
                    <img
                      src={`/images/design-gallery/${value}`}
                      alt=""
                      className="w-full rounded-[8px] pointer-events-none select-none"
                      oncontextmenu="return false;"
                    />
                  </div>
                ))}
              </div>
            ) : (
              <div
                className={`p-16 laptop:p-48 border rounded-card w-full ${design.color_bg}`}
              >
                <div className="relative inline-block group">
                  <img
                    src={`/images/design-gallery/${design.design_image}`}
                    alt=""
                    className="w-full rounded-[8px] pointer-events-none select-none"
                    oncontextmenu="return false;"
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
