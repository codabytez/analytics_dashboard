import { FC, useState } from "react";
import marcus from "../assets/marcus.png";
import jaydon from "../assets/jaydon.png";
import corey from "../assets/corey.png";
import cooper from "../assets/cooper.png";
import phillip from "../assets/phillip.png";
import { DocumentDownload } from "iconsax-react";
import ViewReciptModal from "./ViewReciptModal";

interface LastOrdersProps {
  theme: "light" | "dark";
}

interface OrderProps {
  image: string;
  name: string;
  date: string;
  amount: string;
  status: string;
  reference: string;
  transactionId: string;
}

const orders: OrderProps[] = [
  {
    image: marcus,
    name: "Marcus Bergson",
    date: "Nov 15, 2023",
    amount: "$80,000",
    status: "Paid",
    reference: String(Math.floor(Math.random() * 100000000000000000)) + "AD",
    transactionId: String(Math.floor(Math.random() * 100000000000000)) + "AD",
  },
  {
    image: jaydon,
    name: "Jaydon Vaccaro",
    date: "Nov 15, 2023",
    amount: "$150,000",
    status: "Refund",
    reference: String(Math.floor(Math.random() * 100000000000000000)) + "AD",
    transactionId: String(Math.floor(Math.random() * 100000000000000)) + "AD",
  },
  {
    image: corey,
    name: "Corey Schleifer",
    date: "Nov 14, 2023",
    amount: "$87,000",
    status: "Paid",
    reference: String(Math.floor(Math.random() * 100000000000000000)) + "AD",
    transactionId: String(Math.floor(Math.random() * 100000000000000)) + "AD",
  },
  {
    image: cooper,
    name: "Cooper Press",
    date: "Nov 14, 2023",
    amount: "$100,000",
    status: "Refund",
    reference: String(Math.floor(Math.random() * 100000000000000000)) + "AD",
    transactionId: String(Math.floor(Math.random() * 100000000000000)) + "AD",
  },
  {
    image: phillip,
    name: "Phillip Lubin",
    date: "Nov 13, 2023",
    amount: "$78,000",
    status: "Paid",
    reference: String(Math.floor(Math.random() * 100000000000000000)) + "AD",
    transactionId: String(Math.floor(Math.random() * 100000000000000)) + "AD",
  },
];

const LastOrders: FC<LastOrdersProps> = ({ theme }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentOrder, setCurrentOrder] = useState<OrderProps | null>(null);

  const openModal = (order: OrderProps) => {
    setCurrentOrder(order);
    setIsModalOpen(true);
  };

  return (
    <div className="lg:w-[806px] lg:h-[422px] rounded-[14px] bg-white dark:bg-transparent flex flex-col justify-between items-center p-5 border border-[#EDF2F7] dark:border-neutral-700">
      <div className="flex w-full lg:w-[766px] justify-between items-center mb-8 lg:mb-2">
        <p className="text-[#26282C] dark:text-neutral-200 font-semibold text-Xtra-Large">
          Last Orders
        </p>

        <p className="hidden lg:flex text-primary hover:text-secondary dark:hover:text-neutral-200 transition-all duration-200 cursor-pointer font-semibold text-Xtra-Large">
          See All
        </p>
      </div>

      <div className="hidden lg:flex w-[766px] justify-between items-start">
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

      <div className="w-full flex flex-col gap-4 px-2.5 lg:px-0">
        {orders.map((order, index) => (
          <div
            key={index}
            className="flex w-full lg:w-[766px] flex-col gap-3 relative"
          >
            <div className="hidden lg:block h-[1px] self-stretch bg-[#EDF2F6]" />
            <div className="flex flex-col gap-2 lg:gap-0 lg:flex-row justify-between items-start lg:items-center self-stretch">
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
              <p className="lg:w-[116px] text-[#737373] dark:text-neutral-200 shrink-0">
                <span className="text-[#333] dark:text-neutral-500 font-semibold lg:hidden">
                  Date:{" "}
                </span>
                {order.date}
              </p>
              <p className="lg:w-[120px] text-secondary dark:text-neutral-300 font-medium shrink-0">
                <span className="text-[#333] dark:text-neutral-500 font-semibold lg:hidden">
                  Order Amount:{" "}
                </span>
                {order.amount}
              </p>
              <p
                className={`lg:w-[95px] shrink-0 ${
                  order.status === "Paid" ? "text-primary" : "text-error"
                }`}
              >
                <span className="text-[#333] dark:text-neutral-500 font-semibold lg:hidden">
                  Status:{" "}
                </span>
                {order.status}
              </p>
              <button
                className="py-2 px-4 mt-4 lg:mt-0 lg:px-0 flex w-full lg:w-20 justify-center sm:justify-end lg:justify-start items-center gap-1.5 sm:absolute top-[20%] right-3 lg:relative lg:top-0 lg:right-0 shrink-0 group transition-all duration-200"
                onClick={() => openModal(order)}
              >
                <DocumentDownload
                  size={16}
                  color={theme === "light" ? "#292D32" : "#fff"}
                />
                <p className="text-primary group-hover:text-neutral-600 group-hover:lg:text-primary transition-all duration-200 font-bold lg:font-medium lg:text-secondary lg:dark:text-neutral-300 text-Medium">
                  View <span className="lg:hidden">Invoice</span>
                </p>
              </button>
            </div>
            <div className="lg:hidden h-[1px] self-stretch bg-[#EDF2F6]" />
            {isModalOpen && currentOrder && (
              <ViewReciptModal
                isModalOpen={isModalOpen}
                setIsModalOpen={setIsModalOpen}
                amount={currentOrder.amount}
                date={currentOrder.date}
                sender={currentOrder.name}
                reference={currentOrder.reference}
                transactionId={currentOrder.transactionId}
                status={currentOrder.status}
              />
            )}
          </div>
        ))}
        <button className="flex lg:hidden w-full py-2 px-4 justify-center items-center gap-2.5 rounded-[20px] bg-[#D9FFF6] hover:bg-primary transition-all duration-200 max-w-[300px] mx-auto">
          see all
        </button>
      </div>
    </div>
  );
};

export default LastOrders;
