import { CURRENCY, LOCALE } from "@/config/constants";

const formatter = new Intl.NumberFormat(LOCALE, {
  style: "currency",
  currency: CURRENCY,
});

export function formatPrice(price: number) {
  return formatter.format(price);
}
