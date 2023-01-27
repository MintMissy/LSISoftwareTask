export function formatMin2Digits(number: number) {
  return number < 9 ? `0${number}` : number;
}
