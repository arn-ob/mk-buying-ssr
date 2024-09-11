FROM node:22-alpine3.19

WORKDIR /usr/src/app

ADD ./package.json ./

COPY . .

COPY .env.prod .env

RUN npm install -f

RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]