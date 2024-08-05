/**
 * Task 1:
 * Create a function named `printName`
 * - that just prints your name on the screen
 */
function printName() {
  console.log("Hala");
}

printName();

/**
 * Task 2:
 * Create a function named `printAge`
 * - that takes a birth year as a parameter,
 * - and prints the age on the screen.
 * - Age = current year - birth
 */
function printAge(year) {
  let age = 2024 - year;
  console.log(age);
}

printAge(2003);

/**
 * Task 3:
 * Create a function named `printAgeAndName`
 * - that takes a birth year and your name as parameters,
 * - and prints 'Hello NAME you are AGE years old' on the screen.
 * - Age = current year - birth
 */
function printAgeAndName(year, name) {
  let age = 2024 - year;
  console.log(`Hello ${name} you are ${age} years old`);
}

printAgeAndName(2003, "hala");

/**
 * Task 4:
 * Create a function named `printHello`
 * - that takes 2 parameters, name, and language
 * - language can be passed in different values, here are the accepted values:-
 * -- en: it should print `Hello NAME`
 * -- es: it should print `Hola NAME`
 * -- fr: it should print `Bonjour NAME`
 * -- tr: it should print `Merhaba NAME`
 */
function printHello(name, language) {
  if (
    language == "Hello" ||
    language == "Hola" ||
    language == "Bonjour" ||
    language == "Merhaba"
  ) {
    console.log(`${language} ${name}`);
  } else {
    console.log(
      "enter one of the following language plz : english spanish franc arabic  "
    );
  }
}

printHello("hala", "Hello");

/**
 * Task 5:
 * Create a function named `printMax`
 * - that takes 2 parameters as numbers
 * - should print out the bigger number
 */
function printMax(number1, number2) {
  if (number1 > number2) {
    console.log(`${number1} is Grater than ${number2}`);
  } else if (number2 > number1) {
    console.log(`${number2} is Grater than ${number1}`);
  } else {
    console.log(`Both equal ${number1}`);
  }
}

printMax(2, 2);
