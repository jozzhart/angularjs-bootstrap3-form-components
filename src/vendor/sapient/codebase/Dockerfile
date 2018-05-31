FROM node:6

RUN npm install -g gulp
RUN npm install bower -g

WORKDIR /app

COPY package*.json ./
RUN npm install
COPY . .
RUN bower install --allow-root

ENTRYPOINT [ "gulp", "serve", "--api", "http://api:9090"]

EXPOSE 3000