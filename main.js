var car = "Subaru";
var age = 25;
var numbers = [1, 2, 3, 4];
//**String Tests **
//Test 1: Equality  (True)
console.log("Is car == `subaru` ? I predict True.");
console.log(car == "subaru"); //True (ccase sensitive) 
//Test 2:  Strict Equality  (false)
console.log("Is car === `subaru` ? I predict False.");
console.log(car === "subaru"); //false  (case sensitive)
//Test 3: Inequality  (True)
console.log("Is car !=`subaru` ? I predict True.");
console.log(car != "subaru"); //true
//Test 4:   inequality comparison (false)
console.log("Is car !==`subaru` ? I predict False.");
console.log(car !== "subaru"); //false
//** Lower Function Tests **
//Test 5: Lower case conversion (True)
console.log("Is car. toLowerCase() == `Subaru`? I predict True.");
console.log(car.toLowerCase() == "Subaru"); //True (converted to lower case)
//Test 6: Lower case conversion (False)
console.log("Is car ===car.toLowerCase() ? I predict False.");
console.log(car === car.toLowerCase()); //false (original value remains uppercase)
//**Numerical test **
//Test 7: Equality (True)
console.log("Is age == 25 ? I predict True.");
console.log(age == 25); //True
//Test 8: Inequality (True)
console.log("Is age !=  30 ? I predict True.");
console.log(age != 30); //True
//Test 9: Greater than(False)
console.log("Is age  >30 ? I predict False.");
console.log(age > 30); //True (non-empty string is truthy )
//Test 10:Less than or equal (True)
console.log("Is age <= 25 ? I predict True.");
console.log(age <= 25); //True
//** Logical operator **
//Test 11: AND (True)
console.log("Is age > 20 &&  < 30? I predict True.");
console.log(age > 20 && age < 30); //True (neither condition met)
//Test 12: OR(False)
console.log("Is age > 30 ||age < 18? I predict False.");
console.log(age > 30 || age < 18); // False (neither condition met)
//** Array Tests**
//Test 13: In array (True)
console.log("Is 3 in nmbers? I predict True.");
console.log(3 in numbers); //true(check for index existance)
//Test 14:Not in array (False)
console.log("Is 5 not  in nmbers? I predict True.");
console.log("5 is  not  in numbers"); //true(negation of "in" operator)
