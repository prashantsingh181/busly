import { useSearchParams } from "react-router";
import { filterBuses } from "@/data/bus";
import BusCard from "@/components/common/BusCard";
import SearchForm from "@/components/common/SearchForm";
import type { BusWithRoute } from "@/types/bus";
import SelectedBusAside from "@/components/common/SelectedBusAside";

export default function Search() {
  const [searchParams, setSearchParams] = useSearchParams();
  const from = searchParams.get("from");
  const to = searchParams.get("to");
  const date = searchParams.get("date");
  const selectedBusId = searchParams.get("selectedBusId");
  const inValidSearchCondition = !from || !to || !date;

  let buses: BusWithRoute[] = [];
  if (!inValidSearchCondition) {
    buses = filterBuses(from, to);
  }

  // const [selectedBusId, setSelectedBusId] = useState<string | null>(null);
  const selectedBus = buses.find((bus) => bus.id === selectedBusId);

  function handleSelect(busId: string | null) {
    setSearchParams((prevSearchParams) => {
      const newSearchParams = prevSearchParams;
      if (!busId) {
        newSearchParams.delete("selectedBusId");
      } else {
        newSearchParams.set("selectedBusId", busId);
      }
      return newSearchParams;
    });
  }

  return (
    <main className="bg-white">
      <div className="main-margin-top custom-container py-10">
        <SearchForm
          isHorizontal
          initialFrom={from}
          initialTo={to}
          initialDate={date}
        />
        {inValidSearchCondition ? (
          <div>Select First</div>
        ) : buses.length === 0 ? (
          <div>No Buses found!</div>
        ) : (
          <div className="mt-16 grid grid-cols-6 gap-6">
            <section className="col-span-full flex flex-col gap-6 lg:col-span-4">
              {buses.map((bus) => (
                <div
                  key={bus.id}
                  className={`rounded-lg ${
                    selectedBusId && selectedBusId === bus.id
                      ? "outline-theme-400 shadow-[4px_4px_12px_0px_var(--theme-300)] outline-2"
                      : ""
                  }`}
                  onClick={() => handleSelect(bus.id)}
                  tabIndex={0}
                >
                  <BusCard key={bus.id} bus={bus} />
                </div>
              ))}
            </section>
            <div className="lg:col-span-2">
              {selectedBus ? (
                <>
                  <div
                    className="fixed inset-0 z-50 bg-black/40 backdrop-blur-[2px] lg:z-0 lg:hidden"
                    onClick={() => handleSelect(null)}
                  />
                  <div className="fixed top-0 right-0 bottom-0 z-[60] w-[18rem] overflow-auto bg-white p-4 lg:static lg:w-full lg:rounded-lg lg:border-[#EFEFEF] lg:shadow-xl">
                    <SelectedBusAside bus={selectedBus} date={date} />
                  </div>
                </>
              ) : (
                <div className="hidden lg:block">Please Select a bus</div>
              )}
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
