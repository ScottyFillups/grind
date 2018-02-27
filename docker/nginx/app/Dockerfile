FROM node:carbon

WORKDIR /app
COPY ./ ./
RUN yarn install

EXPOSE 8080

CMD ["yarn", "run", "start"]
