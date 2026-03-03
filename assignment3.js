let grossSalary = 18000; // change this value to test

let contribution;

if (grossSalary < 6000) {
contribution = 150;
} else if (grossSalary <= 7999) {
contribution = 300;
} else if (grossSalary <= 11999) {
contribution = 400;
} else if (grossSalary <= 14999) {
contribution = 500;
} else if (grossSalary <= 19999) {
contribution = 600;
} else if (grossSalary <= 24999) {
contribution = 750;
} else if (grossSalary <= 29999) {
contribution = 850;
} else if (grossSalary <= 49999) {
contribution = 1000;
} else if (grossSalary <= 99999) {
contribution = 1500;
} else {
contribution = 2000;
}

console.log("Gross Salary: Ksh " + grossSalary);
console.log("NHIF Contribution: Ksh " + contribution);
