"use strict";
// Start with a copy of your program from Exercise 41.
// Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name.
// Call show_magicians() to see that the list has actually been modified. 
let magicain = ["Harry Potter", "Hermione Granger", "Ron weasley", "Albus Dumbledore"];
function make_great(magicainArray) {
    for (let i = 0; i < magicainArray.length; i++) {
        magicain[i] = "The Great " + magicainArray[i];
    }
}
function show_magicians(magicians) {
    magicians.forEach(element => {
        console.log(element);
    });
}
make_great(magicain);
show_magicians(magicain);
