# Stage 1
FROM node:latest AS builder

WORKDIR /app

COPY package*.json ./
COPY index.js ./

RUN npm install

# Stage 2
FROM node:latest

WORKDIR /app

COPY --from=builder /app .

ENV DOCKERIZE_VERSION v0.7.0

RUN apt-get update \
    && apt-get install -y wget \
    && wget -O - https://github.com/jwilder/dockerize/releases/download/$DOCKERIZE_VERSION/dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz | tar xzf - -C /usr/local/bin \
    && apt-get autoremove -yqq --purge wget && rm -rf /var/lib/apt/lists/*