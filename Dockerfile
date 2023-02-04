FROM node:alpine

WORKDIR /app

COPY ./package*.json ./

RUN npm i

COPY . .

RUN npm run test

CMD ["npm", "start"]