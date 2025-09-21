import { formatPrice } from "@/utils/formatUtils";
import type { PassengerFormType } from "../hooks/useBooking";
import Seat from "./Seat";
import Section from "@/components/common/Section";
import KeyValuePair from "@/components/common/KeyValuePair";

interface ReviewBookingProps {
  passengerDetails: PassengerFormType["values"];
  price: number;
}

export default function ReviewBooking({
  passengerDetails,
  price,
}: Readonly<ReviewBookingProps>) {
  const normalPrice = price / 1.18;
  const seats = Object.entries(passengerDetails.passengers).map(
    ([key, value]) => (
      <div key={key} className="flex gap-3">
        <Seat status="selected" seat={Number(key.split("_")[1])} />
        <div>
          <KeyValuePair keyString="Name" value={value.name} />
          <KeyValuePair keyString="Age" value={value.age} />
        </div>
      </div>
    ),
  );
  return (
    <div className="card flex flex-col gap-4 p-6">
      <Section heading="Your Contact Details:">
        <div className="flex flex-col gap-3 text-sm sm:text-base">
          <KeyValuePair
            keyString="Mobile Number"
            value={passengerDetails.mobileNumber}
          />
          <KeyValuePair keyString="Email" value={passengerDetails.email} />
        </div>
      </Section>

      <hr className="border-b border-neutral-200" />

      <Section heading={`Passenger${seats.length > 1 ? "s" : ""} Information:`}>
        <div className="flex flex-col gap-4 text-sm sm:text-base">{seats}</div>
      </Section>

      <hr className="border-b border-neutral-200" />

      <Section
        heading={` Fare Breakup (${seats.length} seat${seats.length > 1 ? "s" : ""}):`}
      >
        <div className="flex flex-col gap-3 text-sm sm:text-base">
          <div className="flex justify-between gap-2">
            <span className="font-medium text-neutral-800/75">Base Fare:</span>
            <span className="text-textSecondary font-semibold">
              {formatPrice(normalPrice)}
            </span>
          </div>
          <div className="flex justify-between gap-2">
            <span className="font-medium text-neutral-800/75">GST:</span>
            <span className="text-textSecondary font-semibold">
              {formatPrice(price - normalPrice)}
            </span>
          </div>
          <hr className="border-b-0.5 border-neutral-200" />
          <div className="flex justify-between gap-2">
            <span className="text-lg font-medium text-neutral-800/75">
              Total:
            </span>
            <span className="text-theme-600 text-lg font-semibold">
              {formatPrice(price)}
            </span>
          </div>
        </div>
      </Section>
    </div>
  );
}
