import { createContext, useContext } from "react";
import type { BookingInfo } from "./BookingInfoProvider";

interface BookingInfoContextType {
  bookingInfo: BookingInfo | null;
  setBookingInfo: React.Dispatch<React.SetStateAction<BookingInfo | null>>;
}

export const BookingInfoContext = createContext<BookingInfoContextType | null>(
  null
);

export const useBookingInfo = () => {
  const context = useContext(BookingInfoContext);
  // if context is used outside provider then throw error to let the developer know
  if (context === null) {
    throw new Error("useBookingInfo should be used inside BookingInfoContext");
  }
  return context;
};
