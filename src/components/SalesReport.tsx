import { motion } from "framer-motion";
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

const variants = {
  initial: {
    opacity: 0,
    x: -200,
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1,
      type: "spring",
      stiffness: 50,
      damping: 10,
      staggerChildren: 1,
    },
  },
};

const SalesReport: FC<SalesReportProps> = () => {
  return (
    <motion.div
      className="rounded-lg pt-4 pr-4 pb-8 pl-5 bg-white dark:bg-transparent inline-flex flex-col justify-between items-start gap-5 max-w-[806px]"
      variants={variants}
    >
      <motion.div
        className="flex justify-between items-center self-stretch mb-2"
        variants={variants}
      >
        <p className="text-[#26282C] dark:text-neutral-200 font-semibold text-Xtra-Large">
          Top Platform
        </p>

        <p className="hidden lg:flex text-primary hover:text-secondary dark:hover:text-neutral-200 transition-all duration-200 cursor-pointer font-semibold text-Xtra-Large">
          See All
        </p>
      </motion.div>

      <motion.div
        className="flex w-full desktop:w-[452px] flex-col items-start gap-5"
        variants={variants}
        initial="initial"
        whileInView="animate"
      >
        {topPlatforms.map((platform, i) => (
          <motion.div
            key={`${i}-${platform.width}`}
            className="w-full h-[97px] flex flex-col gap-[17px]"
            variants={variants}
          >
            <p className="text-[#22242C] dark:text-neutral-200 font-semibold text-large">
              {platform.name}
            </p>
            <motion.div className="w-full shrink-0 rounded-[40px] bg-neutral-100 h-3">
              <motion.div
                style={{ width: platform.width, background: platform.color }}
                className="h-full rounded-[40px]"
                initial={{ width: 0 }}
                whileInView={{ width: platform.width }}
                transition={{
                  type: "spring",
                  stiffness: 200,
                  damping: 10,
                  delay: 0.5,
                }}
              />
            </motion.div>
            <div className="inline-flex justify-between items-center">
              <p className="text-neutral-600 dark:text-neutral-200 text-Xtra-Large">
                {platform.amount}
              </p>
              <p className="text-neutral-600 dark:text-neutral-200 text-Xtra-Large">
                {platform.percentage}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>
      <button className="mt-2 flex sm:hidden w-full py-2 px-4 justify-center items-center gap-2.5 rounded-[20px] bg-[#D9FFF6] hover:bg-primary transition-all duration-200 max-w-[300px] mx-auto">
        see all
      </button>
    </motion.div>
  );
};

export default SalesReport;
