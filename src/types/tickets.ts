export interface Ticket {
  ticketId: string;
  userId: number;
  busId: string;
  from: string;
  to: string;
  date: string;
  routeId: string;
  mobileNumber: string;
  email: string;
  bookedSeats: BookedSeat[];
}

interface BookedSeat {
  seatNo: number;
  passengerName: string;
  passengerAge: number;
}
