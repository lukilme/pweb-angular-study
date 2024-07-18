# Define source and destination folder paths
$sourceFolder = "C:\Users\Desktop\Desktop\lukilme\college\pweb-angular\teste"  # Replace with your actual source folder path
$destinationFolder = "C:\Users\Desktop\Desktop\lukilme\college\pweb-angular\teste1"  # Replace with your actual destination folder path

# Check if source folder exists
if (!(Test-Path $sourceFolder)) {
  Write-Host "Source folder '$sourceFolder' does not exist."
  exit
}

# Create destination folder if it doesn't exist
if (!(Test-Path $destinationFolder)) {
  New-Item -ItemType Directory -Path $destinationFolder
}

# Copy all files from source to destination (excluding subfolders by default)
Copy-Item -Path $sourceFolder\* -Destination $destinationFolder -Force

# To copy subfolders as well, uncomment the following line
# Copy-Item -Path $sourceFolder* -Destination $destinationFolder -Force -Recurse

Write-Host "Files copied successfully from '$sourceFolder' to '$destinationFolder'."
Remove-Item -Path $sourceFolder -Recurse