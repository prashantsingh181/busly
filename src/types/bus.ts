import type { CityCode } from "../data/city";

export interface Bus {
  id: string;
  name: string;
  type: string; // TODO: turn this into enum
  totalSeats: number;
  routes: BusRoute[];
}

export interface BookedSeat {
  seatNo: number;
  from: CityCode;
  to: CityCode;
}

export interface BusRoute {
  from: CityCode;
  to: CityCode;
  departure: string;
  arrival: string;
  fare: number;
}
