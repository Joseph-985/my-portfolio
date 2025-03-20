import SkillsCard from "../components/SkillsCard";
import { skills } from "../helpers/data";

const Skills = () => {
  return (
    <section className="px-28 md:px-0 lg:px-28">
      <div className="text-2xl md:text-3xl lg:text-5xl text-slate-200 dark:!text-purple-600 text-center flex items-center justify-center !mb-10 font-semibold">
        My Skills
      </div>
      <div className="grid grid-cols-1 justify-center md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 place-items-center gap-y-3 gap-x-3">
        {skills.map((skill, idx) => (
          <div className="aspect-square">
            <SkillsCard
              key={idx}
              title={skill.title}
              desc={skill.desc}
              iconName={skill.iconName}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
