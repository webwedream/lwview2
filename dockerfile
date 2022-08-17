FROM node:16
WORKDIR /usr/src/app
COPY package*.json ./
RUN yarn
COPY . .
RUN yarn build
EXPOSE 5173
CMD [ "node", "./build/index.js" ]