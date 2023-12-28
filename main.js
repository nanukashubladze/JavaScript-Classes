class Calculator {
  constructor(initialValue) {
    this.result = initialValue;
  }

  add(value) {
    this.result += value;
    return this;
  }

  multiply(value) {
    this.result *= value;
    return this;
  }

  getResult() {
    return this.result;
  }
}


const calculator = new Calculator(0);
const res = calculator.add(10).multiply(5).getResult();


console.log(res)