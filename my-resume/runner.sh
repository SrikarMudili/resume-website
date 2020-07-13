#!/bin/bash
 
# Step #1
# Build react app
npm run build

# Step1.5:
# Clean up the old static folder
rm -rf ../static

# Step2:
# Move build folder into static folder
mv build ../static

# Step2.5:
# Go back to resume website
cd ../


# Step3:
# Commit the changes
git add .
git commit -m "more progress"
git pull
git push