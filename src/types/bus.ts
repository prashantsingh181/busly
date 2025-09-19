import type { CityCode } from "../data/city";

export interface Bus {
  id: string;
  name: string;
  type: string; // TODO: turn this into enum
  totalSeats: number;
  img: string;
  routeIds: string[];
}

export interface BookedSeat {
  seatNo: number;
  from: CityCode;
  to: CityCode;
}

export interface Route {
  id: string;
  name: string;
  stops: BusStop[];
}

export interface BusStop {
  city: CityCode;
  arrival: string | null;
  departure: string | null;
  fare: number;
}

export interface BusWithRoute extends Bus {
  routeInfo: { from: CityCode; to: CityCode; route: Route };
}
