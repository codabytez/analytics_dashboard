import { BoxTick, Coin1, I3DRotate, ShoppingCart } from "iconsax-react";
import { FC, JSX } from "react";
import OrderSvg from "./OrderSvg";
import RefundSvg from "./RefundSvg";
import SalesSvg from "./SalesSvg";
import IncomeSvg from "./IncomeSvg";
import { motion } from "framer-motion";

interface TrendsSummaryProps {
  theme: "light" | "dark";
}

interface TrendProps {
  icon: typeof BoxTick;
  title: string;
  value: string;
  percentage: string;
  trendComponent: React.FC<JSX.IntrinsicElements["svg"]>;
  trend: "up" | "down";
}

const trends: TrendProps[] = [
  {
    icon: BoxTick,
    title: "Total Orders",
    value: "350",
    percentage: "23.5%",
    trendComponent: OrderSvg,
    trend: "up",
  },
  {
    icon: I3DRotate,
    title: "Total Refund",
    value: "270",
    percentage: "23.5%",
    trendComponent: RefundSvg,
    trend: "down",
  },
  {
    icon: ShoppingCart,
    title: "Total Sales",
    value: "1567",
    percentage: "23.5%",
    trendComponent: SalesSvg,
    trend: "down",
  },
  {
    icon: Coin1,
    title: "Total Income",
    value: "$350.000",
    percentage: "23.5%",
    trendComponent: IncomeSvg,
    trend: "up",
  },
];

const TrendsSummary: FC<TrendsSummaryProps> = ({ theme }) => {
  const containerVariants = {
    hover: {
      backgroundColor: theme === "light" ? "#E5E5E5" : "#3A3F51",
      scale: 1.03,
      transition: {
        type: "tween",
        duration: 0.5,
      },
    },
    initial: {
      scale: 1,
      backgroundColor: theme === "light" ? "#fff" : "#2b2b2b",
    },
  };

  const iconVariants = {
    hover: { backgroundColor: "#0D062D" },
    initial: { backgroundColor: theme === "light" ? "#fff" : "#2b2b2b" },
  };

  return (
    <motion.div className="grid grid-cols-1 sm:grid-cols-2 minitop:grid-cols-1 desktop:grid-cols-2 gap-4 max-w-[806px] select-none">
      {trends.map((trend, i) => (
        <motion.div
          key={`${i}-${theme}`}
          className="py-4 px-3 inline-flex flex-col shrink-0 gap-2.5 rounded-[14px] border border-[#EDF2F7] bg-white dark:bg-neutral-700/30 cursor-pointer"
          variants={containerVariants}
          initial="initial"
          whileHover="hover"
          onHoverEnd={() => containerVariants.initial}
        >
          <div className="flex w-full desktop:w-[207px] justify-between items-center">
            <motion.div
              className="w-10 h-10 flex justify-center items-center shrink-0 rounded-full border border-[#E6E6E6]"
              variants={iconVariants}
            >
              <trend.icon
                variant="Bulk"
                color={theme === "light" ? "#34CAA5" : "#F5F5F5"}
              />
            </motion.div>
            <trend.trendComponent />
          </div>
          <div className="flex flex-col items-start gap-1">
            <p className="text-Xtra-Large text-[#898989] font-medium">
              {trend.title}
            </p>
            <h4 className="text-H_4 text-[#3A3F51] dark:text-neutral-200">
              {trend.value}
            </h4>
          </div>
          <div className="flex items-center gap-2.5">
            <div
              className={`flex items-center justify-center py-1 px-2 gap-1 rounded-full ${
                trend.trend === "up" ? "bg-primary/[0.12]" : "bg-error/[0.12]"
              }`}
            >
              {trend.trend === "up" ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="10"
                  height="6"
                  viewBox="0 0 10 6"
                  fill="none"
                >
                  <path
                    d="M0.5 5.5L3.5 2.5L5.5 4.5L9.5 0.5"
                    stroke="#34CAA5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M6 0.5H9.5V4"
                    stroke="#34CAA5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="10"
                  height="6"
                  viewBox="0 0 10 6"
                  fill="none"
                >
                  <path
                    d="M0.5 0.5L3.5 3.5L5.5 1.5L9.5 5.5"
                    stroke="#ED544E"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M6 5.5H9.5V2"
                    stroke="#ED544E"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              )}
              <p
                className={`${
                  trend.trend === "up" ? "text-primary" : "text-error"
                } text-sm font-medium`}
              >
                {trend.percentage}
              </p>
            </div>
            <p className="text-[#606060] text-Medium">vs. previous month</p>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default TrendsSummary;
