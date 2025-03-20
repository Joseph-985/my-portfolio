import { MotionDiv } from ".";
export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <MotionDiv
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ ease: "easeInOut", duration: 1 }}
    >
      {children}
    </MotionDiv>
  );
}
