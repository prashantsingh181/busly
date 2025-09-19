import Select from "../../../components/common/Select";
import { LiaExchangeAltSolid } from "react-icons/lia";
import { BsSearch } from "react-icons/bs";
import useCustomFormik from "../../../hooks/useCustomFormik";
import * as Yup from "yup";
import { getCities } from "../../../data/city";
import { useMemo } from "react";

export default function Hero() {
  const cities = getCities();
  const cityOptions = useMemo(
    () => cities.map((city) => ({ label: city.name, value: city.code })),
    [cities]
  );

  const form = useCustomFormik({
    initialValues: { from: null, to: null },
    validationSchema: Yup.object({
      from: Yup.object({ label: Yup.string(), value: Yup.string() }).required(
        "Please select from field"
      ),
      to: Yup.object({ label: Yup.string(), value: Yup.string() }).required(
        "Please select to field"
      ),
    }),
    onSubmit: () => {},
  });

  function handleInterChangeCities() {
    form.setValues(({ from, to }) => ({ from: to, to: from }));
  }
  return (
    <section className="bg-white bg-[url('/home/heroBg.webp')] bg-contain bg-right-top bg-no-repeat">
      <div className="custom-container grid grid-cols-1 md:grid-cols-2 gap-6 place-items-center h-screen">
        <div className="flex flex-col gap-4 md:gap-8">
          <h2 className="text-2xl sm:text-4xl md:text-6xl text-neutral-600 text-center font-bold">
            Travel, enjoy and live a new and full life
          </h2>
          <form
            onSubmit={(e) => {
              e.preventDefault();
            }}
            className="p-2 md:p-4 bg-theme-100 shadow-xl rounded-xl border-2 md:border-4 border-theme-600 grid grid-cols-1 gap-4 md:grid-cols-[1fr_auto_1fr]"
          >
            <div className="pb-5 relative">
              <Select
                options={cityOptions}
                name="from"
                value={form.values.from}
                label="From City"
                onChange={(value) => form.setFieldValue("from", value)}
              />
              {form.errors.from ? (
                <p
                  aria-live="polite"
                  data-name="error-from"
                  className="text-sm text-red-400 absolute bottom-0 left-0"
                >
                  {form.errors.from}
                </p>
              ) : null}
            </div>
            <button
              type="button"
              className="rounded-full bg-white shadow-lg hover-scale p-3 text-xl self-end mb-5"
              onClick={handleInterChangeCities}
            >
              <LiaExchangeAltSolid />
            </button>
            <div className="pb-5 relative">
              <Select
                options={cityOptions}
                name="to"
                value={form.values.to}
                label="To City"
                onChange={(value) => form.setFieldValue("to", value)}
              />
              {form.errors.to ? (
                <p
                  aria-live="polite"
                  data-name="error-to"
                  className="text-sm text-red-400 absolute bottom-0 left-0"
                >
                  {form.errors.to}
                </p>
              ) : null}
            </div>

            <button className="primary-button md:col-span-3 flex gap-2 rounded-full justify-self-center">
              <BsSearch />
              <span>Search Buses</span>
            </button>
          </form>
        </div>

        <picture className="overflow-hidden w-full">
          <img
            src="/home/heroImage.png"
            alt="Traveler girl sitting on suit case with mobile in hand"
            className="w-full h-full object-cover"
          />
        </picture>
      </div>
    </section>
  );
}
