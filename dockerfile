FROM node:14.19.1

WORKDIR /2022_autumn_festival_front
ADD . /2022_autumn_festival_front

ENV PATH /app/node_modules/.bin:$PATH

COPY package.json /app/package.json
RUN npm install --force
RUN npm install react-scripts@3.0.1 -g


CMD ["npm", "start"]