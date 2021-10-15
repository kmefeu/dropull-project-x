import { parseISO, format } from "date-fns";

export const formatDate = (date: string | null): string => {
  if (date === null) return "";
  return format(parseISO(date), `PPP`);
};
