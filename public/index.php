<?php
// This file can be used on PHP-enabled servers as an alternative to .htaccess
// for displaying the directory contents or serving index.html

// First try to serve the index.html file
$indexFile = __DIR__ . '/index.html';

if (file_exists($indexFile)) {
    // If index.html exists, serve it
    readfile($indexFile);
} else {
    // Otherwise, display directory contents
    echo '<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Directory Listing - Pollen</title>
    <style>
        body {
            font-family: "Inter", -apple-system, BlinkMacSystemFont, sans-serif;
            background-color: #0B0B19;
            color: #FFFFFF;
            padding: 20px;
            max-width: 1200px;
            margin: 0 auto;
        }
        h1 {
            color: #5B8AF9;
            margin-bottom: 30px;
        }
        .directory-list {
            background: rgba(255,255,255,0.05);
            border-radius: 8px;
            padding: 20px;
        }
        .directory-list a {
            display: block;
            padding: 10px;
            color: #AAAACC;
            text-decoration: none;
            border-bottom: 1px solid rgba(255,255,255,0.05);
            transition: all 0.3s ease;
        }
        .directory-list a:hover {
            background: rgba(255,255,255,0.05);
            color: #FFFFFF;
        }
    </style>
</head>
<body>
    <h1>pollen - Directory Contents</h1>
    <div class="directory-list">';
    
    // Get directory contents
    $files = scandir(__DIR__);
    foreach ($files as $file) {
        // Skip hidden files and current/parent directory entries
        if ($file[0] !== '.' && $file !== 'index.php') {
            echo '<a href="' . htmlspecialchars($file) . '">' . htmlspecialchars($file) . '</a>';
        }
    }
    
    echo '</div>
</body>
</html>';
}
