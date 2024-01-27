import { FC } from "react";
import logo from "../assets/Vector.svg";
import LightMode from "./LightMode";
import DarkMode from "./DarkMode";
import {
  ArrowCircleRight2,
  Box,
  Category,
  DiscountShape,
  InfoCircle,
  Logout,
  Profile2User,
  Setting2,
  TrendUp,
} from "iconsax-react";

interface SideNavbarProps {
  activeTab: string | null;
  theme: "light" | "dark";
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  setActiveTab: (tab: string | null) => void;
  setTheme: (theme: "light" | "dark") => void;
}

interface TabProps {
  name: string;
  icon: typeof Category;
}

const tabs: TabProps[] = [
  {
    name: "dashboard",
    icon: Category,
  },
  {
    name: "trends",
    icon: TrendUp,
  },
  {
    name: "users",
    icon: Profile2User,
  },
  {
    name: "box",
    icon: Box,
  },
  {
    name: "discount",
    icon: DiscountShape,
  },
  {
    name: "info",
    icon: InfoCircle,
  },
];

const SideNavbar: FC<SideNavbarProps> = ({
  activeTab,
  setActiveTab,
  theme,
  setTheme,
  isOpen,
  setIsOpen,
}) => {
  return (
    <nav
      className={`flex w-20 py-5 z-20 fixed desktop:absolute top-[90px] sm:top-0 left-0 flex-col items-center gap-2.5 shrink-0 border-r border-[#EBECF2] bg-[#F7F8FA] dark:bg-dark transform transition-transform duration-200 ease-in-out h-full ${
        isOpen ? "translate-x-0" : "-translate-x-full sm:translate-x-0"
      }`}
    >
      <div className="flex flex-col items-center justify-between h-[calc(100%-90px)]  self-stretch w-full relative">
        <div className="flex flex-col items-center gap-3 md:gap-7 w-full">
          <img
            className="cursor-pointer transition-all duration-200 hover:scale-110"
            src={logo}
            alt="logo"
            onClick={() => {
              setActiveTab("dashboard");
              setIsOpen(false);
            }}
          />
          <div className="flex flex-col items-center gap-2 md:gap-4 self-stretch w-full">
            {tabs.map((tab, i) => (
              <div
                key={i}
                className="flex h-10 w-full p-2.5 justify-center items-center self-stretch hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-all duration-300 cursor-pointer"
                onClick={() => {
                  setActiveTab(tab.name);
                  setIsOpen(false);
                }}
              >
                <tab.icon
                  color={
                    activeTab === tab.name
                      ? theme === "light"
                        ? "#0D062D"
                        : "#FFFFFF"
                      : "#B2ABAB"
                  }
                  variant={activeTab === tab.name ? "Bulk" : "Broken"}
                />
                {activeTab === tab.name && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="3"
                    height="21"
                    viewBox="0 0 3 21"
                    fill="none"
                    className="absolute right-0"
                  >
                    <path
                      d="M6.53467e-06 3.02509C7.11773e-06 1.42129 1.40951 0.182713 3 0.388889V21C1.34315 21 4.88293e-07 19.6569 1.09063e-06 18L6.53467e-06 3.02509Z"
                      fill={theme === "light" ? "#0D062D" : "#fff"}
                    />
                  </svg>
                )}
              </div>
            ))}
          </div>

          <div className="flex p-2 flex-col items-center gap-2 rounded-xl bg-white">
            <div
              className={`flex w-[30px] py-[6.6px] px-[7.5px] flex-col justify-center items-center rounded-full gap-2.5 cursor-pointer ${
                theme === "light" && "bg-[#34CAA5]"
              }`}
              onClick={() => setTheme("light")}
            >
              <LightMode fill={theme === "light" ? "white" : "#B2ABAB"} />
            </div>
            <div
              className={`flex w-[30px] py-[6.6px] px-[7.5px] flex-col justify-center items-center rounded-full gap-2.5 cursor-pointer ${
                theme === "dark" && "bg-[#34CAA5]"
              }`}
              onClick={() => setTheme("dark")}
            >
              <DarkMode fill={theme === "dark" ? "white" : "#B2ABAB"} />
            </div>
          </div>
        </div>
        <div className="flex w-full flex-col items-center gap-4 border-error">
          <div className="w-full flex justify-center items-center cursor-pointer py-1 px-4 group">
            <ArrowCircleRight2
              className="text-[#B2ABAB] group-hover:text-success duration-200"
              variant="Broken"
            />
          </div>
          <div className="w-full flex justify-center items-center cursor-pointer py-1 px-4 group">
            <Setting2
              className="text-[#B2ABAB] group-hover:text-warning duration-200"
              variant="Broken"
            />
          </div>
          <div className="w-full flex justify-center items-center cursor-pointer py-1 px-4 group">
            <Logout
              className="text-[#B2ABAB] group-hover:text-error duration-200"
              variant="Broken"
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default SideNavbar;
