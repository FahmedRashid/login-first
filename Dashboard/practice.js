//basic alert function
function showAlert(){
    alert("Test");
};

//perameters
function popupFortest(a, b){
    var c=5+6;
    alert (`The answer to a plus b is "${c}"`);
    return 0;
};

// a function to test if the value is accuratly given.
function test(){
    var forCategory = document.getElementById('forcategory').value;
    if (forCategory.trim() === ""){
        alert("Please enter a category name");
    }
    else{
        alert("Thank you for adding something." + " " +forCategory);
    }
};