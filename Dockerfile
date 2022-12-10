FROM node:16-alpine

RUN yarn global add nodemon

ARG NODE_ENV=production
ENV NODE_ENV $NODE_ENV

ARG PORT=3000
ENV PORT $PORT
EXPOSE $PORT

WORKDIR /opt
COPY package.json yarn.lock ./
RUN yarn

WORKDIR /opt/src
COPY ./src ./
CMD ["node", "app.js"]
