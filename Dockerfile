FROM node:16
WORKDIR /root
COPY . .
EXPOSE 3000
CMD npm start