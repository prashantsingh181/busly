import { TICKET_STORAGE_KEY } from "@/config/configKeys";
import useLocalStorage from "@/hooks/useLocalStorage";
import type { Ticket } from "@/types/tickets";
import { TicketInfoContext } from "./TicketInfoContext";
import { useLoginInfo } from "../login-details/LoginInfoContext";
import { isSameDay } from "date-fns";
import { doJourneysOverlap, getRouteByRouteId } from "@/data/busRoute";
import { tickets as demoTickets } from "@/data/ticket";

interface TicketInfoProviderProps {
  children: React.ReactNode;
}

export default function TicketsInfoProvider({
  children,
}: Readonly<TicketInfoProviderProps>) {
  const { userInfo } = useLoginInfo();
  const [storedTickets, setStoredTickets] = useLocalStorage<Ticket[]>(
    TICKET_STORAGE_KEY,
    [],
  );

  const tickets = [...storedTickets, ...demoTickets];

  const userTickets = tickets.filter(
    (ticket) => ticket.userId === userInfo?.id,
  );

  function bookTicket(ticket: Ticket) {
    setStoredTickets((prevTicket) => [...prevTicket, ticket]);
  }

  function getBookedSeats(
    busId: string,
    from: string,
    to: string,
    date: string,
  ) {
    const bookedSeats = tickets.reduce<number[]>((acc, ticket) => {
      const sameDay = isSameDay(new Date(ticket.date), new Date(date));
      const sameBus = ticket.busId === busId;
      if (!sameDay || !sameBus) return acc;

      const route = getRouteByRouteId(ticket.routeId);
      if (!route) return acc;

      const stopOverlap = doJourneysOverlap(
        route,
        from,
        to,
        ticket.from,
        ticket.to,
      );
      if (stopOverlap) {
        return [...acc, ...ticket.bookedSeats.map((seat) => seat.seatNo)];
      } else {
        return acc;
      }
    }, []);

    return bookedSeats;
  }

  return (
    <TicketInfoContext value={{ userTickets, getBookedSeats, bookTicket }}>
      {children}
    </TicketInfoContext>
  );
}
