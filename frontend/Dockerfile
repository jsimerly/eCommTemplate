FROM node:18 AS build

WORKDIR /frontend

COPY package*.json ./
RUN npm ci

COPY . .
RUN npm run build

#ENGINE X
FROM nginx:stable

COPY nginx.conf etc/nginx/conf.d/default.conf

COPY --from=build /frontend/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]


