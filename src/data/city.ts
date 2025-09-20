import type { City } from "@/types/city";

export const cities: City[] = [
  {
    code: "DEL",
    name: "Delhi",
    img: "/cities/delhi.webp",
    description:
      "The bustling capital of India, Delhi is known for its rich history, vibrant culture, and iconic landmarks like India Gate and Red Fort.",
  },
  {
    code: "AGC",
    name: "Agra",
    img: "/cities/agra.webp",
    description:
      "Home to the world-famous Taj Mahal, Agra is a historic city that showcases Mughal architecture and timeless heritage.",
  },
  {
    code: "BOM",
    name: "Mumbai",
    img: "/cities/mumbai.webp",
    description:
      "The city that never sleeps, Mumbai is India’s financial hub, famous for Bollywood, Marine Drive, and its fast-paced lifestyle.",
  },
  {
    code: "BLR",
    name: "Bangalore",
    img: "/cities/banglore.webp",
    description:
      "Often called the Silicon Valley of India, Bangalore is known for its IT industry, pleasant weather, and vibrant startup culture.",
  },
  {
    code: "MAA",
    name: "Chennai",
    img: "/cities/chennai.webp",
    description:
      "A coastal city with deep cultural roots, Chennai is famous for its temples, classical music, Marina Beach, and South Indian cuisine.",
  },
  {
    code: "CCU",
    name: "Kolkata",
    img: "/cities/kolkata.webp",
    description:
      "Known as the City of Joy, Kolkata is celebrated for its art, literature, colonial architecture, and the iconic Howrah Bridge.",
  },
  {
    code: "HYD",
    name: "Hyderabad",
    img: "/cities/hyderabad.webp",
    description:
      "Blending history with modernity, Hyderabad is renowned for the Charminar, tech hubs, and its world-famous biryani.",
  },
  {
    code: "PNQ",
    name: "Pune",
    img: "/cities/pune.webp",
    description:
      "A thriving educational and cultural hub, Pune is known for its pleasant climate, vibrant nightlife, and historical landmarks.",
  },
  {
    code: "JAI",
    name: "Jaipur",
    img: "/cities/jaipur.webp",
    description:
      "The Pink City of India, Jaipur is famous for its royal palaces, forts, colorful bazaars, and rich Rajasthani heritage.",
  },
  {
    code: "THA",
    name: "Thane",
    img: "/cities/thane.webp",
    description:
      "Known as the City of Lakes, Thane is a fast-growing urban area with natural beauty and strong connectivity to Mumbai.",
  },
  {
    code: "VLR",
    name: "Vellore",
    img: "/cities/vellore.webp",
    description:
      "Famous for the Vellore Fort and Christian Medical College, Vellore is a historic city blending culture, education, and heritage.",
  },
];

export function getCityByCityCode(string: string) {
  return cities.find((city) => city.code === string);
}
