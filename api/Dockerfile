FROM node:lts-alpine
LABEL maintainer "linhvd"

WORKDIR /app
EXPOSE 3000

COPY package.json yarn.lock ./
RUN touch .env

RUN set -x && yarn

RUN apk add --no-cache tzdata && \
    ln -sf /usr/share/zoneinfo/Asia/Ho_Chi_Minh /etc/localtime && \
    echo "Asia/Ho_Chi_Minh" > /etc/timezone && \
    date
    
COPY . .

RUN yarn build

CMD [ "yarn", "start:prod" ]