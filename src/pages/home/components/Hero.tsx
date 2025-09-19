import SearchForm from "../../../components/common/SearchForm";

export default function Hero() {
  return (
    <section className="bg-white bg-[url('/home/heroBg.webp')] bg-contain bg-right-top bg-no-repeat main-padding-top min-h-screen">
      <div className="custom-container grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-6 place-items-center p-4">
        <div className="flex flex-col gap-8">
          <h2 className="text-3xl sm:text-4xl lg:text-6xl text-neutral-600 text-center font-bold">
            Travel, enjoy and live a new and full life
          </h2>
          <SearchForm />
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
