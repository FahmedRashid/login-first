// Object literals

// let user = { // object liternal creation
//     name: 'Fahmed', //name is the key fahmed is the value// key value pair
//     age: 30,
//     email: 'admin@gmail.com',
//     location: 'Dhaka',
//     blogs: ['Why mac and cheese rules', '10 things to do with Fahmed']
// };
// console.log(user);
// console.log(user.name); // dot notation
// user.age = 35;
// console.log(user.age);
// console.log(user['email']);
// user['name'] = 'anu';
// console.log(user['name']);
// const key = 'location';
// console.log(user[key])
// console.log(typeof user); //type of

// how to add method in objects -------------------------------------

// let user = { // object liternal creation
//     name: 'Fahmed', //name is the key fahmed is the value// key value pair
//     age: 30,
//     email: 'admin@gmail.com',
//     location: 'Dhaka',
//     blogs: [ // blogs can contain objects too
//         {title: 'Why mac and cheese rules', likes: 30},
//         {title: '10 things to do with Fahmed', likes: 50},
//     ],
//     login: () =>{
//         console.log('the user logged in');
//     },
//     logout(){ // we can also do just logout()
//         console.log('the user logged out');
//     }, 
//     logBlogs: function(){ // cannot use arrow function when we use this(context object)
//         // this.blogs //this is context object
//         console.log('this user has written the following blogs');
//         this.blogs.forEach(blogs => {
//             console.log(blogs.title, blogs.likes);
//         })
//     }
// };
// user.login();
// user.logout();
// user.logBlogs();
// console.log(user.name);
// user.name = 'haha';
// console.log(user.name);


//Array can also have objects stored into them
// const blogs = [
//     {title: 'Why mac and cheese rules', likes: 30},
//     {title: '10 things to do with Fahmed', likes: 50},
// ];

// console.log(blogs)

// Math object -- pre-made

// console.log(Math);
// console.log(Math.PI);
// console.log(Math.E);

// const area = 7.7;
// console.log(Math.round(area)); // round
// console.log(Math.floor(area)); // smallest int
// console.log(Math.ceil(area)); // largest int
// console.log(Math.trunc(area)); // only int

// random numbers generation
// const random = Math.random();
// console.log(random); // any random between 0 - 1
// console.log(Math.round(random*100)); //random between 1-100


// primitive values

// let scoreOne = 50;
// let scoreTwo = scoreOne;

// console.log(
//     `scoreOne: ${scoreOne}`,
//     `scoreTwo: ${scoreTwo}`
// )
// scoreOne = 100;
// console.log(
//     `scoreOne: ${scoreOne}`,
//     `scoreTwo: ${scoreTwo}`
// )

//reference values
// const userOne={
//     name: 'ryu',
//     age: 30
// };
// const userTwo = userOne;
// console.log(userOne, userTwo);
// userOne.age = 40;
// userOne.name = 'Fahmed'
// console.log(userOne, userTwo);