import { Collapse } from "antd";
import { useAccordion } from "../hooks/useAccordion";

const Projects = () => {
  const { items } = useAccordion();
  return (
    <section className="mt-20 ">
      <div className="text-2xl md:text-3xl lg:text-5xl text-slate-200 dark:text-purple-600 text-center flex items-center justify-center !mb-10 font-semibold">
        Projects
      </div>
      <div className="!w-full mt-5 lg:px-10 px-4">
        <Collapse
          defaultActiveKey={["1"]}
          items={items}
          accordion
          className="!rounded-lg"
        />
      </div>
    </section>
  );
};

export default Projects;
