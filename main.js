import inquirer from "inquirer";
let conveersion = {
    "PKR": {
        "USD": 0.004434589800443458980044345898,
        "GBP": 0.0037,
        "PKR": 1
    },
    "GBP": {
        "USD": 1.21,
        "GBP": 271.79,
        "PKR": 1
    },
    "USD": {
        "PKR": 225.50,
        "GBP": 0.83,
        "USD": 1
    }
};
const answer = await inquirer.prompt([
    {
        type: "list",
        name: "from",
        chpices: ["PKR", "USD", "GBP"],
        message: "Select your currency:"
    },
    {
        type: "list",
        name: "to",
        choices: ["PKR", "USD", "GBP"],
        message: "Select your conversion currency:"
    },
    {
        type: "number",
        name: "amount",
        message: "Enter ypur conversion amount:"
    }
]);
const { from, to, amount } = answer;
if (from && to && amount) {
    let result = conveersion[from][to] * amount;
    console.log(`Your conversion from ${from} to ${to}is ${result}`);
}
else {
    console.log("Invalid inputs");
}
