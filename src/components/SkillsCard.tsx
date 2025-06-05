import { IconName } from "../types/app";
import CustomIcon from "./CustomIcon";
import { useColors } from "../hooks/useColors";
import { useMobileView } from "../hooks/useMobileView";

interface IProps {
  iconName: IconName;
  title: string;
  desc: string;
}
const SkillsCard = ({ title, iconName, desc }: IProps) => {
  const { bgGradient, skillCardGradient } = useColors();
  const { isMediumLaptop } = useMobileView();
  const isMedium = !isMediumLaptop ? "text-base" : "text-lg";
  return (
    <div
      className={`!py-6 !px-4 flex flex-col items-start justify-start gap-y-4 shadow-lg min-w-[350px] !h-[400px] w-full !rounded-lg ${skillCardGradient}`}
    >
      <div
        className={`w-12 h-12 px-[7.15px] pt-[5.65px] pb-[8.65px] ${bgGradient} rounded-[28px] border-8 border-[#bc7cccda] justify-center items-center inline-flex`}
      >
        <CustomIcon icon={iconName} className="!text-white dark:!text-black" />
      </div>
      <div className="text-left font-semibold text-base md:!text-lg lg:!text-lg text-white dark:text-black">
        {title}
      </div>
      <div
        className={`text-left font-noraml md:!text-lg lg:!text-lg text-white dark:text-black text-balance overflow-auto ${isMedium}`}
      >
        {desc}
      </div>
    </div>
  );
};

export default SkillsCard;
