<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="../css/style.css"> <!-- Use the updated CSS file -->
    <title>Bug List</title>
</head>
<body>
    <!-- Navbar -->
    <?php $IPATH = $_SERVER["DOCUMENT_ROOT"]."../login/include/"; include($IPATH."navbar_top_2.php")?>
    
    <!-- Main Container -->
    <div class="container">
        <div class="main-content">
            <h1>Bug List</h1>
            <table class="bug-table">
                <thead>
                    <tr>
                        <th>Status</th>
                        <th>Subject</th>
                        <th>Short Description</th>
                        <th>Assignee</th>
                        <th>Reporter</th>
                        <th>Priority</th>
                        <th>Sprint</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><span class="status open">Open</span></td>
                        <td>Button Misalignment</td>
                        <td>The submit button is misaligned on mobile view.</td>
                        <td>John Doe</td>
                        <td>Jane Smith</td>
                        <td>High</td>
                        <td>Sprint 5</td>
                    </tr>
                    <tr>
                        <td><span class="status in-progress">In Progress</span></td>
                        <td>Login Issue</td>
                        <td>Users unable to log in after recent update.</td>
                        <td>Emily Brown</td>
                        <td>Michael Scott</td>
                        <td>Critical</td>
                        <td>Sprint 5</td>
                    </tr>
                    <tr>
                        <td><span class="status closed">Closed</span></td>
                        <td>Profile Picture Upload</td>
                        <td>Error when uploading profile pictures.</td>
                        <td>Chris Lee</td>
                        <td>Pam Beesly</td>
                        <td>Medium</td>
                        <td>Sprint 4</td>
                    </tr>
                    <!-- Additional rows as needed -->
                </tbody>
            </table>
            <button type="submit" class="btn"><a href="../story/create_story.php">Submit an issue</a></button>
            <button type="submit" class="btn"><a href="../home.php">Go back?</a></button> 
        </div>
        <?php $IPATH = $_SERVER["DOCUMENT_ROOT"]."../login/include/"; include($IPATH."footer_bot.php")?>
    </div>
</body>
</html>
