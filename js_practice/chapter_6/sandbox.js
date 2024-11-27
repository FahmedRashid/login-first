//grab single element
// const para = document.querySelector('.error');
// console.log(para);
// const param = document.querySelector('div.error');
// console.log(param);
// const parame = document.querySelector('body > h1');
// console.log(parame);

//grab multiple elements
// const paras = document.querySelectorAll('p')
// console.log(paras)
// console.log(paras[0])
// console.log(paras[1])
// paras.forEach(para =>{
//     console.log(para);
// });
// const errors= document.querySelectorAll('.error');
// console.log(errors)

// get an element by ID -----------------------------------------
// const title = document.getElementById('page-title');
// console.log(title);

// get an element by their class name -----------------------------------------
// const errors = document.getElementsByClassName('error');
// console.log(errors);
// console.log(errors[0]);

// get an element by their tag name -----------------------------------------
// const paras = document.getElementsByTagName('p')
// console.log(paras);
// console.log(paras[0]);
// console.log(paras[1]);
// console.log(paras[2]);

//change para information
// const para= document.querySelector('p');

// console.log(para.innerText);
// console.log(para.innerText);
// para.innerText = 'ninjas are awesome';

//change multiple para info
// const paras = document.querySelectorAll('p');
// paras.forEach(para =>{
//     console.log(para.innerText);
//     para.innerText += ' new text';
//     // console.log(para)
// })
// for divs
// const content = document.querySelector('.content');
// // console.log(content.innerHTML);
// content.innerHTML += '<h2>This is a new h2</h2>'// if you want to appeand
// content.innerHTML = '<h2>This is a new h2</h2>'

////for arrays
// const content = document.querySelector('.content');
// const people = ['fahmed', 'anu', 'rashid'];
// people.forEach(person =>{
//     content.innerHTML += `<p>${person}</p>`;
// });

// for a tags 
// const link= document.querySelector('a')
// console.log (link.getAttribute('href'))// arrtirbute and arguments are needed.
// link.setAttribute('href', 'https://www.thenetninja.co.uk')
// link.innerText = 'The Net ninja website'

// const mssg = document.querySelector('p');
// console.log(mssg.getAttribute('class'));
// mssg.setAttribute('class', 'succuss');
// console.log(mssg.getAttribute('class'));

// mssg.setAttribute('style', 'color: green')// setting a style on a single tag

//if try to add a new style attribute

// const title = document.querySelector('h1')

// // title.setAttribute('style', 'margin: 50px')// this overwirtes the previous style. 
// console.log(title.style);
// console.log(title.style.color); //to check the color in console

// title.style.margin = '50px'; // this just added the margin keeping the previous css intact
// title.style.color = 'crimson'; //updating the exisiting color
// title.style.fontSize= '60px'; // in css it is font-size but in js its camelcase such as fontSize
// title.style.margin= '';

//add and remove classes from elements using style.css
// const content = document.querySelector('p');
// console.log(content.classList);
// content.classList.add('errors')//adding a class
// content.classList.remove('error')//remove a class
// content.classList.add('succuess')//remove a class

//practice to add error and success tags on p
// const param = document.querySelectorAll('p');
// param.forEach(para=>{
//     console.log(para)
// });
// param[0].classList.add('error')
// param[1].classList.add('success')
// // param[2].classList.length === 0;
// const abc = param[2].classList.length;
// if(abc !== 0){
//     console.log('This has a value');
// }else{
//     param[2].classList.add('lorem');
//     console.log(param[2]);
// }
// param[3].classList.add('success')
// param[4].classList.add('error')
// param[5].classList.add('lorem')
// param[6].classList.add('error')
// param[7].classList.add('success')
// console.log(param.classList);


// using if else to include class error to text content 
// const paras= document.querySelectorAll('p');
// paras.forEach(p =>{
//     // console.log(p)
//     if(p.textContent.includes('error')){
//         p.classList.add('error');
//     }
//     if(p.textContent.includes('success')){
//         p.classList.add('success');
//     }else{
//         p.classList.add('lorem')
//     }
// });
// const title = document.querySelectorAll('.title');
// title[0].classList.toggle('test');
// title[0].classList.toggle('test');









