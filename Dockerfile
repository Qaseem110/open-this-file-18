FROM oven/bun:alpine AS builder
WORKDIR /app

COPY package.json bun.lock ./
RUN bun install --frozen-lockfile

COPY . .
RUN bun run build

FROM nginx:alpine
# Built files ko Nginx mein copy karein
COPY --from=builder /app/.output/public /usr/share/nginx/html

# Nginx ko kahein ke healthsahoolat.html ko as main index page serve kare
RUN echo 'server { \
    listen 80; \
    location / { \
        root /usr/share/nginx/html; \
        index healthsahoolat.html index.html; \
        try_files $uri $uri/ /healthsahoolat.html /index.html; \
    } \
}' > /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
