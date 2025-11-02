import SkillsCard from "../components/SkillsCard";
import { skills } from "../helpers/data";
import { useMobileView } from "../hooks/useMobileView";
import { MotionUl, MotionLi } from "../components/framer-motion";

const Skills = () => {
  const { isMediumLaptop } = useMobileView();
  const isMedium = isMediumLaptop ? "lg:px-10" : "lg:px-28";

  return (
    <section className={`md:px-5 ${isMedium} px-5`}>
      <div className="text-2xl md:text-3xl lg:text-5xl !text-purple-700 dark:!text-white text-center flex items-center justify-center !mb-10 font-semibold">
        My Skills
      </div>
      <MotionUl
        className="grid grid-cols-1 justify-center md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 place-items-center gap-y-3 gap-x-3"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        {skills.map((skill, idx) => (
          <MotionLi className="aspect-square" variants={item} key={idx}>
            <SkillsCard
              title={skill.title}
              desc={skill.desc}
              iconName={skill.iconName}
            />
          </MotionLi>
        ))}
      </MotionUl>
    </section>
  );
};

export default Skills;

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};
