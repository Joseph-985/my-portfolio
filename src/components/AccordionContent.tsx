import { Link } from "react-router-dom";
interface IProps {
  content: string;
  url?: string;
  image?: string;
  pathName?: string;
}
const AccordionContent = ({ content, image, url, pathName }: IProps) => {
  return (
    <>
      <div className="lg:hidden flex-col justify-between items-start !w-full">
        <div className="mb-5">
          <img
            src={image}
            alt="project image"
            className="w-[327px] max-h-[172px] rounded-[20px] bg-contain object-fill"
          />{" "}
        </div>
        <div className="w-full">
          <div className="text-white text-base font-normal leading-[24px] pb-3 mb-2 text-left md:text-lg md:leading-[20px]">
            {content}{" "}
          </div>
          {url && (
            <Link to={url} className="mt-3">
              {pathName}
            </Link>
          )}
        </div>
      </div>
      <div className="hidden lg:flex justify-between items-start">
        <div className="w-[50%]">
          <div className="text-white text-2xl font-normal leading-[40px] mb-3 pb-3">
            {content}
          </div>
          {url && (
            <Link to={url} className="mt-3">
              {pathName}
            </Link>
          )}
        </div>
        <div>
          <img
            src={image}
            alt="project image"
            className="!w-[480px] !max-h-[328px] rounded-[20px] bg-contain"
          />{" "}
        </div>
      </div>
    </>
  );
};

export default AccordionContent;
