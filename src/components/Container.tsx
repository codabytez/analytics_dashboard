import { FC } from "react";
import TopNavbar from "./TopNavbar";
import Content from "./Content";

interface ContentProps {
  theme: "light" | "dark";
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const Container: FC<ContentProps> = ({ theme, isOpen, setIsOpen }) => {
  return (
    <div className="w-[1440px]  desktop:max-h-[980px] desktop:overflow-hidden lg:overflow-y-scroll lg:overflow-x-hidden bg-[#FAFAFA] dark:bg-dark">
      <TopNavbar theme={theme} isOpen={isOpen} setIsOpen={setIsOpen} />
      <Content theme={theme} setIsOpen={setIsOpen} />
    </div>
  );
};

export default Container;
