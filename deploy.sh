read -p "Enter the name of branch you want to deploy: " branch_name
git pull origin $branch_name
ng build --prod --aot
cd ..
rm -rf cynthesize/dist
mv cynthesize-frontend/dist cynthesize
cd cynthesize
gcloud app deploy
