# Build the website locally
sudo jekyll --no-server --no-auto

# Go to the gh-pages branch
sudo git checkout gh-pages

# Remove all files under version control
sudo git rm -rf .

# Move files from folder _site/ to root
sudo mv _site/* .

# Removing _site/ folder
sudo rm -rf _site/

# Commit changes to gh-pages branch
sudo git add . && git commit -m "Regenerate" && git push origin gh-pages

# Goes back to master branch: git checkout new
sudo git checkout new