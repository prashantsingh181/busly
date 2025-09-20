import { Navigate, useSearchParams } from "react-router";
import { getRouteByRouteId } from "@/data/busRoute";
import { getCityByCityCode } from "@/data/city";
import BusSeats from "./components/BusSeats";
import {
  FaArrowRightLong,
  FaCircleChevronLeft,
  FaCircleChevronRight,
} from "react-icons/fa6";
import SelectedBusAside from "@/components/common/SelectedBusAside";
import { useBusesInfo } from "@/context/bus-details/BusesInfoContext";
import { format } from "date-fns";
import StepperComponent from "@/components/common/StepperComponent";
import useBooking from "./hooks/useBooking";
import { formatPrice } from "@/utils/formatUtils";
import PassengerInformationForm from "./components/PassengerInformationForm";
import ReviewBooking from "./components/ReviewBooking";

export default function Book() {
  const [searchParams] = useSearchParams();
  const { getBusByBusId } = useBusesInfo();
  const {
    bookingSteps,
    selectedSeats,
    handleSeatSelection,
    currentStep,
    handleNext,
    handlePrev,
    error,
    form,
  } = useBooking();

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
    {},
  );
  const fromCityIndex = cityIndex[fromCity.code];
  const toCityIndex = cityIndex[toCity.code];
  const pricePerSeat =
    route.stops[toCityIndex].fare - route.stops[fromCityIndex].fare;
  const price = selectedSeats.length * pricePerSeat;

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
        fromCityIndex > cityIndex[seat.from],
    ),
  };

  let currentComponent;
  switch (currentStep) {
    case 1:
      currentComponent = (
        <BusSeats
          bus={busWithBookedSeats}
          selectedSeatNos={selectedSeats}
          onSeatSelection={handleSeatSelection}
        />
      );
      break;
    case 2:
      currentComponent = (
        <PassengerInformationForm form={form} selectedSeats={selectedSeats} />
      );
      break;
    case 3:
      currentComponent = (
        <ReviewBooking passengerDetails={form.values} price={price} />
      );
      break;
  }

  return (
    <main className="main-padding-top bg-[url('/blob-scene-haikei.png')] bg-no-repeat bg-cover bg-center pb-4">
      <div className="custom-container flex flex-col gap-8 py-10">
        <div className="text-textSecondary font-poppins flex flex-col items-center gap-6 text-base font-semibold sm:flex-row md:text-lg">
          <div className="flex items-center gap-2">
            <span>{fromCity.name}</span>
            <FaArrowRightLong className="text-neutral-400" />
            <span>{toCity.name}</span>
          </div>
          <div className="hidden w-0.5 self-stretch bg-neutral-400 sm:inline" />
          <div>{format(new Date(date), "dd MMMM yyyy")}</div>
        </div>
        <StepperComponent steps={bookingSteps} currentStep={currentStep} />
        <div className="mt-6 grid grid-cols-1 items-start gap-6 md:grid-cols-2">
          {currentComponent}
          <div className="card p-6">
            <SelectedBusAside
              bus={busWithRoute}
              date={date}
              showButton={false}
            />
          </div>
        </div>
      </div>

      {/* details in bottom */}
      {selectedSeats.length > 0 && (
        <div className="fixed z-50 right-0 bottom-0 left-0 flex items-center justify-between gap-4 border-t border-dashed border-neutral-200 bg-white px-3 py-2 sm:px-6 sm:py-4">
          <div>
            {currentStep > 1 && (
              <button
                className="primary-button flex gap-2 p-2"
                onClick={handlePrev}
              >
                <FaCircleChevronLeft />
                <span>Previous</span>
              </button>
            )}
          </div>
          <div>
            {error && (
              <p
                aria-live="polite"
                data-name="error"
                className="text-xs text-red-400 md:text-sm"
              >
                {error}
              </p>
            )}
            <div className="flex flex-col items-center gap-2 sm:flex-row sm:gap-3">
              <span className="text-textSecondary text-sm font-medium sm:text-base">
                {selectedSeats.length} seats selected
              </span>
              <div className="space-x-2">
                <span className="text-theme-600 text-base font-bold sm:text-lg">
                  {formatPrice(price)}
                </span>
              </div>
            </div>
          </div>
          <div>
            {currentStep < bookingSteps.length && (
              <button
                className="primary-button flex gap-2 p-2"
                onClick={handleNext}
              >
                <span>Next</span>
                <FaCircleChevronRight />
              </button>
            )}
          </div>
        </div>
      )}
    </main>
  );
}
