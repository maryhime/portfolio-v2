export const PageNotFound = () => {
  return (
    <div className="flex flex-col gap-64 items-center px-24 py-48 tablet:px-48 tablet:py-48 laptop:py-64 laptop:px-48 ">
      <img
        className="laptop:h-[400px]"
        src="/images/404-illustration.svg"
        alt=""
      />
      <div className="flex flex-col gap-16 text-center">
        <h1 className="text-title uppercase">Under Construction</h1>
        <p className="text-body text-body-text desktop:text-body-desktop">
          This section is under construction and will be back after a short
          while.
        </p>
      </div>
    </div>
  );
};
