FROM node:19.8.1-alpine3.16
COPY --from=library/docker:latest /usr/local/bin/docker /usr/bin/docker
COPY --from=docker/compose:latest /usr/local/bin/docker-compose /usr/bin/docker-compose

WORKDIR /home/app

#RUN apt install apt-transport-https ca-certificates curl software-properties-common
#RUN curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -
#RUN add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/ubuntu focal stable"
#RUN apt install docker-ce
#RUN apk add --update docker openrc
#RUN rc-update add docker boot
#RUN service docker status
#RUN docker -v

#RUN add-apt-repository ppa:openjdk-r/ppa
#RUN apt update
#RUN apt install openjdk-19-jre-headless

#RUN curl -L "https://github.com/docker/compose/releases/download/1.29.2/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
#RUN chmod +x /usr/local/bin/docker-compose

ENV PATH /app/node_modules/.bin:$PATH
COPY package*.json ./
RUN npm install
#COPY --chown=app . .
EXPOSE 3000

RUN adduser -D app
RUN addgroup app app
RUN addgroup docker && addgroup app docker
RUN mkdir -p node_modules/.cache
RUN chown -R app:app node_modules/.cache

USER app
COPY --chown=app:app . .
CMD ["npm", "start"]
