function test(){
    var forCategory = document.getElementById('forcategory').value;
    if (forCategory.trim() === ""){
        alert("Please enter a category name");
    }
    else{
        alert("Thank you for adding something." + " " +forCategory);
    }
};





