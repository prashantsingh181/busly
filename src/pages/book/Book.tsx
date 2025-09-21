import { Navigate, useNavigate, useSearchParams } from "react-router";
import { getPricePerSeat, getRouteByRouteId } from "@/data/busRoute";
import { getCityByCityCode } from "@/data/city";
import BusSeats from "./components/BusSeats";
import {
  FaArrowRightLong,
  FaCircleChevronLeft,
  FaCircleChevronRight,
  FaTicket,
} from "react-icons/fa6";
import SelectedBusAside from "@/components/common/SelectedBusAside";
import { getBusByBusId } from "@/data/bus";
import { format } from "date-fns";
import StepperComponent from "@/components/common/StepperComponent";
import useBooking from "./hooks/useBooking";
import { formatPrice } from "@/utils/formatUtils";
import PassengerInformationForm from "./components/PassengerInformationForm";
import ReviewBooking from "./components/ReviewBooking";
import { useTicketsInfo } from "@/context/bus-details/TicketInfoContext";
import { isTodayOrBefore } from "@/utils/dateUtils";
import uuid4 from "uuid4";
import { useLoginInfo } from "@/context/login-details/LoginInfoContext";
import type { Ticket } from "@/types/tickets";
import { useCallback, useState } from "react";
import LoginModal from "./components/LoginModal";

export default function Book() {
  const [searchParams] = useSearchParams();
  const { isLoggedIn, userInfo } = useLoginInfo();
  const { getBookedSeats, bookTicket } = useTicketsInfo();
  const [showLogin, setShowLogin] = useState(false);
  const navigate = useNavigate();
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

  const hideModal = useCallback(() => {
    setShowLogin(false);
  }, []);

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
  const isOldDate = isTodayOrBefore(date);

  if (!bus || !route || !fromCity || !toCity || isOldDate) {
    return <Navigate to="/" />;
  }

  const bookedSeats = getBookedSeats(bus.id, from, to, date);
  const pricePerSeat = getPricePerSeat(route, from, to);
  const price = selectedSeats.length * pricePerSeat;

  const busWithRoute = {
    ...bus,
    routeInfo: { from, to, route },
  };

  function handleBookTicket() {
    if (!isLoggedIn || !userInfo) {
      return setShowLogin(true);
    }
    if (!busId || !from || !to || !routeId || !date) return;
    const ticketId = uuid4();
    const ticket: Ticket = {
      ticketId,
      busId,
      from,
      to,
      routeId,
      userId: userInfo.id,
      date,
      email: form.values.email,
      mobileNumber: form.values.mobileNumber,
      bookedSeats: Object.entries(form.values.passengers).map(
        ([key, value]) => ({
          seatNo: parseInt(key.replace("seat_", "")),
          passengerName: value.name,
          passengerAge: parseInt(value.age),
        }),
      ),
    };
    bookTicket(ticket);
    navigate(`/ticket/${ticketId}?showMessage=true`);
  }

  let currentComponent;
  switch (currentStep) {
    case 1:
      currentComponent = (
        <BusSeats
          bus={bus}
          bookedSeatNos={bookedSeats}
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
    <main className="main-padding-top bg-theme-100 bg-cover bg-center bg-no-repeat pb-4">
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
        <div className="fixed right-0 bottom-0 left-0 z-50 flex items-center justify-between gap-4 border-t border-dashed border-neutral-200 bg-white px-3 py-2 sm:px-6 sm:py-4">
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
            {currentStep === bookingSteps.length && (
              <button
                className="primary-button flex gap-2 p-2"
                onClick={handleBookTicket}
              >
                <FaTicket />
                <span>Book Ticket</span>
              </button>
            )}
          </div>
        </div>
      )}
      <LoginModal show={showLogin} hideModal={hideModal} />
    </main>
  );
}
