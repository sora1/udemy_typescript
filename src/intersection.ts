export {};

type Pitcher1 = {
  throwingSpeed: number;
}

type Batter1 = {
  battingAverage: number;
};

const DaimajinSasaki: Pitcher1 = {
  throwingSpeed: 155
}

const OchiaiHiromitsu: Batter1 = {
  battingAverage: 0.365
}

type TwoWayPlayer = Pitcher1 & Batter1;

const OtaniShohei: TwoWayPlayer = {
  throwingSpeed: 155,
  battingAverage: 0.333
}