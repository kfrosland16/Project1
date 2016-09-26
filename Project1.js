/**
 * Created by Katlyn on 9/19/2016.
 *   @author Bates, Howard (hbates@northmen.org)
 *   @version 0.0.3
 *   @summary Project 2 demo code || created: 03.16.2016
 *   @todo
 */

"use strict";
const PROMPT = require('readline-sync'); //So we can read user input from the command line


//Section 1.............................................^

//global variable table
let numBedrooms, numBathrooms, numGarageSize, totalPrice;
const BASE_PRICE = 50000;
const BEDROOM_PRICE = 17000;
const BATHROOM_PRICE = 12500;
const GARAGE_PRICE = 6000;


//Section 2.............................................^

function main() {
    setNumBedrooms();
    setNumBathrooms();
    setNumGarageSize();
    setTotalPrice();
    printTotalPrice();
}

main();

//Section 3............................................^


function setNumBedrooms(){
    numBedrooms = Number(PROMPT.question('\nNumber of Bedrooms: '));
}

function  setNumBathrooms(){
    numBathrooms = Number(PROMPT.question('\nNumber of Bathrooms: '));
}

function  setNumGarageSize() {
    numGarageSize = Number(PROMPT.question('\nNumber of Garage size: '));
}

function setTotalPrice() {
    totalPrice = BASE_PRICE + (numBedrooms * BEDROOM_PRICE) + (numBathrooms * BATHROOM_PRICE) + (numGarageSize * GARAGE_PRICE);

}

function printTotalPrice() {
    process.stdout.write('\x1Bc'); //Clears the screen
    console.log(`\nThe cost of your home is \$${totalPrice}`);
}

//Section 4.............................................^

    /*
    Design the logic for a program for the River Falls Homes Construction Company.
 Design a program that prompts the user for a lot number in the River Falls subdivision,
 and data about the home to be built there including number of bedrooms, number of bathrooms,
 and size of garage in number of cars it holds. Output is the price of the home which is
 $50,000 base price plus $17,000 for each bedroom, $12,500 for each bathroom,, and $6,000
 for each car the garage holds.
        */