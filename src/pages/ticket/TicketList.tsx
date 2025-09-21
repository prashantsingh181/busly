import TextWithIcon from "@/components/common/TextWithIcon";
import { useTicketsInfo } from "@/context/bus-details/TicketInfoContext";
import { TbTicketOff } from "react-icons/tb";
import TicketCard from "./components/TicketCard";

function TicketList() {
  const { userTickets } = useTicketsInfo();
  return (
    <main className="main-padding-top bg-theme-100 min-h-screen">
      <div className="custom-container relative py-10">
        <h2 className="section-heading relative mb-8">
          Your <span className="text-theme-700 italic">Tickets</span>
        </h2>
        {userTickets.length === 0 ? (
          <TextWithIcon
            textClassName="text-xl sm:text-3xl font-semibold"
            text="No Tickets Found!"
            icon={<TbTicketOff className="text-xl sm:text-3xl" />}
          />
        ) : (
          <div className="flex flex-col gap-6">
            {userTickets.map((ticket) => (
              <TicketCard key={ticket.ticketId} ticket={ticket} />
            ))}
          </div>
        )}
      </div>
    </main>
  );
}

export default TicketList;
