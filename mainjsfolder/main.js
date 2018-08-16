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
// // NOTE: CODING CHALLENGE #1!! :)
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
// function calculateAge(birthYear) {
//   return 2018 - birthYear;
// }

//calculateAge(1992); // This is how we call the function. 1992 will be input into birthYear continuing the line of code for the return making it 2018 - 1992.
// NOTE: Now we asign the function to a variable to save the new data (output from the return of the function.)
// var ageLuis = calculateAge(1992);
// var ageJunior = calculateAge(1993);
// var oldtimer = calculateAge(1903);
// var myDadsAge = calculateAge(1960);
// console.log(ageLuis);
//NOTE: The array below was just a test of extra code i decided to play around with. When looked on the console it will give us all the ages of the variables using the function calculateAge.
// var combine = [ ageLuis, ageJunior, oldtimer, myDadsAge];
// console.log(combine);

//Second function
//NOTE: parameters for the function below are given when the function is called.
// function yearsUntillRetirement(year, firstName) {
//   var age = calculateAge(year);
//   var retirement = 65 - age;
//   if (retirement > 0) {
//     console.log(firstName + ' retires in ' + retirement + ' years.');
//   } else {
//     console.log(firstName + ' is already retired and enjoying the break!');
//   }
//
// }
//NOTE: This is how we make our code work for the second function. After setting up our function we call it at the end and all the code will start running based on the parameters we give as seen below.
//yearsUntillRetirement(1992, 'Luis');
// Now we will call yearsUntillRetirement a couple more times to have different answers.
//yearsUntillRetirement(1968, 'Dad');
// console.log(firstName + ' retires in ' + retirement + ' years.');
//yearsUntillRetirement(1988, 'Karla');
// console.log(firstName + ' retires in ' + retirement + ' years.');
//yearsUntillRetirement(1993, 'Junior');
// console.log(firstName + ' retires in ' + retirement + ' years.');
//NOTE: IMPORTANT! with the code above as i called the function yearsUntillRetirement i as well tried to log it into the console and when i coded it after every time i called the function and opened up the console it would give me an error saying that firstName was not defined. By commenting it out i found out that since the function yearsUntillRetirement already has a console.log(); inside of it there is no need to call out to get a log into the console again.
//yearsUntillRetirement(1940, 'Grandpa');

//Function Statements and Expressions Section 2, Lecture 21

//NOTE: Function Declaration
//Declararion: A declared function is "saved for later use", and will be executed later, when it is invoked(called). It must begin with the word function. Also it can be called from anywhere just as long as it has some parameters that it will run.
// function whatDoYouDo(job, firstName){
// }
//EXAMPLE of Declaration. **** Not part of the UDEMY Course Material ****
//alert(foo()); // Output ALerts 5. Declarations are loaded before any code can run.
//function foo( { return 5;})

//NOTE: Function Expression
//Function Expressions "CAN ONLY" be stored in a variable. Will only run after its variable has been given its value.
//var whatDoYouDo = function(job, firstName){
//}
//EXAMPLE of Expression. **** Not part of the UDEMY Course Material ****
//alert(foo()); // ERROR! foo wasn't loaded yearsUntillRetirement//var foo = function() { return 5;}

// var whatDoYouDo = function (job, firstName) {
//   switch (job) {
//     case 'teacher':
//         return firstName + ' teaches kids how to code.';
//       //break; NOTE: *** IMPORTANT when using "return" this is no need for a break because return will stop the function.
//     case 'driver':
//         return firstName + ' drives a cab in California.';
//     case 'designer':
//         return firstName + ' designs beautiful websites.';
//     default:
//         return firstName + ' does something else.'
//
//   }
// }
//Now we call the function.
//NOTE: calling out the function like this saves us time by only having to write the code only once and only needing to call it afterwords when we need it.
// console.log(whatDoYouDo('teacher', 'Karla'));
// console.log(whatDoYouDo('driver', 'Junior'));
// console.log(whatDoYouDo('designer', 'Jazmine'));
//parameters are written as data types, numbers, string, boolens etc.. etc..
//console.log(whatDoYouDo('Web-Developer', 'Luis'));
//Works as well iwth alert as shown below.
//NOTE: alert(whatDoYouDo('wev-Developer', 'Luis')); //NOTE: IMPORTANT! If you run the alert with only whatDoYouDo without the parameters it will output all the code for the function whatDoYouDo. Good idea for giving answers on a quiz app or for pop up help.
//Works as well with prompt as shown below.
//prompt(whatDoYouDo('Web-Developer', 'Luis'));// NOTE: Requires input with prompts but you still get an answer.

// ARRAYS Section 2, Lecture 22
// arrays are like collections for variables
//array use brackets
//Initialize new array
// var names = ['Luis', 'Junior', 'Lalo'];
// var years = new Array(1990, 1969, 1948);
//
// //NOTE: var array[1,2,3]; and new Array(1,2,3); do the exact same thing. There is no speed difference.
// //arrays start from 0 and not 1
// console.log(names[0]);// returns the 0 index input of the array which is luis.
// console.log(names);// returns the full array
// console.log(names.length);// returns how many datatypes ore in the array.
// //changing one of my inputs in my array.
// //Mutate array data
// names[1] = 'Jazmine';
// console.log(names);
// //adding inputs intop the array. NOTE: input 3 and 4 do not have anything and input five does.
// names[1] = 'Jazmine';
// names[5] = '4 and 5 are missing! GASP!';
// console.log(names);
//
// //Different data types
// var luis = ['Luis', 'Sagastume', 1992, 'Coder'];
// //Some methods for arrays
// luis.push('red');// will add a element to the END of the array.
// console.log(luis);
// luis.unshift('Mr.');//will add an element to the begining to the array.
// console.log(luis);
// luis.pop(); // will removes the last element from the end of the array.
// console.log(luis);
// luis.shift();// will remove the first element of an array.
// console.log(luis);
//luis.indexOf(1992);// will give of the position of the value inside the array.
//NOTE: out will be 2 for the code above.
//luis.indexOf('not in the array'); // this will return -1 because it is not located in the array.
//NOTE: Using .indexOf is a good way to find out if the element is in the array.

// Ternary example used in the Udemy course.
//NOTE: The way the code below works is as followed: luis.indexOf is looking for designer in the array. Because it is not in the array it will come back -1 and continue the line of code. Now that -1 does === to -1 the line of code will run and give us 'Luis is NOT a dedigner.' That in return will be asigned to isDesigner and will be logged into the console.
// var isDesigner = luis.indexOf('designer') === -1 ? 'Luis is NOT a designer' : ' Luis IS a designer';
// console.log(isDesigner);
//
// // CODING CHALLENGE 3 Section 2, Lecture 23
//
// var myTips = function(bill, tip) {
//
//   if (bill <= 50) {
//     console.log(bill * tip);
//   } else if (bill >= 50 && bill <= 200){
//     console.log(bill * tip);
//   } else {
//     console.log(bill * tip);
//   }
// }
//
// console.log(myTips(48, 0.2));
// console.log(myTips(124, 0.15));
// console.log(myTips(268, 0.1));
// // TODO: Fix this coding challenge.
//
// var tipPercent = [0.2, 0.15, 0.1];// tip percentage in decimals.
// var billAfterTip = [58, 143, 295];
// //NOTE: My salution worked.. The code below will be the teachers solution
//
// function tipCalculator(bill){
//   var percentage;
//   if (bill < 50) {
//     percentage = .2;
//   } else if (bill >= 50 && bill < 200){
//     percentage = .15;
//   } else {
//     percentage = .1;
//   }
//   return percentage * bill;
// }
//
// var bills = [124, 48, 268];
// var tips = [tipCalculator(bills[0]),
//             tipCalculator(bills[1]),
//             tipCalculator(bills[2])];
// var finalValues = [bills[0] + tips[0],
//                    bills[1] + tips[1],
//                    bills[2] + tips[2]];
//
// console.log(tips, finalValues);


// OBJECT AND PROPERTIES Section, Lecture 25

// objects are with curly braces {}
//NOTE: Object Literal --- means we will use curly brackets {};
var luis = {
  firstName: 'Luis',// this is called a key value pair.
  lastName: 'Sagastume',
  birthYear: 1992,
  family: ['Junior', 'Jazmine', 'Lalo', 'Joe'], //Objects can hold arrays
  job: 'Coder',
  isMarried: false
};
console.log(luis); //NOTE: To target specific key value pairs from this object you just have to use the dot notation as shown below.
console.log(luis.lastName);// dot sagastume or .sagastume is considered dot notation.
console.log(luis['lastName']);// NOTE: you as well can target key value pairs by using brackets and targeting the key value pair by putting it inside quotation marks. 'lastName' or "lastName". This is the same as dot notation.
var x = 'birthYear';
console.log(luis[x]);//NOTE: In this example we are giving the variable x the value of birthYear which in return gets the value of 1992.

//Changing the objects values
luis.job = 'designer'; // must have the quotation marks
luis['isMarried'] = true; // must have the quotation marks
console.log(luis);

//NOTE: new Object Syntax -- new object Syntax means that we will not use curly breaces but instead the round brackets ().
//what we are doing with the code below is filling up the new object with its key value pairs. As well NOTE that when using 'new' Object() it must have the (). So basically var lalo = neqw object(); is the same as var lalo {insert key value pairs in here.}
var lalo = new Object();
lalo.name = 'Lalo';
lalo.birthYear = 2001;
lalo['lastName'] = 'Perdomo';
console.log(lalo);

//OBJECTS AND METHODS Section2, Lecture 26
//Functions attached to objects are considered methods.
//Only objects have methods.

var luis = {
  firstName: 'Luis',// this is called a key value pair.
  lastName: 'Sagastume',
  birthYear: 1992,
  family: ['Junior', 'Jazmine', 'Lalo', 'Joe'], //Objects can hold arrays
  job: 'Coder',
  isMarried: false,
  calcAge: function(birthYear) { // This is the function inside the object.
    return 2018 - birthYear;
  },
  calcAge: function() { // This function does the same as the function above.
    return 2018 - this.birthYear; // Output will be the same as the function above.
  },
  calcAge: function() { // This linew of code creates age and ask for an answer.
    this.age = 2018 - this.birthYear;
  }
};

console.log(luis.calcAge(1992));

luis.age = luis.calcAge();// this line of code gets the answer from the function and is asigned to it.
luis.calcAge();// this calls the function calcAge
console.log(luis);// this will show my my object but with age as a new key value pair


//CODING CHALLENGE 4 Section 2, Lecture 27


var luis = {    //methods are functions inside an object
  firstName: 'Luis', //key value pairs
  lastName: 'Sagastume Perdomo',
  mass: 124,
  height: 1.6,
  calcBMI: function(){
    this.bmi = this.mass / (this.height * this.height);
    return this.bmi;
  }
};
luis.calcBMI(); //NOTE: This is how we call a fnction to start working. Without this the function will not run and the console.log(luis.bmi); will not have its answer and will only come out undefined. GREAT JOB LUIS!!!!!!
console.log(luis.bmi);

var junior = {
  firstName: 'Junior', //key value pairs
  lastName: 'Sagastume Perdomo',
  mass: 140,
  height: 1.5,
  calcBMI: function(){
    this.bmi = this.mass / (this.height * this.height);
    return this.bmi;
  }
};
junior.calcBMI();
console.log(junior.bmi);

console.log(junior.firstName + ' has a higher BMI than ' + luis.firstName + ' because his BMI is ' + junior.bmi + ' and luis\'s BMI is ' + luis.bmi + '.');

// The if else statement below was just extra code i wanted to mess around with and it came out perfect!
if (luis.bmi > junior.bmi) {
  console.log(luis.firstName + ' ' +  luis.lastName + ' is the brother with the higher BMI that is ' + luis.bmi + '.');
} else if (junior.bmi > luis.bmi){
  console.log(junior.firstName + ' ' + junior.lastName + ' is the brother with the higher BMI that totals ' + junior.bmi + '.');
} else {
  console.log('They both most likely have the same BMI. ');
};



//LOOPS AND ITERATIONS Sections 2, Lecture 28

//For Loops run the same code over and over again without writing multiple lines of the same code.

for (var i = 0; i < 10; i++) { //this for loop will give me numbers 1 through 9.
  console.log(i);
};
//You can use for loops to run arrays.

var luis = ['Luis', 'Sagastume', 1992, 'Coder', false];

console.log(luis[0]);
console.log(luis[1]);
console.log(luis[2]);
console.log(luis[3]);
console.log(luis[4]);

//Both the code above and below do the same thing. But it is more practicle and effective to use the forloop that is below as it only requires less code.

for (var i = 0; i < luis.length; i++) {
  console.log(luis[i]);
};
//Aside from forloops there is as well one called the WHILE LOOP. NOTE: For while loops we only need to pass the condition which is i < luis.length; from the forloop.

var i = 0;//NOTE: While loops have their variables stated outside of the line of code as seen below.
while (i < luis.length) {
  console.log(luis[i]);//NOTE: Whithin the while loop you can add the i++ to add a number after every loop.
  i++
};

// Continue and Break Statments
//NOTE: Break Statment - Break statements are used to get out of a loop.
//NOTE: Continue Statement Continue statements are used to quit the current iteration of the loop and continue with the next one.

//THIS IS A CONTINUE STATEMENT
var luis = ['Luis', 'Sagastume', 1992, 'Coder', false];

for (var i = 0; i < luis.length; i++) {
  if (typeof luis[i] !== 'string') continue;//NOTE: The way this line of code works is that it used the typeof operator and finds out what part of the luis array is not a string. If it not a string it continues looping through the array and logs them in when it find them.
  console.log(luis[i]);
};
//NOTE: There are two ways you can write the Continue Statement. As seen below and above there are two ways that i have typed them up. The one above uses the circle brackets and the one below uses the curly brackets. The curly brackets are normal when it comes to using the if/ else statement but because we only need one line of code for the if statement we can use the circle brackets and add the continue statement outside of the circle brackets. As for the code below if we had more than one line of code needed for the if statement then we will use the curly brackets and as well add the continue statement inside the brackets as shown below. Both the continue statements from above and below do the same thing.
for (var i = 0; i < luis.length; i++) {
  if (typeof luis[i] !== 'string'){
      continue;
    };
  console.log(luis[i]);
};

//Break Statement
//NOTE: What the break statement does is that if it incounters a value that is not the same as what we are requesting it will break out of the loop. As shown below the if statement is using a break statement that is requesting to break out only if the luis array does not have a string. So basically if while running throught the array something other than a string is found the break statement will work and stop the loop. // GREAT NOTES LUIS :D
for (var i = 0; i < luis.length; i++) {
  if (typeof luis[i] !== 'string') break;
  console.log(luis[i])
};

//Reversing through the luis array.
var luis = ['Luis', 'Sagastume', 1992, 'Coder', false];
//Full array logged in reverse.
for (var i = luis.length - 1; i >= 0; i-- ) {
  //if (typeof luis[i] !== 'string') continue;
  console.log(luis[i]);
};
//Continue Statemens in Reverse
for (var i = luis.length - 1; i >= 0; i-- ) {
  if (typeof luis[i] !== 'string') continue;
  console.log(luis[i]);
};
//Break Statements ibn Reverse
for (var i = luis.length - 1; i >= 0; i-- ) {
  if (typeof luis[i] !== 'string') break;
  console.log(luis[i]);
};

//CODING CHALLENGE 5
//we have to use a For Loop with an if / else statement.
//John's Family
var bill = {
  totalBills : [124, 48, 268, 180, 42]
};

  var tipAmount = [];
  var totalBillPrice = [];

 for (var i = 0; i < bill.totalBills.length; i++) {
  if (bill.totalBills[i] < 50) {
      var tip = (bill.totalBills[i] * 0.2);
      console.log(tip);
      //tipAmount.push(bill.totalBills[i] * 0.2);
      tipAmount.push(tip);
      totalBillPrice.push(tip + bill.totalBills[i]); //TODO: Try to add the final result of adding the tip and the bill into the new array of totalBillPrice
  } else if (bill.totalBills[i] > 50 && bill.totalBills[i] < 200){
      var tip = (bill.totalBills[i] * 0.15);
      tipAmount.push(tip);
      //console.log(tip);
      totalBillPrice.push(tip + bill.totalBills[i]);
  } else if (bill.totalBills[i] > 200){
      var tip = (bill.totalBills[i] * 0.10 );
      tipAmount.push(tip);
      //console.log(tip);
      totalBillPrice.push(tip + bill.totalBills[i])
      console.log(tip + bill.totalBills[i]);
  } else {
    console.log('I dont know what else i can do currently.');
  };
   //console.log(bill.totalBills[i]);
 }

 //CODING CHALLENGE 5 PART TWO
 //Marks Family
 //create a tip calculator using functions
var billCost = [77, 375, 110, 45];
var marksFamily = [] //tips were added into this empty array using the dot push on marksFamilyTips as shown below.

var marksVacation = function(bill){
for (var i = 0; i < bill.length; i++) {
    if (bill[i] < 100) {
      //console.log(bill[i] * 0.20);
      marksFamily.push(bill[i] * 0.20);
    } else if (bill[i] > 100 && bill[i] < 300){
      //console.log(bill[i] * 0.10);
      marksFamily.push(bill[i] * 0.10);
    } else {       //NOTE: If i add one more else if to this code it might remove the undefined value when we log the function into the concole.
      //console.log(bill[i] * .25);
      marksFamily.push(bill[i] * 0.25);
    }
  };
}
console.log(marksVacation(billCost));

//Now create a function that will get the average paid in tips from John's family and Marks family. After that find out who paid the most in average tips.
//Note to do this you must add the tip amount and devide by the number of tips.
var johnsFamilyTip = tipAmount;
console.log(johnsFamilyTip); // all the tips for johns family.
var marksFamilyTips = marksFamily;
console.log(marksFamilyTips);// all the tips for marks family.

//NOTE: TOTAL SUM OF TIPS FOR JOHNS FAMILY
var sum = 0; // used stackoverflow for help insolving the addition of numbers in an array.

var familyTipAverage = []; //NOTE: calling the familyTipAveragehere first will stop any errors from accuring when trying to add the values later on. // Not really needed since i made a seperate variable for each johns and marks fmaily to hold their individual tip averages down below.

var marksAverageTip = [];
var johnsAverageTip = [];

var averageTip = function(johnsFamilyTip){
  for (var i = 0; i < johnsFamilyTip.length; i++) {
     console.log(johnsFamilyTip[i]);
     //console.log(marksFamilyTips[i]);
     sum = sum + johnsFamilyTip[i];
  }
  console.log(sum);
  familyTipAverage.push(sum / 5); // Both this code and the code below do the same thing.
  familyTipAverage.push(sum / johnsFamilyTip.length);// NOTE: this would be the better one to use just incase you dont know how many values are in the array
  johnsAverageTip.push(sum / johnsFamilyTip.length);
}
console.log(averageTip(johnsFamilyTip));
console.log(johnsAverageTip);
//NOTE: TOTAL SUM OF TIPS FOR MARKS FAMILY

var sum = 0; // used stackoverflow for help insolving the addition of numbers in an array.


var averageTip = function(marksFamilyTips){
  for (var i = 0; i < marksFamilyTips.length; i++) {
     console.log(marksFamilyTips[i]);
     //console.log(marksFamilyTips[i]);
     sum = sum + marksFamilyTips[i];
  }
  console.log(sum);
  familyTipAverage.push(sum / 4) // Both this code and the code below do the same thing.
  familyTipAverage.push(sum / marksFamilyTips.length) // NOTE: this would be the better one to use just incase you dont know how many values are in the array.
  marksAverageTip.push(sum / marksFamilyTips.length);
}
console.log(averageTip(marksFamilyTips));
console.log(familyTipAverage);

//Final part to Coding Challenge Number 5 -- Logging the final result into the console.

if (johnsAverageTip > marksAverageTip) {
    console.log('John\'s family pays the most when it comes to average tip.' );
} else {
  console.log('Mark\'s family is the one that pays the most average tip.');
}
