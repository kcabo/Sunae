FROM node:latest

USER node

WORKDIR /opt/sunae

COPY --chown=node:node package*.json ./

RUN npm install && npm cache clean --force