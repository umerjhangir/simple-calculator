#! /usr/bin/env node 

import inquirer from "inquirer";

//printing a wellcome massage 
console.log("\n\twellcome to \'code-with-umer\' - simple calculator\n");

// Asking Question from users through inquirer

let answer = await inquirer.prompt([
    {message : "Enter frist number", type: "number", name: "firstnumber"},
    {message : "Enter second number", type: "number", name :"secondnumber"},
    {
        message : "select one operator to perform operations",
        type: "list",
        name: "operator",
        choices: ["Addition", "subtractions", "Multiplication","Division"],
    },
]);

// condtional statements If-Else

if (answer.operator === "Addition"){
    console.log(answer.firstnumber + answer.secondnumber)
}
else if(answer.operator === "subtractions"){
    console.log(answer.firstnumber - answer.secondnumber)
}
else if(answer.operator === "Multiplication"){
    console.log(answer.firstnumber * answer.secondnumber)
} 
else if (answer.operator === "Division"){
    console.log(answer.firstnumber / answer.secondnumber)
}
else{
    console.log("invalid input")
}