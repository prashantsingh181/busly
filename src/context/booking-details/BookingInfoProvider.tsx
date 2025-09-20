import { BOOKING_DETAIL_STORAGE_KEY } from "../../config/configKeys";
import useLocalStorage from "../../hooks/useLocalStorage";
import { BookingInfoContext } from "./BookingInfoContext";

interface BookingInfoProviderProps {
  children: React.ReactNode;
}

export interface BookingInfo {
  busId: string;
  routeId: string;
  from: string;
  to: string;
  date: string;
}

export default function BookingInfoProvider({
  children,
}: Readonly<BookingInfoProviderProps>) {
  const [bookingInfo, setBookingInfo] = useLocalStorage<BookingInfo | null>(
    BOOKING_DETAIL_STORAGE_KEY,
    null
  );

  return (
    <BookingInfoContext
      value={{
        bookingInfo,
        setBookingInfo,
      }}
    >
      {children}
    </BookingInfoContext>
  );
}
