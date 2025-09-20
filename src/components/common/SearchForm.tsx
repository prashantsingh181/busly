import { useNavigate } from "react-router";
import { cities } from "../../data/city";
import { useMemo } from "react";
import useCustomFormik from "../../hooks/useCustomFormik";
import type { SearchForm } from "../../types/form";
import * as Yup from "yup";
import Select from "./Select";
import { LiaExchangeAltSolid } from "react-icons/lia";
import { BsSearch } from "react-icons/bs";
import Flatpickr from "react-flatpickr";

interface SearchFormProps {
  isHorizontal?: boolean;
  initialFrom?: string | null;
  initialTo?: string | null;
  initialDate?: string | null;
}

export default function SearchForm({
  isHorizontal = false,
  initialFrom,
  initialTo,
  initialDate,
}: Readonly<SearchFormProps>) {
  const navigate = useNavigate();
  const today = new Date().toISOString();
  const cityOptions = useMemo(
    () => cities.map((city) => ({ label: city.name, value: city.code })),
    []
  );
  const formClassName = `relative p-4 bg-theme-200 shadow-xl rounded-xl border-2 md:border-4 border-theme-500 grid gap-x-4 gap-y-1 md:gap-y-2 
    ${
      isHorizontal
        ? "grid-cols-1 md:grid-cols-[1fr_auto_1fr] lg:grid-cols-[1fr_auto_1fr_1fr] lg:pb-7"
        : "md:grid-cols-[1fr_auto_1fr] grid-cols-1"
    }`;

  const form = useCustomFormik<SearchForm>({
    initialValues: {
      from: initialFrom ?? "",
      to: initialTo ?? "",
      date: initialDate ?? today,
    },
    validationSchema: Yup.object({
      from: Yup.string().required("Please select from field"),
      to: Yup.string().required("Please select to field"),
      date: Yup.string().required("Please select journey date"),
    }),
    onSubmit: (values) => {
      const searchParams = new URLSearchParams({ ...values });
      navigate(`/search?${searchParams.toString()}`);
    },
  });

  function handleInterChangeCities() {
    form.setValues((form) => ({ ...form, from: form.to, to: form.from }));
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        form.handleSubmit();
      }}
      className={formClassName}
    >
      {/* dropdown to select from city */}
      <div className="pb-4 md:pb-5 relative">
        <Select
          options={cityOptions}
          name="from"
          value={
            cityOptions.find((city) => city.value === form.values.from) ?? null
          }
          label="From City"
          onChange={(city) => form.setFieldValue("from", city.value)}
        />
        {form.errors.from ? (
          <p
            aria-live="polite"
            data-name="error-from"
            className="text-xs md:text-sm text-red-400 absolute bottom-0 left-0"
          >
            {form.errors.from}
          </p>
        ) : null}
      </div>

      <button
        type="button"
        className="rounded-full bg-white shadow-lg hover-scale p-3 text-xl md:self-end mb-5 md:inline hidden"
        onClick={handleInterChangeCities}
      >
        <LiaExchangeAltSolid />
      </button>

      {/* dropdown to select to city */}
      <div className="pb-4 md:pb-5 relative">
        <Select
          options={cityOptions}
          name="to"
          value={
            cityOptions.find((city) => city.value === form.values.to) ?? null
          }
          label="To City"
          onChange={(city) => form.setFieldValue("to", city.value)}
        />
        {form.errors.to ? (
          <p
            aria-live="polite"
            data-name="error-to"
            className="text-xs md:text-sm text-red-400 absolute bottom-0 left-0"
          >
            {form.errors.to}
          </p>
        ) : null}
      </div>

      {/* calendar to pick journey date */}
      <div
        className={`${
          isHorizontal ? "col-span-full lg:col-span-1" : "col-span-full"
        } pb-4 md:pb-5 relative`}
      >
        <span className="input-label">Journey Date</span>
        <Flatpickr
          id="journeyDateInput"
          className="input-text"
          options={{
            dateFormat: "d M, Y",
            minDate: new Date(),
          }}
          placeholder="Select journey date"
          name="date"
          onChange={(date) => form.setFieldValue("date", date[0].toISOString())}
          value={form.values.date ?? undefined}
        />
        {form.touched.date && form.errors.date ? (
          <p
            aria-live="polite"
            className="text-xs md:text-sm text-red-400 absolute bottom-0 left-0"
          >
            {form.errors.date}
          </p>
        ) : null}
      </div>

      <button
        type="submit"
        className={`primary-button flex gap-2 rounded-full justify-self-center col-span-full ${
          isHorizontal
            ? "lg:absolute lg:bottom-0 lg:left-1/2 lg:-translate-x-1/2 lg:translate-y-1/2"
            : ""
        }`}
      >
        <BsSearch />
        <span>Search Buses</span>
      </button>
    </form>
  );
}
