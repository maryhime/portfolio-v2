export const MainHeaderComponent = ({ title, subtitle, style }) => {
  return (
    <div className={`flex flex-col gap-16 ${style}`}>
      <h1 className="text-heading text-title-phone tablet:text-title-tablet laptop:text-title uppercase">
        {title}
      </h1>
      <p className="text-body text-body-text desktop:text-body-desktop">
        {subtitle}
      </p>
    </div>
  );
};
