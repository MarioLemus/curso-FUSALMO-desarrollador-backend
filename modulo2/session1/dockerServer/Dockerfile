FROM node:latest

WORKDIR /home/app

COPY package*.json .

COPY . .

RUN npm install

CMD [ "npm", "start" ]