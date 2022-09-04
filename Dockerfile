FROM node:16-alpine
WORKDIR /usr/src/app
COPY package*.json ./
RUN yarn install --ignore-scripts
COPY . .
RUN yarn build
EXPOSE 3000
CMD [ "node", "./build/index.js" ]