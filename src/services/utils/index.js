export const dateFormatter = date => {
  const newDate = new Date(date);
  //Format dd/MM/yyyy - HH:mm european/latim american time format
  return `${addZero(newDate.getDate())}/${addZero(
    newDate.getMonth() + 1,
  )}/${newDate.getFullYear()} ${addZero(newDate.getHours())}:${addZero(
    newDate.getMinutes(),
  )}`;
};

const addZero = num => {
  if (num <= 9) return '0' + num;
  return num;
};
