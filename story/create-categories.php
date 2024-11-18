<?php
    session_start();
    
    include("../php/config.php");
    if(!isset($_SESSION['valid'])){
        header("Location: index.php");
       // exit();
    }
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="/login/css/mainstyle.css">
    <title>Create Category</title>
</head>
<body>
<!--Navbar begins -->
    <div class="nav">
 
        <div class="logo">
            <p><a href="../home.php">Logo</a></p>
        </div>
        <div class="right-links">
        <?php
             $id = $_SESSION['id'];
             $query = mysqli_query($con,"SELECT*FROM users WHERE Id=$id");
            //created a $query variable> used SELECT to grab the data of users and assigned them under $res_
            while($result = mysqli_fetch_assoc($query)){
                $res_Uname = $result['Username'];
                $res_Email = $result['Email'];
                $res_Age = $result['Age'];
                $res_Id = $result['Id'];
            }

            echo "<a href='../edit.php?Id=$res_Id'> Edit Profile</a>";
            ?>

            <a href="../php/logout.php"> <button class="btn"> Log out</button></a>

        </div>
    </div>
    <div class="container">
        <div class="box form-box">

        <?php   
            include("../php/config.php");
            if(isset($_POST['submit'])){
                $category_name = $_POST['category_name'];
                $category_type = $_POST['category_type'];
                $category_description = $_POST['category_description'];

                // Save to DB

                $category_verify = mysqli_query($con, "SELECT category_name FROM product_category WHERE category_name='$category_name'");
                if(mysqli_num_rows($category_verify) !=0){
                    echo "<div class='message'>
                        <p>This category Name is in use, Please try another one Please!</p>
                        </div> <br>";
                        echo "<a href='javascript:self.history.back()'><button class='btn'>Go Back</button></a>";
                }
                else{
                    mysqli_query($con, "INSERT INTO product_category(category_name,category_type,description) VALUES('$category_name','$category_type','$category_description')") or die("Error Bro!");
                    echo "<div class='message'>
                        <p>Product category was saved successfully!</p>
                        </div> <br>";
                        echo "<a href='home.php'><button class='btn'>Go home?</button></a>";
                }
            }else{
        ?>
                <header>Create category</header>
                <form action=""method="POST">
                    <div class="field input">
                        <label for="category_name">Category Name</label>
                        <input type="text" maxlength="40" name="category_name" id="category_name" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Missing category'" required>
                    </div>
                    <div class="field input">
                        <label for="category_type">Category Type</label>
                        <input type="text" maxlength="50" name="category_type" id="category_type" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Missing type'" required>
                    </div>
                    <div class="field input">
                    <label for="category_description">Description</label>
                    <textarea type="textarea" maxlength="500" name="category_description" id="category_description" class="textarea" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Enter a description...'"></textarea>
                    </div>
                    <div class="field ">
                        <input type="submit" name="submit" value="Save" required>
                    </div>
                    <div class="link" >
                        <button>Click Me</button>
                        Go back to list? <a href="../story/issue_list.php">Go Back</a>
                    </div>
                </form>
        </div>
        <?php } ?>
    </div>

    <footer>
    <div class="footer">
            <p>Patch 1.2</p>
        </div>
    </footer>

</body>
</html>