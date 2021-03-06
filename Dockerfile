FROM node:slim

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . /app

CMD [ "node", "server.js"]