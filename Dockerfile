FROM node:alpine
WORKDIR /vue/app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 8000

CMD [ "npm", "run", "dev", "--host"]

