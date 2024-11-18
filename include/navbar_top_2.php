<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="../css/nav_top.css">
    <title>Exclusive Navigation Bar</title>
</head>
<body>
    <nav class="navbar">
        <div class="navbar-logo">
            <img src="../Image/Fahmed.ico" alt="Logo"> 
        </div>
        <div class="navbar-search">
            <input type="text" placeholder="Search...">
            <button class="search-btn">Search</button>
        </div>
        <div class="navbar-tabs">
            <div class="dropdown">
                <button class="dropbtn">Work</button>
                <div class="dropdown-content">
                    <a href="#">Test 1</a>
                    <a href="#">Test 2</a>
                </div>
            </div>
            <div class="dropdown">
                <button class="dropbtn">About</button>
                <div class="dropdown-content">
                    <a href="#">Test 1</a>
                    <a href="#">Test 2</a>
                </div>
            </div>
            <div class="dropdown">
                <button class="dropbtn">Insights</button>
                <div class="dropdown-content">
                    <a href="../story/create_story.php">Create Issue</a>
                    <a href="../story/create-categories.php">Create Category</a>
                </div>
            </div>
        </div>
        <div class="navbar-icons">
            <button class="icon-button notification-icon">🔔</button>
            <button class="icon-button email-icon">✉️</button>
            <div class="profile-dropdown">
                <img src="../Image/Fahmed.ico" alt="Profile Logo" class="profile-icon" style="height: 40px; cursor: pointer;">
                <div class="dropdown-content">
                    <a href="#">My Profile</a>
                    <a href="#">Support</a>
                    <a href="#">Personal Information</a>
                    <a href="../php/logout.php"> <button class="btn"> Log out</button></a>
                </div>
            </div>
        </div>
    </nav>
</body>
</html>
