<?php
    session_start();
    
    include("php/config.php");
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
    <link rel="stylesheet" href="../login/css/mainstyle.css">
    <title>Home</title>
</head>
<body>
    <div class="nav">
        <div class="logo">
            <p><a href="home.php">Logo</a></p>
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

            echo "<a href='edit.php?Id=$res_Id'> Edit Profile</a>";
            ?>

            <a href="php/logout.php"> <button class="btn"> Log out</button></a>

        </div>
    </div>
    
    <main>
        <div class="main-box top">
            <div class="top">
                <div class="box">
                    <p>Hello <?php echo $res_Uname ?>, Welcome </p>
                </div>
                <div class="box">
                    <p>Your Email is <?php echo $res_Email ?></p>
                </div>
            </div>
            <div class="bottom">
                <div class="box">
                    <p>And you are <b><?php echo $res_Age ?> Years old </b> </p>
                </div>
            </div>
        </div>

        <div class="main-box top">
            <div class="top">
                <div class="box">
                <p>Hello <?php echo $res_Uname ?>, Welcome. Click here to acess the product releases <a href="../login/story/issue_list.php">Story</a> </p>
                </div>
                <div class="box">
                <p>Hello <?php echo $res_Uname ?>, Welcome Click here to acess the product bugs <a href="#">Bugs</a></p>
                </div>
            </div>
        </div>
        <footer>
    <div class="footer">
            <p>Patch 1.2</p>
        </div>
    </footer>
    </main>
</body>
</html>