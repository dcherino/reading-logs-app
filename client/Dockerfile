# pull official base image
FROM node:14.14.0-alpine

# set working directory
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# install app dependencies
COPY package.json ./
COPY yarn.lock ./
RUN yarn install --silent
RUN yarn global add react-scripts@3.4.4 --silent

# add app
COPY . ./

# start app
CMD ["yarn", "start"]