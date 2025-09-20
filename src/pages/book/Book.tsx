import { Navigate, useSearchParams } from "react-router";
import { getRouteByRouteId } from "../../data/busRoute";
import { getCityByCityCode } from "../../data/city";
import BusSeats from "./components/BusSeats";
import { FaArrowRightLong } from "react-icons/fa6";
import SelectedBusAside from "../search/components/SelectedBusAside";
import { useBusesInfo } from "../../context/bus-details/BusesInfoContext";
import { format } from "date-fns";
import StepperComponent from "../../components/common/StepperComponent";

const stepperSteps = [
  { position: 1, title: "Seat Selection", path: "" },
  { position: 2, title: "Passenger Information", path: "" },
  { position: 3, title: "Review Booking", path: "" },
];

export default function Book() {
  const [searchParams] = useSearchParams();
  const { getBusByBusId } = useBusesInfo();

  const busId = searchParams.get("busId");
  const routeId = searchParams.get("routeId");
  const from = searchParams.get("from");
  const to = searchParams.get("to");
  const date = searchParams.get("date");

  if (!busId || !routeId || !from || !to || !date) {
    return <Navigate to="/" />;
  }

  const bus = getBusByBusId(busId);
  const route = getRouteByRouteId(routeId);
  const fromCity = getCityByCityCode(from);
  const toCity = getCityByCityCode(to);

  if (!bus || !route || !fromCity || !toCity || !date) {
    return <Navigate to="/" />;
  }

  const cityIndex = route?.stops.reduce<Record<string, number>>(
    (acc, stop, index) => ({ ...acc, [stop.city]: index }),
    {}
  );
  const fromCityIndex = cityIndex[fromCity.code];
  const toCityIndex = cityIndex[toCity.code];

  const busWithRoute = {
    ...bus,
    routeInfo: { from, to, route },
  };

  // getting bus with actual seats booked for the current stop selection
  const busWithBookedSeats = {
    ...bus,
    bookedSeats: bus.bookedSeats.filter(
      (seat) =>
        toCityIndex >= cityIndex[seat.from] &&
        fromCityIndex > cityIndex[seat.from]
    ),
  };

  return (
    <main className="main-margin-top bg-theme-100">
      <div className="custom-container py-10 flex flex-col gap-8">
        <div className="font-semibold text-textSecondary font-poppins flex gap-6 items-center">
          <div className="flex gap-2 items-center">
            <span>{fromCity.name}</span>
            <FaArrowRightLong className="text-neutral-400" />
            <span>{toCity.name}</span>
          </div>
          <div className="self-stretch w-0.5 bg-neutral-400" />
          <div>{format(new Date(date), "dd MMMM yyyy")}</div>
        </div>
        <StepperComponent steps={stepperSteps} currentStep={1} />
        <div className="grid grid-cols-2 gap-6 mt-6 items-start">
          <BusSeats bus={busWithBookedSeats} selectedSeatNos={[5, 6]} />
          <div className="card p-6">
            <SelectedBusAside
              bus={busWithRoute}
              date={date}
              showButton={false}
            />
          </div>
        </div>
      </div>
    </main>
  );
}
