//Control flow---------------------------------- loop and if/else

//for loops
// for(let i = 0; i < 5; i++){
//     console.log('in loop', i)
// }
// console.log('loop is finished');

//const names = ['fahmed', 'rashid', 'anu'];

// if(names[0] !== ''){
// for(let i = 0; i < names.length; i++){
//     console.log(names[i])
// }
// }

// for(let i = 0; i < names.length; i++){
//     console.log(names[i])
//     let html = `<div>${names[i]}</div>`
//     console.log(html)
// }

//While loop
// const names = ['fahmed', 'rashid', 'anu'];
// let i = 0;
// while(i < 5){
//     console.log('in loop', i)
//     i++;
// }

// let i = 0;
// while(i < names.length){
//     console.log(names[i])
//     i++;
// }

//DO WHILE -- if you atleast one to run the code once.

// let i = 0;
// do{
//     console.log('val of i is', i);
//     i++;
// }while(i < 5);

// -------------------------------------------------------------------
// if statements
// const age = 25;

// if(age >= 20){
//     console.log('you are gay');
// }

// const ninjas = ['fahmed', 'rashid', 'anu', 20]

// if(ninjas.length>2){
//     console.log('you are gay');
// }

// let i = ninjas.length
// let a=0;
// if(i => 3){
//     while(a<i){
//         console.log(ninjas[a], typeof ninjas[a])
//         a++;
//     }
// }else{
//     console.log(console.error('you got an error')
//     )
// }


// password check
const password = 'asasdda@a';
const pass_length = 8;
const special_char = ['!','@','#','$','%','^','&','*','(',')','-','_'];

// if(password.length >=12){
//     console.log("This password is very Strong!.")
// }else if(password.length >= pass_length){
//     console.log("This password is long enough.")
// }else{
//     console.log("Weak Password! Try again")
// }

// logical operators - OR || and AND &&

// if(password.length >=12 && password.includes('@')){
//     console.log("This password is very Strong!.")
// }else if(password.length >= pass_length && password.includes('@')){
//     console.log("This password is long enough.")
// }else{
//     console.log("Weak Password! Try again")
// }

//logical NOT (!)
// let user = false;
// if(!user){
//     console.log('you must be logged in')
// }
// console.log(!true);
// console.log(!false);

// break and continue
// const scores= [50,25,0,30,100,20,10];
// for(i = 0; i<scores.length; i++){

//     if(scores[i] === 0){ // will avoid the value 0
//         continue;
//     }
//     console.log('Your score is:', scores[i])

//     if(scores[i] === 100){
//         console.log('Congrats, you got the top scores')
//         break; // breaks after 100
//     }
// }

//Switch statements
// const grade = 'A';
// switch(grade){
//     case 'A':
//         console.log('You got an A!');
//         break;
//     case 'B':
//         console.log('You got an B!');
//         break;
//     case 'C':
//         console.log('You got an C!');
//         break;
//     case 'D':
//         console.log('You got an D!');
//         break;
//     case 'F':
//         console.log('You got an F!');
//         break;
//     default:
//         console.log('Not a valid Grade');
        
// }


//variables & block scope // same rules apply for const
let age = 30; // same rules apply for const

console.log('outside codeblock:', age, name);
if(true){
    let name ='fahmed';
    let age = 50; //declared again inside a codeblock called local scope
    console.log('inside codeblock:', age, name);

    if(true){
        let age = 60;
        console.log('inside 2nd codeblock:', age, name);
    }
}
console.log('outside codeblock:', age);