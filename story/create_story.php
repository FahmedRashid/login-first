<?php
    session_start();
    include("../php/config.php");
    if(!isset($_SESSION['valid'])){
        header("Location: index.php");
    }
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
     <link rel="stylesheet" href="../css/story.css">
    <title>Issue Tracker</title>
</head>
<body>
        <!-- Navbar 2.0 taken direcrly from the include folder -->
    
        <?php $IPATH = $_SERVER["DOCUMENT_ROOT"]."../login/include/"; include($IPATH."navbar_top_2.php")?>
        <div>
        <div class="container">
            <div class="main-content">
             <h1>Create Issue Entry</h1>
             <form action="" method="POST">
                <div class="field">
                    <label for="subject">Subject/Title</label>
                    <input type="text" id="subject" name="subject" placeholder="Enter Title"></input>
                </div>
                <div class="field">
                    <label for="description">Description</label>
                    <textarea id="description" name="description" placeholder="Describe the Issue"></textarea>
                </div>
                <div class="field">
                    <label for="impact_analysis">Impact Analysis</label>
                    <textarea id="impact_analysis" name="impact_analysis" placeholder="Impact details..."></textarea>
                </div>
                <div class="field">
                    <label for="testing_notes">Testing Notes</label>
                    <textarea id="testing_notes" name="testing_notes" placeholder="Testing notes..."></textarea>
                </div>
                <div class="field">
                    <label for="examples">Examples</label>
                    <textarea id="examples" name="examples" placeholder="Provide examples..."></textarea>
                </div>
                <div class="field">
                    <label for="attachments">Attachments</label>
                    <input type="file" id="attachments" name="attachments" multiple>
                </div>
                <div class="field">
                    <label for="linked_issues">Linked Issues</label>
                    <input type="text" id="linked_issues" name="linked_issues" placeholder="Linked issues...">
                </div>
                <div class="field">
                    <label for="activity">Activity</label>
                    <textarea id="activity" name="activity" placeholder="Activity details..."></textarea>
                </div>
                <button type="submit" class="btn">Submit</button>
                </form>
            </div>
        <!-- Sidebar Section -->
         <div class="sidebar">
            <H2>Details</H2>
            <div class="sidebar-item">
                <label>Sprint</label>
                <input type="text" name="sprint" placeholder="Sprint name">
            </div>
            <div class="sidebar-item">
                <label>Assignee</label>
                <input type="text" name="assignee" placeholder="Assignee">
            </div>
            <div class="sidebar-item">
                <label>Reporter</label>
                <input type="text" name="reporter" placeholder="Reporter">
            </div>
            <div class="sidebar-item">
                <label>Test Owner</label>
                <input type="text" name="test_owner" placeholder="Test Owner">
            </div>
            <div class="sidebar-item">
                <label>QA Done?<input type="checkbox" name="qa-done"></label>
            </div>
            <div class="sidebar-item">
                <label>Demo Done?<input type="checkbox" name="demo-done"></label>
            </div>
            <div class="sidebar-item">
                <label>Category Name</label>
                <input type="text" name="category_name" placeholder="Category">
            </div>
            <div class="sidebar-item">
                <label>Parent</label>
                <input type="text" name="parent" placeholder="Parent issue">
            </div>
            <div class="sidebar-item">
                <label>Priority</label>
                <select name="priority">
                    <option value="high">High</option>
                    <option value="medium">Medium</option>
                    <option value="low">Low</option>
                </select>
            </div>
         </div>
    </div>
    </div>
    <footer>
    <div class="footer">
            <p>Patch 1.3</p>
        </div>
    </footer>
</body>
</html>