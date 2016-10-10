/**
 *   @author Bates, Howard (hbates@northmen.org)
 *   @version 0.0.2
 *   @summary Project 3 demo code || created: 03.16.2016
 *   @todo
 */

"use strict";
const PROMPT = require('readline-sync');

let continueResponse;
let policyNum, ageNum, birthDay, currentYear, birthMonth, birthYear, premiumDueDate, faultAccidentsNum, totalBill;
let lastName, firstName;

function main() {
    process.stdout.write('\x1Bc'); //Clears the screen
    if (continueResponse == null) {
        setContinueResponse();
    }
    if (continueResponse === 1) {
        setPolicyNum();
        setLastName();
        setFirstName();
        //setBirthDay();
        //setBirthMonth();
        setBirthYear();
        setCurrentYear();
        setAgeNum();
        setPremiumDueDate();
        setFaultAccidentsNum();
        setTotalBill();
        printTotalBill();
        setContinueResponse();
        return main(); //proper tail recursion
    }
    printGoodbye();
}

main();

function setContinueResponse() {
    if (continueResponse === 1) {
        continueResponse = Number(PROMPT.question(`\nDo you want to continue? [0=no, 1=yes]: `));
        if (continueResponse !== 0 && continueResponse !== 1) {
            console.log(`${continueResponse} is an incorrect value. Please try again.`);
            continueResponse = 1;
            setContinueResponse(); //improper recursion
        }
    } else {
        continueResponse = 1;
    }
}

function setPolicyNum() {
    policyNum = Math.floor((Math.random() * 20) + 1);  //JavaScript random number 1 - 20
}
function setAgeNum() {
    ageNum = currentYear - birthYear;
    console.log(`${ageNum} = age.`)
}

function setLastName() {
    lastName = PROMPT.question(`\nPlease enter Last Name: `);
}

function setFirstName() {
    firstName = PROMPT.question(`\nPlease enter First Name: `);
}

function setBirthDay() {
    birthDay = Number(PROMPT.question(`\nPlease enter Birth Date: `));
}

function setCurrentYear() {
    currentYear = Number(PROMPT.question(`\nPlease enter Current Year: `));
}

function setBirthMonth() {
    birthMonth = Number(PROMPT.question(`\nPlease enter Birth Month: `));
}

function setBirthYear() {
    birthYear = Number(PROMPT.question(`\nPlease enter Birth year: `));
}

function setPremiumDueDate() {
    premiumDueDate = PROMPT.question(`\nPlease enter Premium Due Date: `);
}

function setFaultAccidentsNum() {
    faultAccidentsNum = PROMPT.question(`\nPlease enter number of At Fault Accidents: `);
}

function setTotalBill() {
    totalBill = 0;
    const
        BASE_PRICE = 100,
        YOUNG_AGE_FEE = 20,
        MIDDLE_AGE_FEE = 10,
        MIDDLEISH_AGE_FEE = 0,
        ELDER_AGE_FEE = 30,
        YOUNG_AGE = 15,
        MIDDLE_AGE = 30,
        MIDDLEISH_AGE = 45,
        ELDER_AGE = 60;
    if (ageNum >= YOUNG_AGE && ageNum < MIDDLE_AGE) {
        totalBill = YOUNG_AGE_FEE + BASE_PRICE + (faultAccidentsNum);
    } else if (ageNum >= MIDDLE_AGE && ageNum < MIDDLEISH_AGE) {
        totalBill = MIDDLE_AGE_FEE + BASE_PRICE + (faultAccidentsNum);
    } else if (ageNum > MIDDLEISH_AGE && ageNum < ELDER_AGE) {
        totalBill = MIDDLEISH_AGE_FEE + BASE_PRICE + (faultAccidentsNum);
    } else if (ageNum > ELDER_AGE){
        totalBill = ELDER_AGE_FEE + BASE_PRICE + (faultAccidentsNum);
    }
}


    function printTotalBill() {
        process.stdout.write('\x1Bc'); //Clears the screen
        console.log(`\n\t${firstName}'s bill: \$${totalBill}. Policy#: ${policyNum}`);
    }

    function printGoodbye() {
        process.stdout.write('\x1Bc'); //Clears the screen
        console.log(`\n\tGoodbye.`);
    }

/*
This program is designed to set the insurance quotes for each age.

 Covers:  Random, recursion, selection logic, Boolean, return, .gitignore
 */