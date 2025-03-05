//Amani Mohammad
//ITMD 441-02

//Excercise 1
function minMaxAverage(numbers) {
    if (!Array.isArray(numbers) || numbers.length === 0) {
        console.log("Invalid input: Please provide a non-empty array of numbers.");
        return;
    }
    
    let totalNumbers = numbers.length;
    let minValue =Math.min(...numbers);
    let maxValue =Math.max(...numbers);
    let average  = numbers.reduce((sum, num) => sum + num, 0) / totalNumbers;
    
    console.log(`Total Numbers: ${totalNumbers } ,   Min Value: ${minValue},Max Value: ${maxValue}, Average: ${average.toFixed(2)}`);
}
minMaxAverage([2, 5, 23, 6, 9, 4, 30, 1]);
minMaxAverage([1, 15, 2, 13, 12, 25, 29, 18]);
minMaxAverage([15, 20, 12, 14, 15, 1, 13]);


//Excercise 2
function countVowels(str) {
    if (typeof str !== "string" || str.length === 0) {
        console.log("Invalid. Put a non-empty string.");
        return;
    }
    
    const vowels = "aeiouAEIOU";
    let vowelCount = 0;
    
    for (let char of str) {
        if (vowels.includes(char)) {
            vowelCount++;
        }
    }
    
    console.log(`${str}: ${vowelCount} vowels.`);
}
console.log("\n Exercise 2")
countVowels("Watermelon");
countVowels("Computer");
countVowels("Amani");

//Excercise 3
function sortNumbers(numbers) {
    if (!Array.isArray(numbers) || numbers.length === 0) {
        console.log("Invalid. Enter a non-empty array of numbers.");
        return;
    }
    
    let sortedArray = [...numbers].sort((a, b) => a - b);
    console.log(`Original Array: [${numbers.join(", ")}] Sorted Array: [${sortedArray.join(", ")}]`);
}
console.log("\n Exercise 3")
sortNumbers([9, 4, 6, 2]);
sortNumbers([1, 23, 13, 5, 2]);
sortNumbers([30 , 12, 15, 25, 5, 10]);


//Excercise 4
function celsiusToFahrenheit (celsius) {
    if (typeof celsius  !== "number") {
        console.log ("Invalid. Provide a numeric temperature value.");
        return;
    }
    
    let fahrenheit = (celsius * 9/5) + 32;
    console.log(`${celsius.toFixed(1)}  Celsius = ${fahrenheit.toFixed(1)}  Fahrenheit` ) ;
}
console.log("\n Exercise 4")
celsiusToFahrenheit(30);
celsiusToFahrenheit(0);
celsiusToFahrenheit(-14);

