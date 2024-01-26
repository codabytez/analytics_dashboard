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
}

const TopNavbar: FC<TopNavbarProps> = ({ theme }) => {
  return (
    <div className="flex w-[1360px] pt-[18px] flex-col justify-end items-center gap-[18px] bg-[#FAFAFA] max-w-[1360px] dark:bg-secondary fixed">
      <div className="flex justify-between items-center">
        <div className="flex w-[810px] justify-between items-center">
          <h5 className="text-H_5 text-[#26282C] dark:text-neutral-200">
            Dashboard
          </h5>
          <div className="w-[349px] flex items-start shrink-0 rounded-[20px]">
            <div className="flex h-12 pl-4 items-center gap-2 flex-[1_0_0] rounded-3xl border border-[#DADDDD] bg-white dark:bg-neutral-200">
              <SearchNormal1 size={18} color="#78828A" />
              <input
                className="bg-transparent w-[calc(100%-40px)] outline-none border-none"
                placeholder="Search"
              />
            </div>
          </div>
        </div>

        <div className="flex items-center gap-5">
          <div className="flex justify-end items-center gap-5">
            <div className="flex h-10 py-3 px-4 justify-center items-center gap-2 rounded-[20px]">
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

          <div className="flex py-1.5 px-2 justify-center items-center gap-3 rounded-3xl border border-[#DADDDD]">
            <div className="flex items-center gap-2">
              <img
                src={userProfile}
                alt="User"
                className="w-[38px] h-[38px] object-cover"
              />
              <div className="flex flex-col items-end gap-1">
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
            />
          </div>
        </div>
      </div>
      <div className="w-full max-w-[1360px] h-[1px] bg-[#E5EAEF]" />
    </div>
  );
};

export default TopNavbar;
