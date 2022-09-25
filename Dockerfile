FROM ubuntu:latest
USER root
#Installing NodeJs

RUN apt-get update
RUN apt-get -y install curl gnupg
RUN curl -sL https://deb.nodesource.com/setup_16.x  | bash -
RUN apt-get -y install nodejs
RUN npm install -g yarn

#Installing gcc
RUN apt install build-essential -y

#Installing Java
RUN apt-get update && \
    DEBIAN_FRONTEND=noninteractive \
    apt-get -y install default-jre-headless && \
    apt-get clean && \
    rm -rf /var/lib/apt/lists/*

WORKDIR /app

COPY package*.json ./
COPY . .
RUN yarn

# environment variables
ENV PORT=80
CMD [ "node", "app.js" ]