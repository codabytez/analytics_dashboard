import {
  Calendar1,
  SearchNormal1,
  Notification,
  ArrowDown2,
} from "iconsax-react";
import { FC } from "react";
import userProfile from "../assets/navbarProfile.png";

interface TopNavbarProps {
  theme: "light" | "dark";
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const TopNavbar: FC<TopNavbarProps> = ({ theme, isOpen, setIsOpen }) => {
  return (
    <div className="flex pt-[18px] flex-col justify-end items-start gap-[18px] bg-[#FAFAFA] dark:bg-dark fixed z-10">
      <div className="flex px-3 w-full sm:w-[calc(100%-80px)] justify-between items-center max-w-[1300px] relative sm:left-[80px]">
        <button
          className="sm:hidden absolute left-4 sm:left-0 z-10"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
          >
            <path
              d="M2.25 13.5H15.75"
              stroke="#585858"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M2.25 9H15.75"
              stroke="#585858"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M2.25 4.5H15.75"
              stroke="#585858"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
        <div
          className="flex ml-12 sm:ml-0 xl:w-[400px] minitop:w-[600px] desktop:w-[700px] justify-between items-center gap-4"
          onClick={() => setIsOpen(false)}
        >
          <h5 className="text-H_5 text-[#26282C] dark:text-neutral-200">
            Dashboard
          </h5>
          <div className="sm:w-[200px] lg:w-[349px] flex items-start shrink-0 rounded-[20px] ">
            <div className="flex h-10 sm:h-12 w-10 sm:w-auto mr-2 sm:mr-0 sm:pl-4 items-center justify-center sm:justify-start gap-2 flex-[1_0_0] rounded-3xl border border-[#DADDDD] sm:bg-white sm:dark:bg-neutral-200">
              <SearchNormal1 size={18} color="#78828A" />
              <input
                className="bg-transparent hidden sm:flex w-[calc(100%-40px)] outline-none border-none"
                placeholder="Search"
              />
            </div>
          </div>
        </div>

        <div className="flex items-center gap-5">
          <div className="flex justify-end items-center gap-5">
            <div className="hidden lg:flex h-10 py-3 px-4 justify-center items-center gap-2 rounded-[20px]">
              <Calendar1
                size={20}
                color={theme === "light" ? "#0D062D" : "#fff"}
                variant="Outline"
              />
              <p className="text-[#26282C] dark:text-neutral-200 text-Medium font-medium">
                November 15, 2023
              </p>
            </div>
            <div className="flex h-10 w-10 p-2.5 justify-center items-center rounded-[27px] border border-[#DADDDD]">
              <Notification
                size={20}
                color={theme === "light" ? "#0D062D" : "#fff"}
                variant="Outline"
              />
            </div>
          </div>

          <div className="flex sm:py-1.5 sm:px-2 justify-center items-center gap-3 rounded-[40px] border border-[#DADDDD]">
            <div className="flex items-center gap-2">
              <img
                src={userProfile}
                alt="User"
                className="min-w-[38px] min-h-[38px] object-cover"
              />
              <div className="hidden md:flex flex-col items-end gap-1">
                <p className="text-[#26282C] dark:text-neutral-200 text-right">
                  Justin Bergson
                </p>
                <p className="text-[#787486] text-right text-sm">
                  Justin@gmail.com
                </p>
              </div>
            </div>
            <ArrowDown2
              size={20}
              color={theme === "light" ? "#0D062D" : "#fff"}
              className="hidden sm:flex"
            />
          </div>
        </div>
      </div>
      <div className="w-screen max-w-[1440px] h-[1px] bg-[#E5EAEF]" />
    </div>
  );
};

export default TopNavbar;
