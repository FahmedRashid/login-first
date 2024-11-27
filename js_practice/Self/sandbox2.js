// In this challenge, you'll be developing an inventory application for a bookstore. 

// You need to create a book class, which provides information about different books in the store. 

// Each book will have a title, author, ISBN, and keep track of the number of available copies. 

// You'll need a way to get each book's availability. If there aren't any copies of the book left, the function should return "out of stock."
 
// If there are less than 10 copies, the function should return "low stock." Otherwise, the function should return "in stock." 

// You'll also need a function for selling a book. This will take the number of copies sold, and subtract it from the total number of copies. If no argument is passed, we can default the number of copies to sell to one. 

// Lastly, you'll want a restock function, which takes in a number of copies to restock, and adds it to the total number of copies. If no argument is passed, we can default the restock number to five.
//One way to do it is with function
// function Book(title, author, ISBN, numCopies){
//     this.title = title;
//     this.author = author;
//     this.ISBN = ISBN;
//     this.numCopies = numCopies;
// }
// Book.prototype.getAvailability = function(){
//     if(this.numCopies === 0){
//         return "Out of stock";
//     }else if(this.numCopies < 10){
//         return "Low Stock";
//     }
//     return "In stock";
// }


// Book.prototype.sell = function(numCopiesSold = 1){
//     this.numCopies -= numCopiesSold;
// }
// Book.prototype.restock = function(numCopiesStocked = 5){
//     this.numCopies += numCopiesStocked;
// }
// const HungerGames = new Book("Hunger Games", "Suzanne Collins", 123919, 5);
// console.log(HungerGames.getAvailability());

// HungerGames.restock(12);
// console.log(HungerGames.getAvailability());

// HungerGames.sell(17);
// console.log(HungerGames.getAvailability());

// 2nd way would be to do it with class and constructors.
// class Book{
//     constructor(title, author, ISBN, numCopies){
//         this.title = title;
//         this.author = author;
//         this.ISBN = ISBN;
//         this.numCopies = numCopies
//     }

//     get availibility(){
//         return this.getAvailability();
//     }

//     getAvailability(){
//         if(this.numCopies === 0){
//             return "Out of stock";
//         }else if(this.numCopies < 10){
//             return "Low stock";
//         }
//         return "In Stock";
//     }
//     sell(numCopiesSold = 1){
//         this.numCopies -= numCopiesSold;
//     }
//     restock(numCopiesStocked = 5){
//         this.numCopies += numCopiesStocked;
//     }
// }

// const HungerGames = new Book("Hunger Games", "Suzanne Collins", 123919, 5);
// console.log(HungerGames.getAvailability());

// HungerGames.restock(100);
// console.log(HungerGames.getAvailability());

// HungerGames.sell(96);
// console.log(HungerGames.getAvailability());

// Prototype ---------------------------------------
// Task is to create a movie object that takes in five arguments: title, director, genre, release year, and rating. 

// The movie prototype should have a function called get overview, which logs the following overview for each film. Movie, a genre film directed by director was released in release year. 

// It received a rating of rating. You can use either class or function syntax to create your prototype. 

// Once you create your movie object, create a few movies to test it out. 


class Movie{
    constructor(title, director, genre, releaseYear, rating){
        this.title = title;
        this.director = director;
        this.genre = genre;
        this.releaseYear = releaseYear;
        this.rating = rating;
    }
    getOverview(){
        return `${this.title}, a ${this.genre} film directed by ${this.director}, was 
        released in ${this.releaseYear}. It received a rating of ${this.rating}.`;
    }
}
//creating movie instances
const movie1 = new Movie("Inception", "Christopher Nolan", "Sci-Fi", 2010, 8.8);
const movie2 = new Movie("The Dark Knight", "Christopher Nolan", "Action", 2008, 9.0);
const movie3 = new Movie("Parasite", "Bong Joon-ho", "Thriller", 2019, 8.6);
const movie4 = new Movie("Test1", "Test1", "Test1", 1969, 6);
const movie5 = new Movie("Test2", "Test2", "Test2",1969, 9);

console.log(movie1.getOverview());
console.log(movie2.getOverview());
console.log(movie3.getOverview());





