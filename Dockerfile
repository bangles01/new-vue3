FROM node:16.17-buster as build-stage

WORKDIR /usr/src/app
COPY front/package*.json ./
RUN npm install

COPY .env .env
COPY front/ .
RUN npm run build

# Nginx
FROM nginx:alpine

COPY --from=build-stage /usr/src/app/dist /usr/share/nginx/html
COPY front/nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
