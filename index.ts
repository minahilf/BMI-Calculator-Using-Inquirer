import inquirer from "inquirer";

let weightInKg = await inquirer.prompt([
  {
    name: "weight",
    type: "number",
    message: "Enter Your Weight In Kilograms:",
  },
]);
let heightInMeters = await inquirer.prompt([
  {
    name: "height",
    type: "number",
    message: "Enter Your Height In Meters:",
  },
]);
 let BMI: number = weightInKg.weight/(heightInMeters.height * heightInMeters.height);
 console.log(`Your BMI is ${BMI}`);
