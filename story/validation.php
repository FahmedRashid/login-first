<?php
function validateAttachments($files) {
    $uploadDir = "uploads/"; // Upload folder path
    $allowedExtensions = ['jpg', 'jpeg', 'png', 'gif', 'pdf', 'docx', 'xlsx', 'mp4', 'avi', 'mkv']; // Allowed file extensions (include video formats)
    $filePaths = []; // Initialize an array to hold file paths
    $maxFileSize = 100 * 1024 * 1024; // 100MB max file size

    foreach ($files['name'] as $key => $fileName) {
        $fileTmpName = $files['tmp_name'][$key];
        $fileSize = $files['size'][$key];
        $fileError = $files['error'][$key];
        $fileExtension = strtolower(pathinfo($fileName, PATHINFO_EXTENSION));

        // Check for errors in file upload
        if ($fileError !== UPLOAD_ERR_OK) {
            return ["Error in uploading file $fileName"];
        }

        // Validate file size
        if ($fileSize > $maxFileSize) {
            return ["File $fileName is too large. Maximum allowed size is 100MB."];
        }

        // Validate file type
        if (!in_array($fileExtension, $allowedExtensions)) {
            return ["File $fileName has an invalid file type. Allowed types are JPG, PNG, GIF, PDF, DOCX, XLSX, MP4, AVI, MKV."];
        }

        // Generate a unique file name
        $fileNewName = uniqid('', true) . "." . $fileExtension;
        $fileDestination = $uploadDir . $fileNewName;

        // Move the uploaded file to the destination
        if (move_uploaded_file($fileTmpName, $fileDestination)) {
            $filePaths[] = $fileDestination; // Add the file path to the array
        } else {
            return ["Error uploading file $fileName"];
        }
    }

    return $filePaths;
}

?>
