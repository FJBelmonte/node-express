FROM node:16-alpine3.12

WORKDIR /usr/api

COPY . .

RUN npm install
RUN npx knex migrate:latest


CMD ["npm", 'run-script','swagger-autogen']