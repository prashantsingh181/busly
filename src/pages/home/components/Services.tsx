import { FaHandHoldingHeart, FaTruckFast } from "react-icons/fa6";
import { IoShieldCheckmark } from "react-icons/io5";

const services = [
  {
    icon: <FaTruckFast className="text-button-text-color" />,
    label: "AC Buses",
    subtext:
      "Travel comfortably with air-conditioned buses designed for a relaxing journey.",
  },
  {
    icon: <IoShieldCheckmark className="text-button-text-color" />,
    label: "Secure Payment",
    subtext:
      "Experience worry-free transactions with our secure payment options.",
  },
  {
    icon: <FaHandHoldingHeart className="text-button-text-color" />,
    label: "Love to help you",
    subtext: "Our dedicated team is here to assist you every step of the way.",
  },
];

export default function Services() {
  return (
    <section className="bg-white">
      <div className="custom-container flex flex-col py-10">
        <h2 className="section-heading">
          We Offer <span className="text-theme-700 italic">best services</span>
        </h2>
        <div className="grid grid-cols-1 gap-4 px-4 py-6 sm:grid-cols-2 md:gap-8 lg:grid-cols-3">
          {services.map((service) => (
            <ServiceCard key={service.label} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
}

interface ServiceCardProps {
  icon: React.ReactElement;
  label: string;
  subtext: string;
}
const ServiceCard = function ({
  icon,
  label,
  subtext,
}: Readonly<ServiceCardProps>) {
  return (
    <div className="w-full flex-1 rounded-3xl border border-neutral-200 bg-neutral-100 px-4 py-4 shadow transition-shadow hover:shadow-xl md:my-4 md:px-6 md:py-10">
      <div className="bg-theme-200 inline-block rounded-full p-3 text-xl md:text-2xl">
        {icon}
      </div>
      <h3 className="font-poppins text-theme-700 mt-3 text-xl leading-normal font-bold md:mt-5 md:text-3xl">
        {label}
      </h3>
      <p className="mt-3 leading-normal break-words text-neutral-800/75 md:text-lg">
        {subtext}
      </p>
    </div>
  );
};
