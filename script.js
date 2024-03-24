
//Palindrome Checker:
function isPalindrome(word) {
    function cleanString(word) {
        return word.replace(/[\W_]/g, '').toLowerCase();
    }
    //removes spaces, punctuation, and converts the string to lowercase

    function checkPalindrome(word) {
        if (word.length <= 1) {
            return true; // Base case: if the length of the string is 0 or 1: string is a palindrome
        } else if (word[0] !== word[word.length - 1]) {
            return false; // First and last characters don't match
        } else {
            return checkPalindrome(word.substring(1, word.length - 1));
        }
    }

    const cleanedStr = cleanString(word);
    return checkPalindrome(cleanedStr);
}


console.log(isPalindrome("Panama")); 
console.log(isPalindrome("maram")); 
console.log(isPalindrome("hello")); 

//Ticket Pricing

function calculateTicketPrice(age) {
    switch (true) {
        case (age <= 12):
            return 10;
        case (age >= 13 && age <= 17):
            return 15;
        default:
            return 20;
    }
}

function main() {
    try {
        let age = parseInt(prompt("Enter your age:"));
        if (!isNaN(age) && age >= 0) {
            let ticketPrice = calculateTicketPrice(age);
            console.log(`The price of your movie ticket is $${ticketPrice}.`);
        } else {
            console.log(`Enter a valid age.`);
        }
    } catch (error) {
        console.error("An error occurred:", error);
    }
}

main();


function clothingAdviser(temperature, isRaining) {

        if (isRaining) {
            console.log("It's  raining. You should wear a warm coat, hat, and boots.");
        } else {
            console.log("It's  not raining. Wear a heavy coat, scarf, and gloves.");
        }
    }


function main() {
    
    let rainInput = prompt("Is it raining? (yes/no):");
    let isRaining = rainInput.toLowerCase() === "yes";
    
    clothingAdviser(isRaining);
}

main();

function power(base, exponent) {
    if (exponent === 0) {
        return 1;
    }
    else {
        return base * power(base, exponent - 1);
    }
}


let base = 2;
let exponent = 3;
let result = power(base, exponent);
console.log(`${base} raised to the power of ${exponent} is: ${result}`);


