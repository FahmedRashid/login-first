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

