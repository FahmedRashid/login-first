
//function expression
// const speak = function(){ // function expression here
//     console.log("good day");
// };
// greet();
// greet();
// speak();

// functuin declaration
// function  greet(){
//     console.log("Hello");
// }

// arguments and parameters

// const speak = function(name, time){ // function expression here and function parameters
//     console.log(`Good ${time} ${name}`);
// };
// speak('Fahmed', 'morning'); //arguments

// const speak = function(name = 'Yo', time= 'yo'){ // function expression here and function parameters
//     console.log(`Good ${time} ${name}`);
// };
// speak(); //arguments
// speak('Fahmed', 'morning');

//returning values
// const calArea = function(radius){
//     let area = 3.14* radius**2;
//     return area;
// };
// const areas = calArea(5);
// console.log(areas);

// const calcVol = function(areas){
//     console.log(areas);
// };
// calcVol(areas)

//Arrow Functions ------------------------------

// const calArea = function(radius){
//     let area = 3.14* radius**2;
//     return area;
// };

// const calcArea = (radius) => { //when there is only one parameters we can just write radius not (radius)
//     let area = 3.14* radius**2;
//     return area;
// };
// const a = calcArea(5);
// console.log('Area is:', a);

//Practice arrow functions. 
// const greet = function(){
//     return 'hello, world';
// };

// const greet =() => {
//     return 'hello, world';
// }
// const a = greet()
// console.log(a);


// const bill = function(products, tax){
//     let total = 0;
//     for(let i = 0; i<products.length; i++){
//         total += products[i] + products[i]*tax;
//     }
//     return total;
// }

// const bill = (products,tax)=> {
//     let total = 0;
//     for(let i = 0; i<products.length; i++){
//         total += products[i] + products[i]*tax;
//     }
//     return total;
// };
// const a = bill([5,6,7],'2.5');
// const b = bill([7,8,9],'3');
// console.log(a);
// console.log(b);

//functions--------------------------------------------- Differences
// const name = 'Fahmed';
// const greet = () => 'hello';
// let resultOne = greet();
// console.log(resultOne);

// //methods
// let resultTwo = name.toUpperCase();
// console.log(resultTwo);

// callbacks & foreach ----------------------------------------------
// const myFunc = (callBackFunc) =>{
//     let circumference  = 20.2;
//     let total = circumference / (3.1416*2);
//     callBackFunc(total);
// };
// myFunc(total =>{
//     console.log(total);
// });

//practice -- basic username and password check
// const login = (username, password)=>{
//     if(username!='' && password!=''){
//         console.log('Welcome', username)
//     }else{
//         console.log('Username/Password is not accurate')
//     }
// };
// const myName = login('Fahmed', '1234')

// //practice 2 -- basic ready check
// const yourAge= (name, age) => {
//     if(age < 18){
//         console.log(`${name} is ${age} years old. You are yet not ready`)
//     }else if(age == 18){
//         console.log(`${name} is ${age} years old. You are almost ready`)
//     }else{
//         console.log(`${name} is ${age} years old. You are way too ready`)
//     }
// };
// const result = yourAge('Fahmed', '18');
// console.log(result);

// //practice 3 

// const myFunc = (callbackFunc) =>{
//     let value = 90;
//     callbackFunc(value);
// };  
// myFunc(value=>{
//     console.log(value);
// });

// // array function callbacks foreach
// let people =['Fahmed', 'Rashid', 'False', 'Anu', 'Mirai']

// const logPerson = (person, index) =>{
//     console.log(`${index} - hello ${person}`)
// }
// people.forEach(logPerson);

// creating a list in the browser page. using foreach & callback function
const ul = document.querySelector('.people');
const people=['Fahmed', 'Rashid', 'False', 'Anu', 'Mirai'];

let html = ``;

people.forEach(person=>{
    //create html template
    html += `<li style="color: purple"> ${person} </li>`; // basic css added
});
console.log(html); //posting in the console for html var
ul.innerHTML = html; // saving in browser template






