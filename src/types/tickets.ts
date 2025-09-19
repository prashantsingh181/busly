import type { CityCode } from "../data/city";

export interface Ticket {
  ticketId: string;
  busId: string;
  from: CityCode;
  to: CityCode;
  date: string;
  bookedSeats: BookedSeat[];
}

interface BookedSeat {
  seatNo: number;
  passengerName: string;
  passengerAge: number;
//   gender: "Male" | "Female";
}
