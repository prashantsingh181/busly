export interface Ticket {
  ticketId: string;
  busId: string;
  from: string;
  to: string;
  date: string;
  bookedSeats: BookedSeat[];
}

interface BookedSeat {
  seatNo: number;
  passengerName: string;
  passengerAge: number;
  //   gender: "Male" | "Female";
}
