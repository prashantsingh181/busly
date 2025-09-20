import useCustomFormik from "@/hooks/useCustomFormik";
import { useCallback, useState } from "react";
import * as Yup from "yup";
import { bookingSteps } from "@/config/constants";
import type { FormikErrors, FormikProps } from "formik";

interface Passenger {
  name: string;
  age: string;
}
interface PassengerSchema {
  name: string;
  age: number;
}

export type PassengerFormType = FormikProps<{
  mobileNumber: string;
  email: string;
  passengers: Record<string, Passenger>;
}>;

export default function useBooking() {
  const [selectedSeats, setSelectedSeats] = useState<number[]>([]);
  const [currentStep, setCurrentStep] = useState(1);
  const [error, setError] = useState("");

  // Create initial values dynamically based on selected seats
  const createInitialValues = (seats: number[]) => {
    const passengers: Record<string, Passenger> = {};
    seats.forEach((seatNumber) => {
      passengers[`seat_${seatNumber}`] = {
        name: "",
        age: "",
      };
    });
    return { mobileNumber: "", email: "", passengers };
  };

  // preserve existing values when creating new initial values
  const createInitialValuesWithPreservation = (
    seats: number[],
    existingValues?: {
      mobileNumber: string;
      email: string;
      passengers: Record<string, Passenger>;
    },
  ) => {
    const passengers: Record<string, Passenger> = {};
    seats.forEach((seatNumber) => {
      const seatKey = `seat_${seatNumber}`;
      // Use existing values if available, otherwise use empty defaults
      passengers[seatKey] = existingValues?.passengers?.[seatKey] || {
        name: "",
        age: "",
      };
    });
    return {
      mobileNumber: existingValues?.mobileNumber ?? "",
      email: existingValues?.email ?? "",
      passengers,
    };
  };

  // Create validation schema dynamically
  const createValidationSchema = (seats: number[]) => {
    const passengersSchema: Record<
      string,
      Yup.ObjectSchema<PassengerSchema>
    > = {};
    seats.forEach((seatNumber) => {
      passengersSchema[`seat_${seatNumber}`] = Yup.object({
        name: Yup.string()
          .min(2, "Name must be at least 2 characters")
          .max(50, "Name must be less than 50 characters")
          .matches(/^[a-zA-Z\s]+$/, "Name can only contain letters and spaces")
          .required("Name is required"),
        age: Yup.number()
          .typeError("Please enter a valid number")
          .min(1, "Age must be at least 1")
          .max(120, "Age must be less than 120")
          .integer("Age must be a whole number")
          .required("Age is required"),
      });
    });

    return Yup.object({
      mobileNumber: Yup.string()
        .required("Mobile number is required")
        .matches(/^\+?[1-9]\d{9}$/, "Please enter a valid mobile number"),
      email: Yup.string()
        .required("Email is required")
        .email("PLease enter a valid email"),
      passengers: Yup.object(passengersSchema),
    });
  };

  const form = useCustomFormik({
    enableReinitialize: false,
    initialValues: createInitialValues(selectedSeats),
    validationSchema: createValidationSchema(selectedSeats),
    onSubmit: () => {},
  });

  // Function to update form when seats change
  const updateFormForSeats = useCallback(
    (newSeats: number[]) => {
      // Preserve existing form values
      const newInitialValues = createInitialValuesWithPreservation(
        newSeats,
        form.values,
      );

      // Update form values manually
      form.setValues(newInitialValues);

      // Clear errors for removed seats and validate new structure
      const newErrors: FormikErrors<PassengerFormType["values"]["passengers"]> =
        {};
      if (form.errors.passengers) {
        Object.keys(form.errors.passengers).forEach((seatKey) => {
          const seatNumber = parseInt(seatKey.replace("seat_", ""));
          if (newSeats.includes(seatNumber)) {
            newErrors[seatKey] = form.errors.passengers![seatKey];
          }
        });
      }
      form.setErrors({
        mobileNumber: form.errors.mobileNumber,
        email: form.errors.email,
        passengers: newErrors,
      });
    },
    [form],
  );

  function handleSeatSelection(seatNo: number) {
    const isPresent = selectedSeats.includes(seatNo);
    let newState;
    if (isPresent) {
      newState = selectedSeats.filter((seat) => seat !== seatNo);
    } else {
      newState = [...selectedSeats, seatNo];
    }

    setSelectedSeats(newState);
    updateFormForSeats(newState);
  }

  const handleNext = useCallback(() => {
    if (currentStep === 1 && selectedSeats.length === 0) {
      setError("Please select some seats first!");
      return;
    } else if (currentStep === 2 && Object.keys(form.errors).length > 0) {
      form.handleSubmit();
      setError("Please fill out all the required fields!");
      return;
    }
    setCurrentStep((prevCurrentStep) =>
      Math.min(bookingSteps.length, prevCurrentStep + 1),
    );
  }, [currentStep, selectedSeats.length, form]);

  const handlePrev = useCallback(() => {
    setError("");
    setCurrentStep((prevCurrentStep) => Math.max(1, prevCurrentStep - 1));
  }, []);

  return {
    selectedSeats,
    handleSeatSelection,
    bookingSteps,
    currentStep,
    handleNext,
    handlePrev,
    form,
    error,
  };
}
