#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.blue.bold("\n\t Welcome TO Ali Akbar Brohi Currency converter\n"));
let exchange_rate = {
    "USD": 1, // base currency
    "Euro": 0.9,
    "Jyp": 113,
    "CAD": 1.3,
    "AUD": 1.65,
    "PKR": 280
};
let user_answer = await inquirer.prompt([
    {
        name: "from_currency",
        type: "list",
        message: chalk.yellow.bold("select a currency to convert from"),
        choices: ["USD", "Euro", "Jyp", "CAD", "AUD", "PKR"]
    },
    {
        name: "to_currency",
        type: "list",
        message: chalk.yellow.bold("select the currency to convert into"),
        choices: ["USD", "Euro", "Jyp", "CAD", "AUD", "PKR"]
    },
    {
        name: "amount",
        type: "number",
        message: "Enter the amount to convert"
    }
]);
let from_amount = exchange_rate[user_answer.from_currency];
let to_amount = exchange_rate[user_answer.to_currency];
let amount = user_answer.amount;
let base_amount = amount / from_amount;
let converted_amount = base_amount * to_amount;
console.log(chalk.green.bold(`\n\tconverted amount = ${converted_amount.toFixed(3)}\n`));
