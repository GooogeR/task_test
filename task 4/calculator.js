class Calculator {
    constructor() {
        
    }
  
    add(a, b) {
      return a + b;
    }
  
    subtract(a, b) {
      return a - b;
    }
  
    multiply(a, b) {
      return a * b;
    }
  
    divide(a, b) {
      if (b === 0) {
        return "Ошибка: деление на ноль невозможно";
      }
      return a / b;
    }
  }
  
  const calc = new Calculator();
  console.log(calc.add(10, 5));
  console.log(calc.subtract(10, 5));
  console.log(calc.multiply(10, 5));
  console.log(calc.divide(10, 5));
  console.log(calc.divide(10, 0));
  