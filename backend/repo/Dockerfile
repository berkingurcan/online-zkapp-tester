# syntax=docker/dockerfile:1
FROM node:12-alpine
WORKDIR /repo
COPY . .
RUN npm install
COPY . .
RUN zk project module0
WORKDIR /module0
CMD [ "npm run test" ]
