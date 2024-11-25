// console.log(1);
// console.log(2);


// //variables
// let myAge = 25; // using let may allow change of the value [let]
// let year= 2024;

// console.log(myAge, year);

// myAge = 30; 
// console.log(myAge);

// const points = 100; // cannot be changed [const]
// console.log(points);

// var score = 75; //older version of veriable [var]
// console.log(score);

//----------------------------------------------------------------------------
// strings
// console.log('hello, world');
// let email = 'admin@gmail.com';
// console.log(email);

// // string concatenation
// let test = 'Fahmed';
// let test1 = 'Rashid';
// let names = test+' '+test1;
// console.log(names);

// // getting charecters
// console.log(names[0]);


// // string length
// console.log(names.length)

// // string methods
// console.log(names.toUpperCase()) //convert to uppercase
// let result = names.toLowerCase(); //store the lower case converted data to result.
// console.log(result, names);

// let index = email.indexOf('@');
// console.log(index);


//----------------------------------------------------------------------------
//common string methods
// let email = 'admin@gmail.com';
// // let result = email.lastIndexOf('n'); //finds the last index of n
// //let result = email.slice(0,10); //slice(start,end) slices the email
// //let result= email.substr(0,10); //substr(from0,go upto10)
// //let result = email.replace('m', 'w'); // replaces m with w. only the first m
// console.log(result);

//----------------------------------------------------------------------------
//numbers
// let radius = 10;
// const pi= 3.14;
// console.log(radius, pi);

//math operators +,-,*,/,**,%
//console.log(10/2);
//let result= radius % 3;
//let result= pi * radius**2;

// order of operation - B I D M A S

// let result = 5*(10-3)**2;
// console.log(result);

//let likes = 10;
//likes = likes+1;
//likes++;
//likes--;

//likes +=10; // += will take the current value and add with the value given which is 10 here [shorthand way to do it]
//likes -=5;
//likes *=2;
//likes /=2;
// console.log(likes);

//NAN- not a number
//console.log(5 / 'hello'); //NaN
//console.log(5 * 'number'); //NaN

// let result = 'the blog has'+' '+ likes+' '+ 'likes'; //concat string
// console.log(result);


//----------------------------------------------------------------------------

//template string
// const title = 'Best reads of 2024';
// const author = 'Fahmed';
// const likes = 30;

// concatenation way
// let result = 'The blog called ' + title+ ' by '+ author+ ' has '+ likes+ ' likes';
// console.log(result);

// template string way
// let result = `The blog called ${title} by ${author} has ${likes} likes`
// console.log(result);

// creating html templates
// let html =`
//     <h2>${title}</h2>
//     <p>By ${author}</p>
//     <span>This blog has ${likes} likes</span>
// `;
// console.log(html);

//----------------------------------------------------------------------------

//Arrays

//let ninjas = ['Fahmed', 'Rashid', 'Anu'];
// ninjas[0]= 'First Name';
// console.log(ninjas[0]);
// let size = ninjas.length;
// console.log(size);
//let ages = [20,25,30,35];
// console.log(ages[2]);
//let random = ['fahmed', 'is', 28, 'years', 'old'];
// console.log(random)
// console.log(ages.length);

//Array methods

// let result = ninjas.join('-');
// console.log(result);

// let result = ninjas.indexOf('Rashid')
// console.log(result);

// let result = ninjas.concat('ken', 'crystal')
// console.log(result);

//let result = ninjas.push('ken');
// console.log(ninjas);

// result = ninjas.pop();
// console.log(result);

//-----------------------------------------------

//Null and Undefined

// let age;
// age = null;
// console.log(age, age+3, `the age is ${age}`);

//Boolean--true--false
//booleans & comparisons
// console.log(true,false, 'true', 'false');

//methods can return booleans
//let email = 'admin@gmail.com';
//let names = ['fahmed', 'rashid', 'anu']
// let result = email.includes('@')
// let result = names.includes('fahmed')
// console.log(result);

//comparison operatios
//let age = 25;
// console.log(age == 25);
// console.log(age == 30);
// console.log(age != 30);
// console.log(age != 25);
// console.log(age > 20);
// console.log(age < 20);
// console.log(age <= 20);
// console.log(age >= 20);

// let name = 'fahmed';
// console.log(name == 'fahmed');
// console.log(name == 'Fahmed');
// console.log(name > 'Rashid');
// console.log(name > 'Fahmed');
// console.log(name < 'Rashid');
// console.log(name < 'Rashid');

// let age = 25;

//loose comparison (different types can still be equal)
// console.log(age == 25);
// console.log(age != 25);
// console.log(age == '25');
// console.log(age != '25');

// strict comparison (different types cannot be equal)
// console.log(age === 25);
// console.log(age === '25');
// console.log(age !== 25);
// console.log(age !== '25');


//type conversion
// let score = '100';
// console.log(score +1);
// console.log(typeof score);
// score = Number(score);
// console.log(typeof score);
// console.log(score +1);

// let result = Number('hello')
// console.log(result); // NaN

// let result = String(50);
// console.log(result);
// let result = Boolean(0);
// let result = Boolean('0')
// console.log(result, typeof result);









