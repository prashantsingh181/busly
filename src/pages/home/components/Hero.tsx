import SearchForm from "@/components/common/SearchForm";

export default function Hero() {
  return (
    <section className="main-padding-top min-h-screen bg-white bg-[url('/home/heroBg.webp')] bg-contain bg-right-top bg-no-repeat">
      <div className="custom-container grid grid-cols-1 place-items-center gap-6 p-4 lg:grid-cols-[1fr_1fr]">
        <div className="flex flex-col gap-8">
          <h2 className="font-poppins text-center text-3xl font-bold text-neutral-600 italic sm:text-4xl lg:text-6xl">
            “Busly – The easy way to bus travel.”
          </h2>
          <SearchForm />
        </div>
        <picture className="block h-auto w-full">
          <img
            src="/home/heroImage.webp"
            alt="Traveler girl sitting on suit case with mobile in hand"
            className="h-full w-full object-cover"
            height={764}
            width={765}
          />
        </picture>
      </div>
    </section>
  );
}
