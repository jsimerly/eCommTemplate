FROM node:18 AS build

WORKDIR /frontend

COPY package*.json ./
RUN npm ci

COPY . .
RUN npm run build

FROM nginx:latest

COPY --from=build /frontend/dist /var/www/frontend
COPY nginx.conf /etc/nginx/conf.d/default.conf


