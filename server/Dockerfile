FROM node:20.11.1-slim

ENV NODE_ENV development

WORKDIR /app
COPY package.json .
RUN npm install

COPY . .

CMD ["npm", "run", "dev"]