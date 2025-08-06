# syntax=docker/dockerfile:1

FROM node:16-buster-slim

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 4004 4001 3001 3002

CMD ["bun", "start"]

