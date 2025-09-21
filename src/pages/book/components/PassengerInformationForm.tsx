import InputWithLabel from "@/components/common/InputWithLabel";
import type { PassengerFormType } from "../hooks/useBooking";
import Seat from "./Seat";
import React from "react";

interface PassengerInformationProps {
  selectedSeats: number[];
  form: PassengerFormType;
}

export default function PassengerInformationForm({
  selectedSeats,
  form,
}: Readonly<PassengerInformationProps>) {
  return (
    <div className="card flex flex-col gap-4 p-6">
      <h2 className="font-poppins text-textPrimary text-base font-semibold md:text-lg">
        Contact Details:
      </h2>
      <div className="grid grid-cols-2 gap-3">
        <InputWithLabel
          label="Mobile Number"
          type="text"
          placeholder="Mobile Number"
          required
          id="mobileNumber"
          name="mobileNumber"
          onChange={form.handleChange}
          errors={
            form.submitCount > 0 && form.errors.mobileNumber
              ? form.errors.mobileNumber
              : ""
          }
          value={form.values.mobileNumber}
        />
        <InputWithLabel
          label="Email"
          type="text"
          placeholder="Email"
          required
          id="email"
          name="email"
          onChange={form.handleChange}
          errors={
            form.submitCount > 0 && form.errors.email ? form.errors.email : ""
          }
          value={form.values.email}
        />
      </div>

      <hr className="border-b border-neutral-200" />

      <h2 className="font-poppins text-textPrimary text-base font-semibold md:text-lg">
        Passenger{selectedSeats.length > 1 ? "s" : ""} Information:
      </h2>

      {selectedSeats.map((seat, index) => (
        <React.Fragment key={seat}>
          {index !== 0 && <hr className="border-b-0.5 border-neutral-200" />}

          <div className="grid grid-cols-[auto_1fr] gap-3 sm:grid-cols-[auto_1fr_1fr]">
            <div className="row-span-2 sm:row-span-1">
              <span className="input-label">Seat No:</span>
              <Seat seat={seat} status="selected" />
            </div>
            <InputWithLabel
              label="Full Name"
              type="text"
              placeholder="Full Name"
              required
              id={`passengers.seat_${seat}.name`}
              name={`passengers.seat_${seat}.name`}
              onChange={form.handleChange}
              errors={
                form.submitCount > 0 && form.errors.passengers?.[`seat_${seat}`]
                  ? form.errors.passengers[`seat_${seat}`]?.name
                  : ""
              }
              value={form.values.passengers[`seat_${seat}`].name}
            />
            <InputWithLabel
              label="Age"
              type="text"
              placeholder="Age"
              required
              id={`passengers.seat_${seat}.age`}
              name={`passengers.seat_${seat}.age`}
              onChange={form.handleChange}
              errors={
                form.submitCount > 0 && form.errors.passengers?.[`seat_${seat}`]
                  ? form.errors.passengers[`seat_${seat}`]?.age
                  : ""
              }
              value={form.values.passengers[`seat_${seat}`].age}
            />
          </div>
        </React.Fragment>
      ))}
    </div>
  );
}
