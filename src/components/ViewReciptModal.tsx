import { Add } from "iconsax-react";
import { FC, useRef } from "react";
import Logo from "../assets/Vector.svg";
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";

interface ViewReciptModalProps {
  isModalOpen: boolean;
  setIsModalOpen: (isModalOpen: boolean) => void;
  date: string;
  amount: string;
  sender: string;
  reference: string;
  transactionId: string;
  status: string;
}

const ViewReciptModal: FC<ViewReciptModalProps> = ({
  isModalOpen,
  setIsModalOpen,
  date,
  amount,
  sender,
  reference,
  transactionId,
  status,
}) => {
  const receiptRef = useRef<HTMLDivElement>(null);

  const downloadReceipt = () => {
    const input = receiptRef.current;
    if (!input) return;
    const originalBG = getComputedStyle(input).backgroundColor;
    input.style.backgroundColor = "#ffffff";

    html2canvas(input)
      .then((canvas) => {
        const imgData = canvas.toDataURL("image/png");
        const pdf = new jsPDF("p", "px", "a4");
        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight = pdf.internal.pageSize.getHeight();

        const canvasAspectRatio = canvas.width / canvas.height;
        const imgWidth = Math.min(pdfWidth, pdfHeight * canvasAspectRatio);
        const imgHeight = Math.min(pdfHeight, pdfWidth / canvasAspectRatio);

        pdf.addImage(imgData, "JPEG", 0, 0, imgWidth, imgHeight);
        pdf.save("receipt.pdf");
      })
      .catch((error) => {
        console.error("Error occurred while creating PDF", error);
      })
      .finally(() => {
        input.style.backgroundColor = originalBG;
      });
  };

  return (
    <div
      className={`fixed top-0 left-0 w-full min-h-full bg-black bg-opacity-35 z-50 flex justify-center items-center ${
        isModalOpen ? "block" : "hidden"
      }`}
    >
      <div
        className={`bg-white dark:bg-dark rounded-2xl shadow-lg p-5 w-[500px] relative ${
          isModalOpen ? "block" : "hidden"
        }`}
      >
        <Add
          className="absolute text-secondary dark:text-neutral-200 dark:hover:text-error hover:border rounded-full right-4 rotate-45 top-4 hover:text-error duration-200 cursor-pointer"
          onClick={() => setIsModalOpen(false)}
        />
        <div className="flex flex-col gap-5 mt-5" ref={receiptRef}>
          <div className="flex justify-between items-center max-w-[370px] mx-auto mt-10 w-full">
            <img src={Logo} alt="logo" />
            <p className="text-[#0F0920] font-bold text-sm dark:text-neutral-300">
              {date}
            </p>
          </div>
          <h2 className="text-[#5C3E8A] font-bold uppercase text-center my-2">
            Order Receipt
          </h2>
          <div className="flex flex-col gap-4 w-full max-w-[370px] mx-auto">
            <div className="flex justify-between w-full">
              <p className="text-[#BDBDBD] text-xs font-semibold">
                Amount Paid
              </p>
              <p className="text-[#0F0920] text-xs font-extrabold dark:text-neutral-300">
                {amount}
              </p>
            </div>
            <div className="w-full h-[0.547px] bg-[#BDBDBD]" />
            <div className="flex justify-between w-full">
              <p className="text-[#BDBDBD] text-xs font-semibold">Sender</p>
              <p className="text-[#0F0920] text-xs font-extrabold dark:text-neutral-300">
                {sender}
              </p>
            </div>
            <div className="w-full h-[0.547px] bg-[#BDBDBD]" />
            <div className="flex justify-between w-full">
              <p className="text-[#BDBDBD] text-xs font-semibold">Reference</p>
              <p className="text-[#0F0920] text-xs font-extrabold dark:text-neutral-300">
                {reference}
              </p>
            </div>
            <div className="w-full h-[0.547px] bg-[#BDBDBD]" />
            <div className="flex justify-between w-full">
              <p className="text-[#BDBDBD] text-xs font-semibold">
                Transaction ID
              </p>
              <p className="text-[#0F0920] text-xs font-extrabold dark:text-neutral-300">
                {transactionId}
              </p>
            </div>
            <div className="w-full h-9" />
            <div className="flex justify-between w-full">
              <p className="text-[#BDBDBD] text-xs font-semibold">Status</p>
              <p
                className={`text-xs text-[#0F0920] font-extrabold py-2 px-5 rounded-lg border-[0.3px] ${
                  status === "Paid"
                    ? "bg-success/30 border-success"
                    : "bg-error/30 border-error"
                }`}
              >
                {status}
              </p>
            </div>
          </div>
        </div>
        <div className="w-full border border-dashed border-[#BDBDBD] mt-10" />
        <div className="flex flex-col gap-5 mt-5">
          <button
            className="w-full bg-[#0F0920] text-white transition-all duration-200 text-sm font-medium py-3 rounded-lg mt-5 hover:bg-[#1E0E40]"
            onClick={downloadReceipt}
          >
            Download Receipt
          </button>
          <p className="text-[#0F0920] dark:text-neutral-300 font-bold capitalize text-center cursor-pointer hover:text-primary transition-all duration-200">
            Share
          </p>
        </div>
      </div>
    </div>
  );
};

export default ViewReciptModal;
