FROM node:carbon

RUN mkdir /app
WORKDIR /app

COPY package.json /app
RUN yarn install

COPY . /app

EXPOSE 8080

CMD ["yarn", "run", "start"]
