import KeyValuePair from "@/components/common/KeyValuePair";
import { getBusByBusId } from "@/data/bus";
import { getPricePerSeat, getRouteByRouteId } from "@/data/busRoute";
import { getCityByCityCode } from "@/data/city";
import type { Ticket } from "@/types/tickets";
import { formatPrice } from "@/utils/formatUtils";
import { format } from "date-fns";
import { FaMoneyBill1Wave } from "react-icons/fa6";
import {
  IoArrowForward,
  IoCalendarOutline,
  IoLocationOutline,
  IoPeopleOutline,
  IoTicketOutline,
} from "react-icons/io5";
import { Link } from "react-router";

interface TicketProps {
  ticket: Ticket;
}

function TicketCard({ ticket }: Readonly<TicketProps>) {
  const fromCity = getCityByCityCode(ticket.from);
  const toCity = getCityByCityCode(ticket.to);
  const route = getRouteByRouteId(ticket.routeId);
  const bus = getBusByBusId(ticket.busId);

  if (!route || !bus || !fromCity || !toCity) {
    return (
      <div className="card border border-red-200 bg-red-50 p-4 text-red-700">
        <div className="flex items-center gap-2">
          <IoTicketOutline className="h-5 w-5" />
          <span className="font-medium">Unable to load ticket details</span>
        </div>
        <p className="mt-1 text-sm text-red-600">
          Some ticket information is missing or invalid.
        </p>
      </div>
    );
  }

  const pricePerSeat = getPricePerSeat(route, ticket.from, ticket.to);
  const totalPrice = pricePerSeat * ticket.bookedSeats.length;
  const seatCount = ticket.bookedSeats.length;
  const seatNumbers = ticket.bookedSeats.map((seat) => seat.seatNo).join(", ");

  return (
    <div
      className={`card relative grid grid-cols-[0.25rem_1fr] items-stretch overflow-hidden transition-all duration-200 hover:scale-[1.02] hover:shadow-xl`}
    >
      <div className="from-theme-600 to-theme-800 bg-gradient-to-b" />

      <div className="p-6">
        <div className="mb-4 flex flex-col justify-between gap-2 md:flex-row md:items-center">
          <Link
            to={`/ticket/${ticket.ticketId}`}
            className="text-theme-700 flex items-center gap-2 after:absolute after:inset-0 after:content-['']"
          >
            <IoTicketOutline className="h-5 w-5" />
            <span className="text-lg font-semibold">
              #{ticket.ticketId.split("-")[0]}
            </span>
          </Link>
          <div className="flex items-center gap-1 text-sm text-neutral-600">
            <IoCalendarOutline className="h-4 w-4" />
            <time dateTime={ticket.date}>
              {format(new Date(ticket.date), "dd MMM yyyy")}
            </time>
          </div>
        </div>

        {/* Route Information */}
        <div className="mb-4">
          <div className="mb-2 flex items-center gap-3">
            <div className="flex flex-1 items-center gap-2">
              <IoLocationOutline className="h-4 w-4 text-green-600" />
              <span className="font-medium text-neutral-900">
                {fromCity.name}
              </span>
            </div>
            <IoArrowForward className="h-4 w-4 flex-shrink-0 text-neutral-400" />
            <div className="flex flex-1 items-center justify-end gap-2">
              <span className="font-medium text-neutral-900">
                {toCity.name}
              </span>
              <IoLocationOutline className="h-4 w-4 text-red-600" />
            </div>
          </div>
          <div className="text-center text-sm text-neutral-600">{bus.name}</div>
        </div>

        {/* Ticket Details Grid */}
        <div className="grid grid-cols-1 gap-4 border-t border-neutral-200 pt-4 sm:grid-cols-2">
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <FaMoneyBill1Wave className="h-4 w-4 text-neutral-500" />
              <KeyValuePair
                keyString="Total Price"
                value={formatPrice(totalPrice)}
              />
            </div>
            <div className="flex items-center gap-2">
              <FaMoneyBill1Wave className="h-4 w-4 text-neutral-500" />
              <KeyValuePair
                keyString="Price per Seat"
                value={formatPrice(pricePerSeat)}
              />
            </div>
          </div>
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <IoPeopleOutline className="h-4 w-4 text-neutral-500" />
              <KeyValuePair
                keyString={`Seat${seatCount > 1 ? "s" : ""}`}
                value={`${seatCount} seat${seatCount > 1 ? "s" : ""}`}
              />
            </div>
            <div className="flex items-center gap-2">
              <IoPeopleOutline className="h-4 w-4 text-neutral-500" />
              <KeyValuePair keyString="Seat Numbers" value={seatNumbers} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TicketCard;
