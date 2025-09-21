import { formatPrice } from "@/utils/formatUtils";
import type { PassengerFormType } from "../hooks/useBooking";
import Seat from "./Seat";

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
          <div className="space-x-2">
            <span className="font-medium text-neutral-800/75">Name:</span>
            <span className="text-textSecondary font-semibold">
              {value.name}
            </span>
          </div>
          <div className="space-x-2">
            <span className="font-medium text-neutral-800/75">Age:</span>
            <span className="text-textSecondary font-semibold">
              {value.age}
            </span>
          </div>
        </div>
      </div>
    ),
  );
  return (
    <div className="card flex flex-col gap-4 p-6">
      <Section heading="Your Contact Details:">
        <div className="flex flex-col gap-3 text-sm sm:text-base">
          <div className="space-x-2">
            <span className="font-medium text-neutral-800/75">
              Mobile Number:
            </span>
            <span className="text-textSecondary font-semibold">
              {passengerDetails.mobileNumber}
            </span>
          </div>
          <div className="space-x-2">
            <span className="font-medium text-neutral-800/75">Email:</span>
            <span className="text-textSecondary font-semibold">
              {passengerDetails.email}
            </span>
          </div>
        </div>
      </Section>

      <hr className="border-b border-neutral-200" />

      <Section heading={`Passenger${seats.length > 1 && "s"} Information:`}>
        <div className="flex flex-col gap-4 text-sm sm:text-base">{seats}</div>
      </Section>

      <hr className="border-b border-neutral-200" />

      <Section
        heading={` Fare Breakup (${seats.length} seat${seats.length > 1 && "s"}):`}
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

interface SectionProps {
  heading: string;
  children?: React.ReactNode;
}

function Section({ heading, children }: Readonly<SectionProps>) {
  return (
    <>
      <h2 className="font-poppins text-textPrimary text-base font-semibold md:text-lg">
        {heading}
      </h2>
      {children}
    </>
  );
}
