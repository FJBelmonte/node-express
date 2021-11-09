FROM node:16.13.0

WORKDIR /usr/api

COPY . .

RUN npm install
RUN npx knex migrate:latest


CMD ["npm", 'run-script','swagger-autogen']