import { IoMdCheckmarkCircleOutline } from "react-icons/io";

interface SeatProps {
  status: "sold" | "selected" | "available";
  seat: number;
  onSeatSelection?: (seatNo: number) => void;
}

export default function Seat({
  status,
  seat,
  onSeatSelection,
}: Readonly<SeatProps>) {
  const isSold = status === "sold";
  const isSelected = status === "selected";
  const seatClassName =
    "w-[3rem] sm:w-[3.25rem] border-2 border-neutral-500 bg-neutral-100 text-neutral-700 rounded-lg grid place-items-center aspect-square hover:bg-theme-50 hover:border-theme-400 hover:text-theme-600 transition-colors";
  const selectedSeatClassName =
    "w-[3rem] sm:w-[3.25rem] border-2 border-theme-500 bg-theme-100 text-theme-700 rounded-lg grid place-items-center aspect-square relative";
  const soldSeatClassName =
    "w-[3rem] sm:w-[3.25rem] border-2 border-neutral-200 bg-neutral-300 text-neutral-700 rounded-lg grid place-items-center aspect-square cursor-not-allowed relative";
  return (
    <button
      className={
        isSold
          ? soldSeatClassName
          : isSelected
            ? selectedSeatClassName
            : seatClassName
      }
      onClick={() => onSeatSelection?.(seat)}
      disabled={isSold}
    >
      {seat}
      {isSelected && (
        <IoMdCheckmarkCircleOutline className="absolute top-0.5 left-0.5 text-sm" />
      )}
      {isSold && (
        <span className="absolute bottom-0.5 left-1/2 -translate-x-1/2 text-[0.5rem]">
          SOLD
        </span>
      )}
    </button>
  );
}
