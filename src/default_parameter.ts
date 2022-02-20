export {};

const nextYearSalary = (currentSalary: number, rate: number = 1.22) => {
  return currentSalary * rate;
}
console.log(nextYearSalary(1000));