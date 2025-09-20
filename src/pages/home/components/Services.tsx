export default function Services() {
  return (
    <section className="bg-white">
      <div className="custom-container flex flex-col py-10">
        <h2 className="font-poppins text-center text-[2.25rem] font-extrabold sm:text-[2.5rem] md:text-[2.75rem] lg:text-[3rem]">
          We Offer Best Services
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
          <ServiceCard />
        </div>
      </div>
    </section>
  );
}

function ServiceCard() {
  return <div></div>;
}
