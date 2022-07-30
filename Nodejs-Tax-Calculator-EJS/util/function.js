const calculateTax = (inputSalary) => {
    let tax = 0;
      if (inputSalary >= 100000 && inputSalary < 200000) {
        tax = inputSalary * 0.1;
      } else if (inputSalary >= 200000 && inputSalary < 300000) {
        tax = inputSalary * 0.15;
      } else if (inputSalary >= 300000 && inputSalary < 400000) {
        tax = inputSalary * 0.2;
      } else if (inputSalary >= 400000) {
        tax = inputSalary * 0.25;
      }
      
      return tax;
    };

module.exports = {calculateTax};