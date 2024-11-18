<?php
session_start();
include("../php/config.php");
if(!isset($_SESSION['valid'])){
    header("Location: index.php");
    exit();
}

// Include the attachment validation file
include('validation.php');
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="../css/story.css">
    <title>Create Category beta</title>
    <script src="../story/script.js"></script>
</head>
<body>
<?php $IPATH = $_SERVER["DOCUMENT_ROOT"]."../login/include/"; include($IPATH."navbar_top_2.php")?>

<div class="container">
    <div class="main-content">
        <h1>Create Issue Entry</h1>
        
        <?php
            $id = $_SESSION['id'];
            $query = mysqli_query($con, "SELECT * FROM users WHERE Id=$id");
            while ($result = mysqli_fetch_assoc($query)) {
                $res_Uname = $result['Username'];
                $res_Email = $result['Email'];
                $res_Age = $result['Age'];
                $res_Id = $result['Id'];
            }

            if(isset($_POST['submit'])){
                // Sanitize input values
                $subject_name = htmlspecialchars(trim($_POST['subject_name']));
                $story_description = htmlspecialchars(trim($_POST['story_description']));
                $impact_analysis = htmlspecialchars(trim($_POST['impact_analysis']));
                $testing_notes = htmlspecialchars(trim($_POST['testing_notes']));
                $story_examples = htmlspecialchars(trim($_POST['story_examples']));
                $filePathsString = null;

                // Validate and upload attachments
                if (isset($_FILES['story_attachments']) && !empty($_FILES['story_attachments']['name'][0])) {
                    $validationResult = validateAttachments($_FILES['story_attachments']);
                    if (is_array($validationResult) && isset($validationResult[0])) {
                        // Error during file validation
                        echo "<div class='message'><p>" . $validationResult[0] . "</p></div>";
                    } else {
                        // Successful validation - proceed with inserting into the database
                        $filePathsString = implode(',', $validationResult);
                    }
                } else {
                    $filePathsString = null;
                }

                // Check if the subject name already exists
                $category_subject_verify = mysqli_query($con, "SELECT subject_name FROM create_story_beta WHERE subject_name='$subject_name'");
                if(mysqli_num_rows($category_subject_verify) != 0){
                    echo "<div class='message'>
                            <p>This Title/Subject Name is in use, please update to something new.</p>
                          </div><br>";
                    echo "<a href='javascript:self.history.back()'><button class='btn'>Go Back</button></a>";
                } else { 
                    // Insert into DB
                    $insertQuery = "INSERT INTO create_story_beta(subject_name, story_description, impact_analysis, testing_notes, story_examples, story_attachments) 
                                    VALUES('$subject_name', '$story_description', '$impact_analysis', '$testing_notes', '$story_examples', '$filePathsString')";
                           /* echo "<pre>";
                            print_r($validationResult);
                            echo "</pre>";*/
                                    
                    if (mysqli_query($con, $insertQuery)) {
                        echo "<div class='message'>
                                <p>Issue was saved successfully!</p>
                              </div><br>";
                        echo "<a href='../story/create_story_beta.php'><button class='btn'>Create a new issue?</button></a>";
                    } else {
                        echo "<div class='message'><p>Error: " . mysqli_error($con) . "</p></div>";
                    }
                }
            } else {
        ?>

        <form action="" method="POST" enctype="multipart/form-data" id="story-form">
            <div class="field">
                <label for="subject_name">Subject</label>
                <input type="text" id="subject_name" name="subject_name" placeholder="Enter Title">
            </div>
            <div class="field">
                <label for="story_description">Description</label>
                <textarea id="story_description" name="story_description" placeholder="Enter description"></textarea>
            </div>
            <div class="field">
                <label for="impact_analysis">Impact Analysis</label>
                <input type="text" id="impact_analysis" name="impact_analysis" placeholder="Enter a brief description">
            </div>
            <div class="field">
                <label for="testing_notes">Testing Notes</label>
                <textarea id="testing_notes" name="testing_notes" placeholder="Testing notes..."></textarea>
            </div>
            <div class="field">
                <label for="story_examples">Examples</label>
                <textarea id="story_examples" name="story_examples" placeholder="Provide examples..."></textarea>
            </div>
            <div class="field">
                <label for="story_attachments">Attachments</label>
                <input type="file" id="story_attachments" name="story_attachments[]" multiple>
                <ul id="file-list"></ul> <!-- Display file list -->
                <div id="upload-progress" class="">
                    <progress id="progress-bar" value="0" max="200"></progress>
                    <span id="progress-status"></span>
                </div>
            </div>
            <button type="submit" name="submit" class="btn">Save</button>
        </form>
        <?php } ?>
    </div>

</div>

<footer>
    <div class="footer">
        <p>Patch 1.5</p>
    </div>
</footer>
</body>
</html>
