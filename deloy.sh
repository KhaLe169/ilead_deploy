# npm install pm2 -g

# # Path: deloy.sh
# pm2 startOrRestart ecosystem.config.js --env production


docker build . -t "ilead-app:v1.0"

docker run -p 3000:3000 ilead-app:v1.0
