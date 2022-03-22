import { es } from "date-fns/locale";

const monthsNames = [...Array(12).keys()].map((nMonth) =>
  es.localize?.month(nMonth)
);

export default monthsNames;
