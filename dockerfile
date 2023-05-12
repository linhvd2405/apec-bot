# FROM node:lts-alpine
# LABEL maintainer "quyeths@apec.com.vn"

# WORKDIR /app
# EXPOSE 3000

# COPY package.json yarn.lock ./
# RUN touch .env

# RUN set -x && yarn

# COPY . .

# CMD [ "yarn", "start:dev" ]

FROM node:14

WORKDIR /app

COPY . .

RUN yarn install 

RUN  apt-get update && \
    apt-get install -y wget unzip xvfb libxi6 libgconf-2-4 && \
    wget https://dl.google.com/linux/direct/google-chrome-stable_current_amd64.deb && \
    dpkg -i google-chrome-stable_current_amd64.deb; apt-get -fy install && \
    wget https://chromedriver.storage.googleapis.com/112.0.0/chromedriver_linux64.zip && \
    unzip chromedriver_linux64.zip && \
    mv chromedriver /usr/bin/chromedriver && \
    chown root:root /usr/bin/chromedriver && \
    chmod +x /usr/bin/chromedriver

COPY package.json yarn.lock ./

RUN touch .env

RUN set -x && yarn

EXPOSE 3000

CMD ["yarn", "start:dev"]