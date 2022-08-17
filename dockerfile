FROM node:16-alpine
WORKDIR /usr/src/app
COPY package*.json ./
RUN yarn
COPY . .
RUN yarn build
EXPOSE 5173
ENTRYPOINT [ "node", "./build/index.js" ]