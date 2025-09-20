import CityCard from "@/components/common/CityCard";
import { cities } from "@/data/city";

export default function Cities() {
  return (
    <main className="main-margin-top">
      <div className="custom-container relative py-10">
        <img src="/firework-1.svg" className="absolute top-16 -right-10 -z-10" />
        <img src="/firework-2.svg" className="absolute top-4 -left-16 -z-10" />
        <h2 className="section-heading relative mb-8">
          <span className="text-theme-700 italic">Cities</span> we take you to!
        </h2>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {cities.map((city) => (
            <CityCard key={city.code} city={city} noClampDescription />
          ))}
        </div>
      </div>
    </main>
  );
}
