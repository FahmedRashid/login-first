<?php
    session_start();
    include("php/config.php");
    if(!isset($_SESSION['valid'])){
        header("Location: index.php");
    }
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="../login/css/mainstyle.css">
    <link rel="stylesheet" href="../login/css/nav_top.css">
    <title>Change Profile</title>
</head>
<body>

    <div class="nav">
        <div class="logo">
            <p><a href="home.php">Logo</a></p>
        </div>
        <div class="right-links">
            
            <a href="php/logout.php"> <button class="btn"> Log out</button></a>
        </div>
    </div>
    

    <div class="container">
        <div class="box form-box">

            <?php
            //Creating a POST to receive data from the form
                if(isset($_POST['submit'])){
                    $username = $_POST['username'];
                    $email = $_POST['email'];
                    $age = $_POST['age'];

                    $id = $_SESSION['id'];
                    //Updating the values
                    $edit_query = mysqli_query($con,"UPDATE users SET Username='$username', Email= '$email', Age = '$age' WHERE Id= $id") or die("Error Bro!");

                    //confirming update
                if($edit_query){
                    echo "<div class='message'>
                    <p>Update was successful</p>
                    </div> <br>";
                    echo "<a href='javascript:self.history.back()'><button class='btn'>Lets go home?</button>";
                }
                }
            ?>
                <header>Change Profile</header>
                <form action=""method="POST">
                    <div class="field input">
                        <label for="username">Username</label>
                        <input type="text" name="username" id="username" autocomplete="off" required>
                    </div>
                    <div class="field input">
                        <label for="email">Email</label>
                        <input type="text" name="email" id="email" autocomplete="off" required>
                    </div>
                    <div class="field input">
                        <label for="age">Age</label>
                        <input type="text" name="age" id="age" autocomplete="off" required>
                    </div>
                    <div class="field ">
                        <input type="submit" name="submit" value="Update" required>
                    </div>
                </form>
        </div>
    </div>
    <footer>
    <div class="footer">
            <p>Patch 1.2</p>
        </div>
    </footer>
</body>
</html>