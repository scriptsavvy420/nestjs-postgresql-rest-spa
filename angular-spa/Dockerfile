# Stage 1: build
FROM node:20 AS development

WORKDIR /myapps/angular-spa/src/app

COPY package*.json ./

RUN npm install
RUN npm install -g @angular/cli@12.0.0

COPY . .

RUN npm run build

EXPOSE 4200
