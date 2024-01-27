import { FC } from "react";
import LastOrders from "./LastOrders";
import SalesTrend from "./SalesTrend";
import SalesReport from "./SalesReport";
import TrendsSummary from "./TrendsSummary";

interface ContentProps {
  theme: "light" | "dark";
  setIsOpen: (isOpen: boolean) => void;
}

const Content: FC<ContentProps> = ({ theme, setIsOpen }) => {
  return (
    <div
      className="p-5 flex flex-col minitop:flex-row gap-5 relative pt-[120px] sm:left-[80px]  w-full sm:w-[calc(100%-80px)] overflow-auto dark:bg-dark"
      onClick={() => setIsOpen(false)}
    >
      <div className="flex flex-col gap-5">
        <SalesTrend theme={theme} />
        <LastOrders theme={theme} />
        <div className="w-full hidden lg:flex flex-col desktop:hidden">
          <SalesReport />
        </div>
      </div>

      <div className="flex flex-col gap-5">
        <TrendsSummary theme={theme} />
        <div className="w-full flex flex-col lg:hidden desktop:flex">
          <SalesReport />
        </div>
      </div>
    </div>
  );
};

export default Content;
