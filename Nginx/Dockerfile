# ---------- Stage 1: build the React frontend ----------
FROM node:22-alpine AS build
WORKDIR /app
COPY Frontend/package.json Frontend/package-lock.json ./
RUN npm ci
COPY Frontend/ .
RUN npm run build

# ---------- Stage 2: Nginx serves the build and proxies the backend ----------
FROM nginx:alpine
COPY Nginx/nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist /usr/share/nginx/html