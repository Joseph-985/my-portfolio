// import { textGradient } from "../helpers/style";
import { useColors } from "../hooks/useColors";

const Introduction = () => {
  const { nameGradient, titleGradient } = useColors();
  return (
    <>
      <section className="w-full flex items-center justify-center min-h-[600px]">
        <div className="flex flex-col items-center justify-center gap-y-[90px] !animate-fade-up">
          <div
            className={`text-3xl lg:text-7xl font-bold text-white text-center ${titleGradient}`}
          >
            FRONT-END DEVELOPER
          </div>
          <div className="flex flex-col gap-y-3 items-center justify-center">
            <div
              className={`text-2xl md:text-3xl lg:text-5xl font-bold text-white ${nameGradient}`}
            >
              Ufomadu Joseph
            </div>
            <div className="text-center px-10 lg:px-40 lg:text-xl text-slate-200 dark:text-black text-base lg:text-wrap md:text-wrap">
              Hi there! 👋 I'm Ufomadu Nnaemeka, a frontend developer passionate
              about crafting engaging and user-friendly web experiences. With a
              strong foundation in React, HTML, CSS, and a knack for utilizing
              frameworks like Tailwind CSS, Bootstrap, and Next.js, I bring
              creativity and precision to every project I work on.
            </div>
          </div>
        </div>
        <div></div>
      </section>
    </>
  );
};

export default Introduction;
