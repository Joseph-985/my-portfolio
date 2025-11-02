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
              Ufomadu Nnaemeka Joseph
            </div>
            <div className="text-center px-10 lg:px-40 lg:text-xl !text-black dark:!text-white text-base lg:text-wrap md:text-wrap font-poppins">
              Hi there! 👋 I am a Frontend Developer with over 4 years of
              experience building scalable, performant, and user-centric web
              applications using modern technologies like React, Next.js, and
              TypeScript. Strong background in collaborating across
              cross-functional teams, integrating APIs, and implementing
              responsive UI based on Figma and Adobe XD designs. Adept at
              handling app-wide state management, delivering pixel-perfect UIs,
              and deploying production-ready features. Passionate about clean
              code, performance optimization, and continuous learning.
            </div>
          </div>
        </div>
        <div></div>
      </section>
    </>
  );
};

export default Introduction;
