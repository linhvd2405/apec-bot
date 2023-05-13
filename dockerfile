# FROM node:lts-alpine
# LABEL maintainer "quyeths@apec.com.vn"

# WORKDIR /app
# EXPOSE 3000

# COPY package.json yarn.lock ./
# RUN touch .env

# RUN set -x && yarn

# COPY . .

# CMD [ "yarn", "start:dev" ]

FROM node:18.16.0

WORKDIR /app

COPY . .

RUN yarn install 


COPY package.json yarn.lock ./

RUN touch .env

RUN set -x && yarn

EXPOSE 3000

CMD ["yarn", "start:dev"]