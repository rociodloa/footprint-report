import { makeAutoObservable } from 'mobx';

class CalculatorStore {
  transport = 'car';
  distance = 0;
  diet = 'omnivore';
  result = 0;

  constructor() {
    makeAutoObservable(this);
  }

  calculate() {
    const emissionFactors = {
      transport: { car: 0.21, bus: 0.05, bike: 0 },
      diet: { omnivore: 2.5, vegetarian: 1.7, vegan: 1.0 },
    };
    this.result =
      this.distance * emissionFactors.transport[this.transport] + emissionFactors.diet[this.diet];
  }
}

const calculatorStore = new CalculatorStore();
export default calculatorStore;
