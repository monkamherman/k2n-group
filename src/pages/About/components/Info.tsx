
import { BiCubeAlt } from "react-icons/bi";

const Info = (props: { title: string; size?: string; description: string }) => {
  return (
    <div className="flex items-center font-roboto gap-4">
      {/* Icon and separator */}
      <div className="flex flex-col items-center gap-4">
        <BiCubeAlt
          className="lg:w-auto text-dark dark:text-white size-fit text-[2rem] lg:h-auto rounded-lg object-cover"        
        />
        {/* Vertical line */}
        <div className="w-1 bg-secondary dark:bg-primary" style={{ height: props.size || "10rem" }}></div>
      </div>

      {/* Text section */}
      <div className="flex flex-col mt-6 gap-2">
        <h1 className="lg:text-4xl font-bold text-dark dark:text-white">{props.title}</h1>
        <p className="text-dark dark:text-white lg:w-[30rem]">{props.description}</p>
      </div>
    </div>
  );
};

export default Info;
