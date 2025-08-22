export const IllustrationCardComponent = ({ title, image, date }) => {
  return (
    <div className="px-24 pt-24 flex flex-col gap-24">
      <img className="rounded-[8px]" src={`images/${image}`} alt="" />
      <div className="flex flex-col gap-8">
        <h4 className="text-card uppercase">{title}</h4>
        <p className="text-body text-body-text uppercase ">{date}</p>
      </div>
    </div>
  );
};
