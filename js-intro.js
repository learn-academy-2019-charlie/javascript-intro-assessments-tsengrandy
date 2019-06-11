// Intro to Javascript Assessments

// Consider this variable:

var mantra = "Be the dev";

// 1. Write the code that returns 'B' from mantra.
console.log("Problem 1")
console.log( mantra.charAt(0))
// 2. Write the code that determines if there is a 'x' in mantra.
console.log("Problem 2")
var isX = false
for (let i = 0; i < mantra.length; i++){
    if (mantra.charAt(i) === "x"){
        isX = true
    }
}
console.log(isX)
// 3. Write the code that determines if there is a 'v' in mantra.
console.log("Problem 3")
var isV = false
for (let i = 0; i < mantra.length; i++){
    if (mantra.charAt(i) === "v"){
        isV = true
    }
}
console.log(isV)
// Stretch: Write the code that returns the position of 'v' in mantra.
console.log("Problem 3: stretch")
var isV = false
for (let i = 0; i < mantra.length; i++){
    if (mantra.charAt(i) === "v"){
        isV = true
        console.log(`index of v: ${i}`)
    }
}
// Consider the following statement:
console.log("Problem 4")
var codingIsEasy = true
var imBored = true 

if (codingIsEasy && imBored) {
    console.log("I need more!")
} else {
    console.log("Steady as she goes")
}

// 4. Update the codingIsEasy and imBored variables above the statement to the values required to log "I need more!"

// Consider the following statement:
console.log("Problem 5")
var imLost = false
var imFrustrated = false

if (imLost || imFrustrated) {
    console.log('Break time!')
} else {
    console.log('Keep coding!')
}

// 5. Update the imLost and imFrustated variables above the statement to the values required to log "Keep coding!"

// 6. Recall the mantra variable from the first question. Write the code that logs each letter of mantra using a for loop.
console.log("Problem 6")
for (let i = 0; i < mantra.length; i++){
    console.log(mantra.charAt(i))
}
// Stretch: Using a while loop.
console.log("Problem 6: stretch")
var count = 0
while (count< mantra.length){
    console.log(mantra.charAt(count))
    count++
}
// Super Stretch: Using forEach().
console.log("Problem 6: super stretch")
mantra.split("").forEach(function(item){
    console.log(item)
})
// Consider the following variable:
console.log("Problem 7")
var message = "thisisateststring"

// 7. Write a function that takes a string like message as an argument and returns the string without vowels.
const noVowels = (str) => {
    if( typeof str !== "string"){
        throw ("Not a string!")
        //throw TypeError("Not a string")
    }
    let newStr = ""
    for (let i = 0; i < str.length; i++){
        if (str.charAt(i) !== "a" && str.charAt(i) !== "e" && str.charAt(i) !== "i" && str.charAt(i) !== "o" && str.charAt(i) !== "u"){
            newStr = newStr.concat(str.charAt(i))
        }
    }
    return newStr
}
console.log(noVowels(message))
// Stretch: Update your function to throw an exception if the argument is not a string.
console.log("Problem 7: stretch")
// Super Duper Stretch: Update your function to throw a TypeError if the argument is not a string.
console.log("Problem 7: super stretch")
console.log(noVowels(message))
// Consider the following variable:

var toonimals = [ {name: 'Itchy', animal: 'mouse'}, {name: 'Stimpy', animal: 'cat'}, {name: 'Daffy', animal: 'duck'}, {name: 'Scratchy', animal: 'cat'}, {name: 'Ren', animal: 'dog'}, {name: 'Felix', animal: 'cat'}]
console.log("Problem 8")
// 8. Write a function that takes an array like toonimals and returns an array with only the toons that are cats.
const onlyCats = (array) => {
    let newArr = []
    for (let i = 0; i < array.length; i++){
        if (array[i].animal === "cat"){
            newArr.push(array[i])
        }
    }
    return newArr
}
console.log(onlyCats(toonimals))