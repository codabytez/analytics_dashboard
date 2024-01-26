import { FC } from "react";
import TopNavbar from "./TopNavbar";
import Content from "./Content";

interface ContentProps {
  theme: "light" | "dark";
}

const Container: FC<ContentProps> = ({ theme }) => {
  return (
    <div className="w-[1360px] max-h-[1080px] overflow-y-auto overflow-x-hidden bg-[#FAFAFA] dark:bg-transparent ">
      <TopNavbar theme={theme} />
      <Content theme={theme} />
    </div>
  );
};

export default Container;
