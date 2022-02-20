export {};

const reducer = (accumulator: number, currentValue: number) => {
  console.log({accumulator, currentValue})
  return accumulator + currentValue;
}

const sum = (...values: number[]): number => {
  return values.reduce(reducer);
}