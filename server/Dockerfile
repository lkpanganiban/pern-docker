FROM node:20.11.1-slim

ENV NODE_ENV development

WORKDIR /app
COPY package.json .
RUN npm install

RUN apt -y update && apt install -y netcat-traditional

COPY . .

ENTRYPOINT ["/app/entrypoint.sh"]