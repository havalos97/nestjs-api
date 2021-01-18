FROM node:13.8.0-alpine3.10

WORKDIR /usr/src/app

# install node modules
COPY .en[v] ./
COPY package*.json ./
RUN npm install

# copy code into image
COPY . .

# run as a non-root user
RUN chown -R node:node .
USER node

EXPOSE 3000
CMD [ "npm", "run","start:dev" ]
