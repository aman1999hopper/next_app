const Card = ({ title, content }) => {
  return (
    <div className="bg-[#293038] text-white w-[207px] min-w-[158px] h-[110px] p-6 rounded-[12px] flex flex-col gap-2 mt-8">
      <h2 className="font-inter font-bold text-[24px] leading-[30px] w-[159px] h-[30px]">
        {title}
      </h2>
      <p className="text-sm text-gray-300">{content}</p>
    </div>
  );
};

export default Card;
