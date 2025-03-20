import * as HeroIcons from "@heroicons/react/24/outline";

export type IconName = keyof typeof HeroIcons;

export type TSkills = {
  iconName: IconName;
  title: string;
  desc: string;
};

export interface IProject {
  title: string;
  image: string;
  description: string;
}
