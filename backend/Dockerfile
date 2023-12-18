FROM node:lts

WORKDIR /back

COPY package*.json ./
RUN ["npm", "install"]

COPY ./ ./

CMD ["npm", "start"]

EXPOSE 3003
