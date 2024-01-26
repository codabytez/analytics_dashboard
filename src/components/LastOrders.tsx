import { FC } from "react";
import marcus from "../assets/marcus.png";
import jaydon from "../assets/jaydon.png";
import corey from "../assets/corey.png";
import cooper from "../assets/cooper.png";
import phillip from "../assets/phillip.png";
import { DocumentDownload } from "iconsax-react";

interface LastOrdersProps {
  theme: "light" | "dark";
}

interface OrderProps {
  image: string;
  name: string;
  date: string;
  amount: string;
  status: string;
}

const orders: OrderProps[] = [
  {
    image: marcus,
    name: "Marcus Bergson",
    date: "Nov 15, 2023",
    amount: "$80,000",
    status: "Paid",
  },
  {
    image: jaydon,
    name: "Jaydon Vaccaro",
    date: "Nov 15, 2023",
    amount: "$150,000",
    status: "Refund",
  },
  {
    image: corey,
    name: "Corey Schleifer",
    date: "Nov 14, 2023",
    amount: "$87,000",
    status: "Paid",
  },
  {
    image: cooper,
    name: "Cooper Press",
    date: "Nov 14, 2023",
    amount: "$100,000",
    status: "Refund",
  },
  {
    image: phillip,
    name: "Phillip Lubin",
    date: "Nov 13, 2023",
    amount: "$78,000",
    status: "Paid",
  },
];

const LastOrders: FC<LastOrdersProps> = ({ theme }) => {
  return (
    <div className="w-[806px] h-[422px] rounded-[14px] bg-white dark:bg-transparent flex flex-col justify-between items-center p-5 border border-[#EDF2F7] dark:border-neutral-700">
      <div className="flex w-[766px] justify-between items-center">
        <p className="text-[#26282C] dark:text-neutral-200 font-semibold text-Xtra-Large">
          Last Orders
        </p>

        <p className="text-primary font-semibold text-Xtra-Large">See All</p>
      </div>

      <div className="flex w-[766px] justify-between items-start">
        <p className="text-[#9CA4AB] dark:text-neutral-200 font-medium text-large shrink-0 w-[216px]">
          Name
        </p>
        <p className="text-[#9CA4AB] dark:text-neutral-200 font-medium text-large shrink-0 w-[116px]">
          Date
        </p>
        <p className="text-[#9CA4AB] dark:text-neutral-200 font-medium text-large shrink-0 w-[120px]">
          Amount
        </p>
        <p className="text-[#9CA4AB] dark:text-neutral-200 font-medium text-large shrink-0 w-[95px]">
          Status
        </p>
        <p className="text-[#9CA4AB] dark:text-neutral-200 font-medium text-large shrink-0 w-[80px]">
          Invoice
        </p>
      </div>

      <div className="inline-flex flex-col gap-4">
        {orders.map((order, index) => (
          <div key={index} className="flex w-[766px] flex-col gap-3">
            <div className="h-[1px] self-stretch bg-[#EDF2F6]" />
            <div className="flex justify-between items-center self-stretch">
              <div className="flex w-[216px] items-center gap-2.5">
                <img
                  src={order.image}
                  alt={order.name}
                  className="w-8 h-8 rounded-full"
                />
                <p className="text-[#3A3F51] dark:text-neutral-200 font-medium">
                  {order.name}
                </p>
              </div>
              <p className="w-[116px] text-[#737373] dark:text-neutral-200">
                {order.date}
              </p>
              <p className="w-[120px] text-secondary dark:text-neutral-300 font-medium">
                {order.amount}
              </p>
              <p
                className={`w-[95px] ${
                  order.status === "Paid" ? "text-primary" : "text-error"
                }`}
              >
                {order.status}
              </p>
              <div className="flex w-20 items-center gap-1.5">
                <DocumentDownload
                  size={16}
                  color={theme === "light" ? "#292D32" : "#fff"}
                />
                <p className="text-secondary dark:text-neutral-300 text-Medium">
                  View
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LastOrders;
