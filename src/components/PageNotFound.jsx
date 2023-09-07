import React from "react";

export const PageNotFound = () => {
  return (
    <div className="flex flex-col gap-64 items-center">
      <img
        className="laptop:h-[400px]"
        src="/images/404-illustration.svg"
        alt=""
      />
      <div className="flex flex-col gap-16 text-center">
        <h1 className="text-title uppercase">under construction</h1>
        <p className="text-body text-body-text desktop:text-body-desktop">
          This section is under construction and will be back after a short while.
        </p>
      </div>
    </div>
  );
};
