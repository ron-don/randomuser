#Define nginx image to be used
FROM nginx:1.17.1-alpine
# Copying compiled code and nginx config to different folder
# NOTE: This path may change according to your project's output folder 
COPY /dist/randomuser /usr/share/nginx/html