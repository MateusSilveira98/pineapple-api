FROM node:10.6.0
WORKDIR /src
COPY package.json /src
RUN npm install
COPY . /src
CMD ["npm", "start"]
