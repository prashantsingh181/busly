export const cities = [
  { code: "DEL", name: "Delhi", img: "/cities/delhi.webp" },
  { code: "AGC", name: "Agra", img: "/cities/agra.webp" },
  { code: "BOM", name: "Mumbai", img: "/cities/mumbai.webp" },
  { code: "BLR", name: "Bangalore", img: "/cities/banglore.webp" },
  { code: "MAA", name: "Chennai", img: "/cities/chennai.webp" },
  { code: "CCU", name: "Kolkata", img: "/cities/kolkata.webp" },
  { code: "HYD", name: "Hyderabad", img: "/cities/hyderabad.webp" },
  { code: "PNQ", name: "Pune", img: "/cities/pune.webp" },
  { code: "JAI", name: "Jaipur", img: "/cities/jaipur.webp" },
  { code: "THA", name: "Thane", img: "/cities/thane.webp" },
  { code: "VLR", name: "Vellore", img: "/cities/vellore.webp" },
] as const;

export type CityCode = (typeof cities)[number]["code"];

export function getCities() {
  return cities;
}
