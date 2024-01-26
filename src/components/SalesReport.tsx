import { FC } from "react";

interface SalesReportProps {}
interface TopPlatformProps {
  name: string;
  amount: string;
  percentage: string;
  width: string;
  color: string;
}

const topPlatforms: TopPlatformProps[] = [
  {
    name: "Book Bazaar",
    amount: "$2,500,000",
    percentage: "+15%",
    width: "54.2%",
    color: "#6160DC",
  },
  {
    name: "Artisan Aisle",
    amount: "$1,800,000",
    percentage: "+10%",
    width: "45.202%",
    color: "#54C5EB",
  },
  {
    name: "Toy Troop",
    amount: "$1,200,000",
    percentage: "+8%",
    width: "27.02%",
    color: "#FFB74A",
  },
  {
    name: "XStore",
    amount: "$600,000",
    percentage: "+5%",
    width: "27.02%",
    color: "#FF4A55",
  },
];

const SalesReport: FC<SalesReportProps> = () => {
  return (
    <div className="rounded-lg pt-4 pr-4 pb-8 pl-5 bg-white dark:bg-transparent inline-flex flex-col justify-between items-start gap-5">
      <div className="flex justify-between items-center self-stretch">
        <p className="text-[#26282C] dark:text-neutral-200 font-semibold text-Xtra-Large">
          Top Platform
        </p>

        <p className="text-primary font-semibold text-Xtra-Large">See All</p>
      </div>

      <div className="flex w-[452px] flex-col items-start gap-5">
        {topPlatforms.map((platform, i) => (
          <div key={i} className="w-full h-[97px] flex flex-col gap-[17px]">
            <p className="text-[#22242C] dark:text-neutral-200 font-semibold text-large">
              {platform.name}
            </p>
            <div className="w-full shrink-0 rounded-[40px] bg-neutral-100 h-3">
              <div
                style={{ width: platform.width, background: platform.color }}
                className="h-full rounded-[40px]"
              />
            </div>
            <div className="inline-flex justify-between items-center">
              <p className="text-neutral-600 dark:text-neutral-200 text-Xtra-Large">
                {platform.amount}
              </p>
              <p className="text-neutral-600 dark:text-neutral-200 text-Xtra-Large">
                {platform.percentage}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SalesReport;
