// // VARIABLES AND DATA TYPES Section 2 Lecture 8
//
// var firstName = 'Luis';
// console.log(firstName);
// // just creating variables in javascript
//
// var lastName = ' Sagastume Perdomo';
// console.log(firstName + lastName);
// // adding first and last name and logging it into the console.
//
// var age = 26;
// // this is a number set to the variable age.
//
// var fullAge = true;
// console.log(fullAge);
// // this a boolean set to the variable fullAge.
//
//  var job;
//  console.log(job);
//  // logging this variable into the console will give us an undifined notice.
// job = 'Front End Developer'
// console.log(job);
//
// // ----Variable Mutation and Type Coercion Section 2, Lecture 9
//
// var firstName = 'Luis';
// var age = 26;
//
// console.log(firstName  + ' ' + 'age');
//
// // this will give us type coercion by adding both my name and my age giving me this output .. Luis 26
//
// var job, isMarried;
// //  In this line of code we are declaring two variables.
// job = 'Web Developer';
// isMarried = false;
// // After declaring our two variable we can now add values to them later on by calling the variable name as shown above.
//
// console.log(firstName + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried);
//
// // Variable Mutation
// age = 'twenty eight';
// job = 'Coder';
//
// // NOTE: alert creates a popup window that shows the user any message that is meant for them as shown below. NOTE: The alert below is commented out to avoid constant popups for every refresh.
// //alert(firstName + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried);
// //This prompt will create as well a popup that will require an answer. The prompt below is asking for my last name. It will take any answer and add it to my first name.
//
// //NOTE: The prompt changes my last name because we are declaring last name as a variable and asking for an answer that will later show.
// var lastName = prompt('Whatr is his last Name?')
//
// console.log(firstName + ' ' + lastName);

// Basic Operators Section 2, Lecture 10

// var year, yearLuis, yearJunior;
// now = 2018;
// ageLuis = 26;
// ageJunior = 25;
//
// //Math Operators
// yearLuis = now - ageLuis;
// yearJunior = now - ageJunior;
//
// console.log(yearLuis, yearJunior);
//
// console.log(now + 2);
// console.log(now * 2);
// console.log(now / 2);
//
// //Logical Operators
// var luisOlder = ageLuis > ageJunior
// console.log(luisOlder);
//
// //Typeof Operators
// //NOTE: the typeof Operator will just give us what type of Data type.
// console.log(typeof luisOlder); // Boolean
// console.log(typeof ageLuis); // Number
// console.log(typeof 'Luis will become an amazing coder!'); // String
// var x;
// console.log(typeof x); // undefined


//Opertor Precedence Section 2, Lecture 11

// var now = 2018;
// var yearLuis = 1992;
// var fullAge = 18;
//
// //Multiple Operators
// var isFullAge = now - yearLuis >= fullAge;
// console.log(isFullAge);
//
// //Grouping
// var ageLuis = now - yearLuis;
// var ageJunior = 25;
// var average = (ageLuis + ageJunior) / 2;
// console.log(average);
//
// //Multiple Assignments
//
// var x, y;
// //NOTE: be assigning x equal to y we give them both the same asnwer.
// x = y = (3 + 5) * 4 - 6; // 8 * 4 - 6 // 32 - 6 // 26
// console.log(x, y);
//
// //More Operators
// x *= 2;
// console.log(x);//NOTE: will be 52 because of our previouse code.
// x += 10;
// console.log(x);//NOTE: will be 62
// x++;
// console.log(x);//NOTE: will be 63
// x--;
// console.log(x);//NOTE: will be 62
//
//
// // NOTE: CODING CHALLENGE!! :)
//
// var luisHeight, luisMass, juniorHeight, juniorMass;
//
// luisHeight = 1.6; //1.6 meters
// luisMass = 35; // 35 BMI
// juniorHeight = 1.6; //1.6 meters
// juniorMass = 40 // 40 BMI
//
// var luisBMI, juniorBMI;
//
// luisBMI = luisMass / (luisHeight * luisHeight);
//
// juniorBMI = juniorMass / (juniorHeight * juniorHeight)
//
// var bmi = luisBMI > juniorBMI;
//
// console.log("Is Luis's BMI higher than Junior's?" + ' ' + bmi);
// //NOTE: The line of code below is the same as the one above. The only true difference is how we use quotation marks on both of them. The one at the bottem will have a forward slash to help use single quatation marks without changing them with some double quotation marks.
// console.log('Is Luis\'s BMI higher than Junior\'s?' + ' ' + bmi);

//NOTE: End Of Coding Challenge
    //NOTE: I got it 100% correct! On my first try!


// If / Else Statments Section 2 Lecture 14

// var firstName = 'Luis';
// var civilStatus = 'single';
//
// if (civilStatus === 'married') {
//   console.log(firstName + ' is married!');
// } else{
//   console.log(firstName + ' will hopefully marry soon :)');
// }
//
// var isMarried = true;
//if(isMarried === true) is not needed for this because isMarried is already a boolean. For If/else statments you need a true or false statement. So you can just take off the === true and leave it like shown below.
// if (isMarried) {
//   console.log(firstName + ' is married!');
// } else{
//   console.log(firstName + ' will hopefully marry soon :)');
// }
//
//
// var luisHeight, luisMass, juniorHeight, juniorMass;
//
// luisHeight = 1.6; //1.6 meters
// luisMass = 35; // 35 BMI
// juniorHeight = 1.6; //1.6 meters
// juniorMass = 40 // 40 BMI
//
// var luisBMI, juniorBMI;
//
// luisBMI = luisMass / (luisHeight * luisHeight);
//
// juniorBMI = juniorMass / (juniorHeight * juniorHeight)
//NOTE: This was the first coding challenge but this time we did an if/else statement to help with logging into the console with better accuaracy as shown below.
// if(luisBMI > juniorBMI){
//   console.log('Luis has the higher BMI.');
// } else {
//   console.log('Junior is the one with the higher BMI.');
// }
//NOTE: The code below is how it was writen before we added the if.else statement above.
//var bmi = luisBMI > juniorBMI;
// console.log("Is Luis's BMI higher than Junior's?" + ' ' + bmi);

//BOOLEAN LOGIC Section 2, Lecture 15

// var firstName = 'Luis';
// var age = '26';
//
// if (age < 13) {
//   console.log(firstName + ' is a boy');
// } else if(age >= 13 && age < 20){
//   console.log(firstName + ' is a teenager.');
// } else if (age >= 20 && age < 30 ){
//     console.log(firstName + ' is a young man.');
// }else {
//   console.log(firstName + ' is a man.');
// }
//NOTE: The code above helps us determine how to use Boolean logic by using Comparison Operators.

//Ternary Operators and Switch Statements
//Section 2, Lecture 16

// var firstName = 'Luis';
// var age = '26';
//NOTE: Ternary Operators is basically a shortcut for if / else statements.
// age >= 18 ? console.log(firstName + ' drinks beer.') : console.log(firstName + ' drinks juice.');
//NOTE: Ternary Operators works by starting of with the ? mark as shown below. It then becomes and if / else by having two sections. The first one is If and the second is else. They are separated by :. The : is the or that continues the code if the first statement is false.
//NOTE: If age is >= 18 Luis can drink beer : Luis will drink juice. That is how the code below is read.
// var drink = age >= 18 ? 'beer' : 'juice';
// console.log(drink);
//NOTE: This is how you write the code above as an if / else statement.
// if (age >= 18) {
//   var drink = 'beer';
// } else {
//   var drink = 'juice';
// }
// console.log('Because Luis is ' + age + ' he will be able to drink ' + drink + '.');

// Switch Statement
//var job = 'Coder';

// switch(job) {
//   case 'Developer':
//   case 'Coder':  //NOTE: By adding a second case to the first option you can now get the same answer for both Developer and Coder. Same can be done to the other case 'jobs'
//     console.log(firstName + ' teaches kids how to code.');
//     break;
//   case 'Driver':
//     console.log(firstName + ' drives an uber in lisbon.');
//     break;
//   case 'Designer':
//     console.log(firstName + ' designs beautiful websites.');
//     break;
//   default: console.log(firstName + ' does something else.');
// }

//Quick Switch statement. Rewrighting an if / else into a swtich statement.

// var firstName = 'Luis';
// var age = 26;
//NOTE: When dealing with ranges(numbers) in a switch statement you will want to use 'true' as your switch to tamke it work as an if / else statement. As Shown below.
// switch (true) {
//   case age >= 5 && age <= 10:
//    console.log(firstName + ' is a small boy.');
//     break;
//   case age >= 10 && age <= 20:
//     console.log(firstName + ' is a teenager.');
//     break;
//   case age >= 20 && age <= 25:
//     console.log(firstName + ' is a young man.');
//     break;
//   case age >= 25 && age <= 30:
//     console.log(firstName + ' is a grown man!');
//     break;
//   default: console.log(firstName + ' is getting old very fast!!');
// }


// Truthy and Falsy values and equality operators Section 2, Lecture 17

// NOTE: falsy values: undefined, null, 0, '', NaN
// NOTE: truthy values: NOT falsy values

//var height; //output will be undefined making it a falsy value.

// height = 23; //NOTE: This will cause the output to be truthy because now height is defined.

// if (height) {
//     console.log('Variable is defined');
// } else {
//   console.log('Variable has NOT been defined');
// }


//Equality Operators
// if (height == '23') {
//   console.log('The == operator does type coercion.');
// }
//NOTE: This is how type coercion works with equility operators.
//23 == '23' ---- output will be true because == make sthe '23'string into a 23 number
// And 23 === '23' will output false because it checks the diferences between all data type. It reads it as a number can not be equal to a strong therfore it will be false.

// CODING CHALLENGE # 2 --------- Section, 2 Lecture 18

// var johnOne = 89;
// var johnTwo = 120;
// var johnThree = 103;
//
// var mikeOne = 116;
// var mikeTwo = 94;
// var mikeThree = 123;
//
// var gameAverage = 3

//NOTE: This is the if / else staement for this coding challenge.

// var johnAverage = ((johnOne + johnTwo + johnThree) / gameAverage);
// console.log(johnAverage);
//
// var mikeAverage = ((mikeOne + mikeTwo + mikeThree) / gameAverage);
// console.log(mikeAverage);

// NOTE: This is the simpilar way of writing the code above.
// var johnaverage = (89 + 120 + 103) / 3;
// var mikeAverage = (116 + 94 + 123) / 3;

// if (johnAverage > mikeAverage) {
//   console.log('John has the greater average score per game. John\'s average score was ' + johnAverage + '.');
// } else if (mikeAverage > johnAverage) {
//   console.log('Mike has the higher average score per game. Mikes average score was ' + mikeAverage + '.' );
// } else {
//   console.log('There is a draw between both of them.');
// }

//NOTE: This is the switch statement for this coding challenge.

// switch (true) {
//   case johnAverage >= mikeAverage:
//     console.log('John has the overall higher average score of ' + johnAverage + ' and beats mikes average score of ' + mikeAverage + '.' );
//     break;
//   default:
//     console.log('Mike is the one with the highest average score of ' + mikeAverage + '.' + ' He\'s is higher than john which is ' + johnAverage + '.');
// }

//NOTE: This is the Conditional (TERNARY) Operator

// var highestAverageScore = johnAverage > mikeAverage ? console.log('John has the highest average score with a total of ' + johnAverage + '.') : console.log('Mike is the one with the highest average score with a total of ' + mikeAverage + '.');

// NOTE: Now we add one more player that is marry for the extra credit.

// var marryOne = 97;
// var marryTwo = 134;
// var marryThree = 105;
//
// var marryAverage = ((marryOne + marryTwo + marryThree) / 3);
//   console.log(marryAverage);

//NOTE: Now we will create a full on game between John, Mike and Marry to see who has the highest average score.

// if (johnAverage > mikeAverage && johnAverage > marryAverage) {
//   console.log('John is the full on champion for the average score per game witha total of ' + johnAverage + '.');
// } else if (mikeAverage > johnAverage && mikeAverage > marryAverage){
//   console.log('Mike is the true champion of champions with a grand total of ' + mikeAverage + '.');
// } else if (marryAverage > johnAverage && marryAverage > mikeAverage){
//   console.log('Marry came out of thin air and stole the greatest average score game. She beat John and mike\'s score with a total of ' + marryAverage +'.');
// } else {
//   console.log('Still testing results');
// }

// FUNCTION Section 2, Lecture 20
// NOTE: Functions are like variables. They need a name given to them just like we do when we use a var.
// NOTE: The code below reads as follows:
//function : name of function : (argument of the function){ the code for the function block }
function calculateAge(birthYear) {
  return 2018 - birthYear;
}

//calculateAge(1992); // This is how we call the function. 1992 will be input into birthYear continuing the line of code for the return making it 2018 - 1992.
// NOTE: Now we asign the function to a variable to save the new data (output from the return of the function.)
var ageLuis = calculateAge(1992);
var ageJunior = calculateAge(1993);
var oldtimer = calculateAge(1903);
var myDadsAge = calculateAge(1960);
console.log(ageLuis);
//NOTE: The array below was just a test of extra code i decided ton play around with. When looked on the console it will give us all the ages of the variables using the function calculateAge.
var combine = [ ageLuis, ageJunior, oldtimer, myDadsAge];
console.log(combine);

//Second function
function yearsUntillRetirement(year, firstName) {
  var age = calculateAge(year);
  var retirement = 65 - age;
}
