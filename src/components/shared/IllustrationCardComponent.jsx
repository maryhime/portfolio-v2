export const IllustrationCardComponent = ({ title, image, date }) => {
  return (
    <div className="px-24 pt-24 flex flex-col gap-24 select-none">
      <div class="relative inline-block group">
        <img
          className="rounded-[8px] pointer-events-none select-none "
          oncontextmenu="return false;"
          src={`/images/${image}`}
          alt=""
        />
      </div>

      <p className="text-body text-body-text uppercase ">{date}</p>
    </div>
  );
};
