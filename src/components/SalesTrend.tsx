import { FC, useState } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  TooltipItem,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { ArrowDown2 } from "iconsax-react";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

interface SalesTrendProps {
  theme?: "light" | "dark";
}
interface sortBy {
  name: string;
  sales: number;
}

const yearlySales: sortBy[] = [
  { name: "Jan", sales: 6.0 },
  { name: "Feb", sales: 21.0 },
  { name: "Mar", sales: 6.0 },
  { name: "Apr", sales: 27.0 },
  { name: "May", sales: 8.0 },
  { name: "Jun", sales: 46.0 },
  { name: "Jul", sales: 9.0 },
  { name: "Aug", sales: 23.0 },
  { name: "Sep", sales: 33.0 },
  { name: "Oct", sales: 7.0 },
  { name: "Nov", sales: 30.0 },
  { name: "Dec", sales: 22.0 },
];

const monthlySales: sortBy[] = [
  { name: "Week 1", sales: 2.0 },
  { name: "Week 2", sales: 3.0 },
  { name: "Week 3", sales: 1.5 },
  { name: "Week 4", sales: 2.5 },
];

const weeklySales: sortBy[] = [
  { name: "Monday", sales: 1.0 },
  { name: "Tuesday", sales: 3.2 },
  { name: "Wednesday", sales: 1.5 },
  { name: "Thursday", sales: 2.0 },
  { name: "Friday", sales: 2.5 },
  { name: "Saturday", sales: 1.0 },
  { name: "Sunday", sales: 3.0 },
];

const SalesTrend: FC<SalesTrendProps> = ({ theme }) => {
  const [sortBy, setSortBy] = useState<"yearly" | "monthly" | "weekly">(
    "yearly"
  );
  const salesData =
    sortBy === "yearly"
      ? yearlySales
      : sortBy === "monthly"
      ? monthlySales
      : weeklySales;

  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d") as CanvasRenderingContext2D;

  const gradient = ctx.createLinearGradient(0, 0, 0, 400);
  gradient.addColorStop(0, "#34CAA5");
  gradient.addColorStop(1, "rgba(52, 202, 165, 0.00)");

  const chartData = {
    labels: salesData.map((d) => d.name),
    datasets: [
      {
        label: "Sales",
        data: salesData.map((d) => d.sales),
        backgroundColor: "#34CAA51A",
        borderColor: "rgba(52, 202, 165, 0.30)",
        borderWidth: 0,
        borderRadius: 20,
        maxBarThickness: 50,
        hoverBackgroundColor: gradient,
      },
    ],
  };

  const options = {
    maintainAspectRatio: false,
    scales: {
      x: {
        barPercentage: 0.5,
        categoryPercentage: 0.5,
        grid: {
          drawBorder: false,
          color: "transparent",
          drawOnChartArea: false,
        },
      },
      y: {
        beginAtZero: true,
        grid: {
          drawBorder: false,
          borderDash: [4, 50],
          color: "#EDF2F7",
        },
        ticks: {
          stepSize: sortBy === "weekly" ? 1 : sortBy === "monthly" ? 2 : 5,
          callback: function (tickValue: string | number) {
            if (typeof tickValue === "number") {
              return tickValue === 0 ? "0" : tickValue.toFixed(2);
            }
            return tickValue;
          },
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: true,
        usePointStyle: true,
        backgroundColor: theme === "light" ? "#090C2C" : "#34CAA5",
        titleColor: "white",
        bodyColor: "white",
        displayColors: false,
        callbacks: {
          title: function () {
            return "";
          },
          label: function (context: TooltipItem<"bar">) {
            const rawValue = context.raw as number;
            return "   " + "$" + rawValue.toFixed(2).toString() + "   ";
          },
        },
      },
    },
  };

  return (
    <div className="lg:w-[806px] h-[374px] rounded-[14px] bg-white dark:bg-transparent flex flex-col justify-between items-center px-2 md:px-6 py-2 border border-[#EDF2F7] dark:border-neutral-700">
      <div className="flex w-full lg:w-[766px] justify-between items-center">
        <p className="text-[#26282C] dark:text-white text-Xtra-Large font-semibold">
          Sales Trend
        </p>
        <div className="flex h-[37px] items-center gap-2.5">
          <p className="text-[#3A3F51] dark:text-white text-Medium font-medium">
            Sort by:
          </p>
          <div className="relative">
            <select
              className="appearance-none rounded-[20px] py-1.5 pr-8 pl-3 outline-none border border-[#E1DFDF] dark:border-neutral-700 text-[#3A3F51] dark:text-neutral-300 text-Medium font-medium bg-transparent"
              value={sortBy}
              onChange={(e) =>
                setSortBy(e.target.value as "yearly" | "monthly" | "weekly")
              }
            >
              <option value="yearly">Yearly</option>
              <option value="monthly">Monthly</option>
              <option value="weekly">Weekly</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <ArrowDown2 size={20} />
            </div>
          </div>
        </div>
      </div>
      <div className="h-[300px] w-full max-w-[1000px]">
        <Bar height={300} options={options} data={chartData} />
      </div>
    </div>
  );
};

export default SalesTrend;
