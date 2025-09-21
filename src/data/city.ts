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
    code: "LKO",
    name: "Lucknow",
    img: "/cities/lucknow.webp",
    description:
      "The City of Nawabs, Lucknow is renowned for its Mughlai cuisine, elegant tehzeeb (etiquette), and architectural gems like Bara Imambara.",
  },
  {
    code: "KNP",
    name: "Kanpur",
    img: "/cities/kanpur.webp",
    description:
      "An industrial hub of Uttar Pradesh, Kanpur is known for its leather industry, textile mills, and historic colonial landmarks.",
  },
  {
    code: "AGC",
    name: "Agra",
    img: "/cities/agra.webp",
    description:
      "Home to the world-famous Taj Mahal, Agra is a historic city that showcases Mughal architecture and timeless heritage.",
  },
  {
    code: "JAI",
    name: "Jaipur",
    img: "/cities/jaipur.webp",
    description:
      "The Pink City of India, Jaipur is famous for its royal palaces, forts, colorful bazaars, and rich Rajasthani heritage.",
  },
  {
    code: "BOM",
    name: "Mumbai",
    img: "/cities/mumbai.webp",
    description:
      "The city that never sleeps, Mumbai is India’s financial hub, famous for Bollywood, Marine Drive, and its fast-paced lifestyle.",
  },
  {
    code: "THA",
    name: "Thane",
    img: "/cities/thane.webp",
    description:
      "Known as the City of Lakes, Thane is a fast-growing urban area with natural beauty and strong connectivity to Mumbai.",
  },
  {
    code: "PNQ",
    name: "Pune",
    img: "/cities/pune.webp",
    description:
      "A thriving educational and cultural hub, Pune is known for its pleasant climate, vibrant nightlife, and historical landmarks.",
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
