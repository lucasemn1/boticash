export function getDateInBrazilianStandard(date: Date) {
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();

  const serializatedDate = {
    day: day < 10 ? `0${day}` : String(day),
    month: day < 10 ? `0${month}` : String(month),
    year: String(year),
  };

  return `${serializatedDate.day}/${serializatedDate.month}/${serializatedDate.year}`;
}
