export {};

// function bmi(height: number, weight: number): number {
//   return weight / (height * height);
// }

// bmi(177, 65)
let bmi :(weight: number, height: number, printable?: true) => number =
  (weight, height) => weight / (height * height)

  bmi(79, 79, true)