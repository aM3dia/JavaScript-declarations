// Declare name as string
let studentName = "Anupa";
console.log("My name is", studentName + ".");

// Declare age as numeric
let studentAge = 22;
console.log("I am", studentAge, "years old.");

// Declare program as boolean true or false statement
let isEnrolled = true;
if (isEnrolled) {
    console.log("I am enrolled in CPAN 113.");
} else {
    console.log("I am not enrolled in CPAN 113.");
}

// Declare a collection of values, also known as array
let interests = ["web design", "photography", "visual art"];
console.log("Anupa is interested in", interests);

// Declare object
let program = {
    programStudy: "Computer Programming"
};
console.log(program);

// arithmetic operation
let a = 22;
let b = 2

console.log("Half of my age is", a / b, ".");
console.log("At the age of", a - b, "I finished my diploma and began pursuing my degree.");
console.log("I will be graduating this program when I am", a + b + ".");
console.log("I'll be", a * b, "in 22 years.");
console.log("I am", a, "years old as mentioned.");

// comparison operations
console.log("22 is greater than 2:", a > b); // greater than
console.log("2 is less than 22:", b < a); // less than
console.log("22 is equal to 2:", a === b); // strict equal
console.log("2 is not equal to 22:", b !== a); // inequal
console.log("22 is less than (or equal to) 2:", a <= b) // less than or equal to
console.log("22 is greater than (or equal to) 2:", a >= b) // greater than or equal to

// logical operations
let x = true
let y = false

console.log("This AND operation results in", x && y, "because one of the values are 'false'."); // AND
console.log("The AND operation results in", x && x, "because both values are equal to 'true'.");
console.log("The AND operation results in", y && y, "because both values are equal to 'false'.");
console.log("This OR operation results in", x || y, "because it contains one 'true' value."); // OR
console.log("This OR operation result in", x || x, "because both values are equal to 'true'.");
console.log("This OR operation results in", y || y, "because both values are equal to 'false'.");
console.log("The NOT operations results in", !x, "or", !y, "because the statement inverts the value."); // NOT true = false or NOT false = true
