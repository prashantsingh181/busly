import type { Bus } from "@/types/bus";
import { PiSteeringWheel } from "react-icons/pi";
import React from "react";
import Seat from "./Seat";

interface BusSeatsProps {
  bus: Bus;
  selectedSeatNos: number[];
  bookedSeatNos: number[];
  onSeatSelection: (seatNo: number) => void;
}

export default function BusSeats({
  bus,
  selectedSeatNos,
  bookedSeatNos,
  onSeatSelection,
}: Readonly<BusSeatsProps>) {
  const { totalSeats } = bus;
  const seatsArray = Array.from({ length: totalSeats }, (_, i) => i + 1);

  function getSeatStatus(seatNo: number) {
    if (bookedSeatNos.includes(seatNo)) return "sold";
    else if (selectedSeatNos.includes(seatNo)) return "selected";
    else return "available";
  }
  return (
    <div className="mx-auto">
      {/* <div className="flex">
        <div className="flex-1 h-36 relative after:content-[''] after:absolute after:h-44 after:aspect-square after:bg-amber-200/70 after:bottom-20 after:skew-[28deg] after:rotate-45 after:left-1/2 after:-translate-x-[6.25rem] overflow-hidden" />
        <div className="flex-1 h-36 relative after:content-[''] after:absolute after:h-44 after:aspect-square after:bg-amber-200/70 after:bottom-20 after:skew-[28deg] after:rotate-45 after:left-1/2 after:-translate-x-[6.25rem] overflow-hidden" />
      </div> */}
      <div className="border-theme-500 grid grid-cols-4 gap-4 rounded-lg border-2 bg-white p-4 font-semibold">
        <div className="col-span-full flex items-center justify-center gap-2 rounded border-2 border-neutral-500 bg-neutral-100 p-2 text-lg font-bold text-neutral-700">
          <PiSteeringWheel />
          <span>Driver</span>
        </div>
        <div className="col-span-2" />
        {seatsArray.map((seat) => (
          <React.Fragment key={seat}>
            <Seat
              status={getSeatStatus(seat)}
              seat={seat}
              onSeatSelection={onSeatSelection}
            />
            {seat % 3 === 0 ? <div /> : null}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}
