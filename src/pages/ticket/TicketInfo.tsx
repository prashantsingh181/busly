import { useTicketsInfo } from "@/context/bus-details/TicketInfoContext";
import { useParams, useSearchParams } from "react-router";
import NotFound from "../fallback/NotFound";
import { useLoginInfo } from "@/context/login-details/LoginInfoContext";
import Section from "@/components/common/Section";
import Seat from "../book/components/Seat";
import { getCityByCityCode } from "@/data/city";
import { getPricePerSeat, getRouteByRouteId } from "@/data/busRoute";
import { formatPrice } from "@/utils/formatUtils";
import KeyValuePair from "@/components/common/KeyValuePair";
import { format } from "date-fns";
import RouteMap from "@/components/common/RouteMap";
import type { BusStop } from "@/types/bus";
import { getBusByBusId } from "@/data/bus";
import Toast from "@/components/layout/Toast";

function TicketInfo() {
  const { ticketId } = useParams();
  const { userInfo } = useLoginInfo();
  const { getTicketByTicketId } = useTicketsInfo();
  const [searchParams] = useSearchParams();
  const showMessage = searchParams.get("showMessage");
  let ticket;
  let sameUser = false;
  if (ticketId) {
    ticket = getTicketByTicketId(ticketId);
    sameUser = userInfo!.id === ticket?.userId;
  }

  if (!ticket || !sameUser) return <NotFound />;

  const fromCity = getCityByCityCode(ticket.from);
  const toCity = getCityByCityCode(ticket.to);
  const route = getRouteByRouteId(ticket.routeId);
  const bus = getBusByBusId(ticket.busId);
  if (!fromCity || !toCity || !route || !bus) return <NotFound />;

  const pricePerSeat = getPricePerSeat(route, ticket.from, ticket.to);
  const totalPrice = pricePerSeat * ticket.bookedSeats.length;
  const normalPrice = totalPrice / 1.18;
  const seats = ticket.bookedSeats.map((seat) => (
    <div key={seat.seatNo} className="flex gap-3">
      <Seat status="selected" seat={seat.seatNo} />
      <div>
        <KeyValuePair keyString="Name" value={seat.passengerName} />
        <KeyValuePair keyString="Age" value={String(seat.passengerAge)} />
      </div>
    </div>
  ));
  const { startStop, endStop, startIndex, endIndex } = route.stops.reduce(
    (acc, stop, index) => {
      if (stop.city === ticket.from) {
        return { ...acc, startStop: stop, startIndex: index };
      } else if (stop.city === ticket.to) {
        return { ...acc, endStop: stop, endIndex: index };
      } else {
        return acc;
      }
    },
    {
      startStop: null as BusStop | null,
      endStop: null as BusStop | null,
      startIndex: null as number | null,
      endIndex: null as number | null,
    },
  );
  return (
    <main className="from-theme-400 to-theme-100 main-padding-top grid min-h-screen place-items-center bg-gradient-to-br">
      {showMessage && <Toast message="Ticket Booked!" />}
      <div className="custom-container py-10">
        <div className="card mx-auto flex max-w-[40rem] flex-col gap-4 p-6">
          <Section heading="Ticket Details:">
            <KeyValuePair
              keyString="Ticket No."
              value={ticket.ticketId.split("-")[0]}
            />
          </Section>
          <hr className="border-b border-neutral-200" />
          <Section heading="Journey Details:">
            <KeyValuePair
              keyString="Date"
              value={format(new Date(ticket.date), "dd MMMM yyyy")}
            />
            <KeyValuePair keyString="Bus Name" value={bus.name} />
            {startStop && (
              <KeyValuePair
                keyString="From"
                value={`${fromCity.name} (${startStop.departure})`}
              />
            )}
            {endStop && (
              <KeyValuePair
                keyString="To"
                value={`${toCity.name} (${endStop.arrival})`}
              />
            )}
            <div className="font-medium text-neutral-800/75">Bus Route:</div>
            <RouteMap
              route={route}
              startIndex={startIndex}
              endIndex={endIndex}
            />
          </Section>
          <hr className="border-b border-neutral-200" />

          <Section heading="Your Contact Details:">
            <div className="flex flex-col gap-3 text-sm sm:text-base">
              <KeyValuePair
                keyString="Mobile Number"
                value={ticket.mobileNumber}
              />
              <KeyValuePair keyString="Email" value={ticket.email} />
            </div>
          </Section>

          <hr className="border-b border-neutral-200" />

          <Section
            heading={`Passenger${seats.length > 1 ? "s" : ""} Information:`}
          >
            <div className="flex flex-col gap-4 text-sm sm:text-base">
              {seats}
            </div>
          </Section>

          <hr className="border-b border-neutral-200" />

          <Section
            heading={` Fare Breakup (${seats.length} seat${seats.length > 1 ? "s" : ""}):`}
          >
            <div className="flex flex-col gap-3 text-sm sm:text-base">
              <div className="flex justify-between gap-2">
                <span className="font-medium text-neutral-800/75">
                  Base Fare:
                </span>
                <span className="text-textSecondary font-semibold">
                  {formatPrice(normalPrice)}
                </span>
              </div>
              <div className="flex justify-between gap-2">
                <span className="font-medium text-neutral-800/75">GST:</span>
                <span className="text-textSecondary font-semibold">
                  {formatPrice(totalPrice - normalPrice)}
                </span>
              </div>
              <hr className="border-b-0.5 border-neutral-200" />
              <div className="flex justify-between gap-2">
                <span className="text-lg font-medium text-neutral-800/75">
                  Total:
                </span>
                <span className="text-theme-600 text-lg font-semibold">
                  {formatPrice(totalPrice)}
                </span>
              </div>
            </div>
          </Section>
        </div>
      </div>
    </main>
  );
}

export default TicketInfo;
