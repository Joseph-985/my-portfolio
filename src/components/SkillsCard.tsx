import { IconName } from "../types/app";
import CustomIcon from "./CustomIcon";
import { useColors } from "../hooks/useColors";

interface IProps {
  iconName: IconName;
  title: string;
  desc: string;
}
const SkillsCard = ({ title, iconName, desc }: IProps) => {
  const { bgGradient, skillCardGradient } = useColors();
  return (
    <div
      className={`!py-6 !px-4 flex flex-col items-start justify-start gap-y-4 shadow-lg min-w-[350px] !h-full max-w-full w-full !rounded-lg ${skillCardGradient}`}
    >
      <div
        className={`w-12 h-12 px-[7.15px] pt-[5.65px] pb-[8.65px] ${bgGradient} rounded-[28px] border-8 border-[#bc7cccda] justify-center items-center inline-flex`}
      >
        <CustomIcon icon={iconName} className="!text-white dark:!text-black" />
      </div>
      <div className="text-left font-semibold text-base md:text-lg text-white dark:text-black">
        {title}
      </div>
      <div className="text-left font-noraml text-base md:text-lg text-white dark:text-black text-balance overflow-auto">
        {desc}
      </div>
    </div>
  );
};

export default SkillsCard;
