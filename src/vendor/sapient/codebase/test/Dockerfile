FROM node:6
MAINTAINER jozzhart <me@jozzhart.com>

RUN apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv 2930ADAE8CAF5059EE73BB4B58712A2291FA4AD5
RUN echo "deb http://repo.mongodb.org/apt/debian jessie/mongodb-org/3.6 main" | tee /etc/apt/sources.list.d/mongodb-org-3.6.list
RUN apt-get update && apt-get install -y \
  mongodb-org 

RUN npm install protractor -g
RUN npm install gulp -g


WORKDIR /app

ENTRYPOINT ["protractor"]