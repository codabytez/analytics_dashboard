import { FC } from "react";
import LastOrders from "./LastOrders";
import SalesTrend from "./SalesTrend";
import SalesReport from "./SalesReport";
import TrendsSummary from "./TrendsSummary";

interface ContentProps {
  theme: "light" | "dark";
}

const Content: FC<ContentProps> = ({ theme }) => {
  return (
    <div className="p-5 max-h-[850px] flex gap-5 absolute top-[100px] overflow-auto">
      <div className="flex flex-col gap-5">
        <SalesTrend theme={theme} />
        <LastOrders theme={theme} />
      </div>
      <div className="flex flex-col gap-5">
        <TrendsSummary theme={theme} />
        <SalesReport />
      </div>
    </div>
  );
};

export default Content;
