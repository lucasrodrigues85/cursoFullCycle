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

CMD [ "node", "index.js" ]