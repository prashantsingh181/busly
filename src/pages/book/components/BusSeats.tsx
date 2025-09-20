import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import type { BusWithBookedSeats } from "../../../types/bus";
import { PiSteeringWheel } from "react-icons/pi";
import React from "react";

interface BusSeatsProps {
  bus: BusWithBookedSeats;
  selectedSeatNos: number[];
}

export default function BusSeats({
  bus,
  selectedSeatNos = [5, 8],
}: Readonly<BusSeatsProps>) {
  const { totalSeats, bookedSeats } = bus;
  const seatClassName =
    "border-2 border-neutral-500 bg-neutral-100 text-neutral-700 rounded-lg grid place-items-center aspect-square hover:bg-theme-50 hover:border-theme-400 hover:text-theme-600 transition-colors";
  const selectedSeatClassName =
    "border-2 border-theme-500 bg-theme-100 text-theme-700 rounded-lg grid place-items-center aspect-square relative";
  const soldSeatClassName =
    "border-2 border-neutral-200 bg-neutral-300 text-neutral-700 rounded-lg grid place-items-center aspect-square cursor-not-allowed relative";
  const seatsArray = Array.from({ length: totalSeats }, (_, i) => i + 1);

  function isBooked(seatNo: number) {
    // return bookedSeats.some((seat) => seat.seatNo === seatNo);
    return seatNo === 10;
  }
  function isSelected(seatNo: number) {
    return selectedSeatNos.includes(seatNo);
  }
  return (
    <div className="w-[18rem] mx-auto">
      {/* <div className="flex">
        <div className="flex-1 h-36 relative after:content-[''] after:absolute after:h-44 after:aspect-square after:bg-amber-200/70 after:bottom-20 after:skew-[28deg] after:rotate-45 after:left-1/2 after:-translate-x-[6.25rem] overflow-hidden" />
        <div className="flex-1 h-36 relative after:content-[''] after:absolute after:h-44 after:aspect-square after:bg-amber-200/70 after:bottom-20 after:skew-[28deg] after:rotate-45 after:left-1/2 after:-translate-x-[6.25rem] overflow-hidden" />
      </div> */}
      <div className="grid grid-cols-4 rounded-lg border-2 border-theme-500 p-4 bg-white gap-4 font-semibold">
        <div className="col-span-full rounded border-2 border-neutral-500 bg-neutral-100 text-neutral-700 font-bold flex gap-2 items-center p-2 text-lg justify-center">
          <PiSteeringWheel />
          <span>Driver</span>
        </div>
        <div className="col-span-2" />
        {seatsArray.map((seat) => (
          <React.Fragment key={seat}>
            <button
              className={
                isBooked(seat)
                  ? soldSeatClassName
                  : isSelected(seat)
                  ? selectedSeatClassName
                  : seatClassName
              }
            >
              {seat}
              {isSelected(seat) && (
                <IoMdCheckmarkCircleOutline className="absolute left-0.5 top-0.5 text-sm" />
              )}
              {isBooked(seat) && (
                <span className="text-[0.5rem] absolute bottom-0.5 left-1/2 -translate-x-1/2">
                  SOLD
                </span>
              )}
            </button>
            {seat % 3 === 0 ? <div /> : null}
          </React.Fragment>
        ))}
        {/* <button className="border-2 border-theme-500 bg-theme-100 text-theme-700 rounded-lg grid place-items-center aspect-square relative">
        <IoMdCheckmarkCircleOutline className="absolute left-0.5 top-0.5 text-sm" />
        1
      </button>
      <div></div>
      <button className="border-2 border-neutral-500 bg-neutral-100 text-neutral-700 rounded-lg grid place-items-center aspect-square hover:bg-theme-100 hover:border-theme-500 hover:text-theme-700 transition-colors">
        2
      </button>
      <button className="border-2 border-neutral-200 bg-neutral-300 text-neutral-700 rounded-lg grid place-items-center aspect-square cursor-not-allowed relative">
        <span>3</span>
        <span className="text-[0.5rem] absolute bottom-0.5 left-1/2 -translate-x-1/2">
          SOLD
        </span>
      </button> */}
      </div>
    </div>
  );
}
