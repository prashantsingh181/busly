import type { City } from "../types/city";

export const cities: City[] = [
  {
    code: "DEL",
    name: "Delhi",
    img: "/cities/delhi.webp",
    description:
      "lorem ipsum dolor saket saminat fabwkq fajjeog gopwoj onkfskjd",
  },
  {
    code: "AGC",
    name: "Agra",
    img: "/cities/agra.webp",
    description:
      "lorem ipsum dolor saket saminat fabwkq fajjeog gopwoj onkfskjd",
  },
  {
    code: "BOM",
    name: "Mumbai",
    img: "/cities/mumbai.webp",
    description:
      "lorem ipsum dolor saket saminat fabwkq fajjeog gopwoj onkfskjd",
  },
  {
    code: "BLR",
    name: "Bangalore",
    img: "/cities/banglore.webp",
    description:
      "lorem ipsum dolor saket saminat fabwkq fajjeog gopwoj onkfskjd",
  },
  {
    code: "MAA",
    name: "Chennai",
    img: "/cities/chennai.webp",
    description:
      "lorem ipsum dolor saket saminat fabwkq fajjeog gopwoj onkfskjd",
  },
  // { code: "CCU", name: "Kolkata", img: "/cities/kolkata.webp", description: "lorem ipsum dolor saket saminat fabwkq fajjeog gopwoj onkfskjd" },
  {
    code: "HYD",
    name: "Hyderabad",
    img: "/cities/hyderabad.webp",
    description:
      "lorem ipsum dolor saket saminat fabwkq fajjeog gopwoj onkfskjd",
  },
  {
    code: "PNQ",
    name: "Pune",
    img: "/cities/pune.webp",
    description:
      "lorem ipsum dolor saket saminat fabwkq fajjeog gopwoj onkfskjd",
  },
  {
    code: "JAI",
    name: "Jaipur",
    img: "/cities/jaipur.webp",
    description:
      "lorem ipsum dolor saket saminat fabwkq fajjeog gopwoj onkfskjd",
  },
  {
    code: "THA",
    name: "Thane",
    img: "/cities/thane.webp",
    description:
      "lorem ipsum dolor saket saminat fabwkq fajjeog gopwoj onkfskjd",
  },
  {
    code: "VLR",
    name: "Vellore",
    img: "/cities/vellore.webp",
    description:
      "lorem ipsum dolor saket saminat fabwkq fajjeog gopwoj onkfskjd",
  },
];

export function getCityByCityCode(string: string) {
  return cities.find((city) => city.code === string);
}
