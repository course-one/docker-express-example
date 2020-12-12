# parent image
FROM node:12.20.0-alpine3.10

# working directory
WORKDIR /app

# copy package.json file
ADD package.json package-lock.json ./

# install dependencies
RUN npm install

# set default environment variable values
ENV SERVER_PORT=8000

# expose port to host
EXPOSE $SERVER_PORT

# copy project files
COPY . .

# start server on run
CMD [ "node", "server.js" ]