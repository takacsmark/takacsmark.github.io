FROM node:6.11.4

RUN npm i -g gulp && \
    npm i -g grunt-cli

RUN apt update && \
    apt install -y graphicsmagick 

WORKDIR /usr/src/app
COPY package.json package.json

RUN npm install
