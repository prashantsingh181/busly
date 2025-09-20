export interface Bus {
  id: string;
  name: string;
  type: string; // TODO: turn this into enum
  totalSeats: number;
  img: string;
  description: string;
  routeIds: string[];
}

export interface BookedSeat {
  seatNo: number;
  from: string;
  to: string;
}

export interface Route {
  id: string;
  name: string;
  stops: BusStop[];
}

export interface BusStop {
  city: string;
  arrival: string | null;
  departure: string | null;
  fare: number;
}

export interface BusWithRoute extends Bus {
  routeInfo: { from: string; to: string; route: Route };
}

export interface BusWithBookedSeats extends Bus {
  bookedSeats: BookedSeat[];
}
