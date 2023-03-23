FROM node:19.8.1-alpine3.16

WORKDIR /home/app
ENV PATH /app/node_modules/.bin:$PATH
COPY package*.json ./
RUN npm install
#COPY . .
EXPOSE 8080

RUN addgroup app && adduser -S -G app app
RUN mkdir -p node_modules/.cache
RUN chown -R app:app node_modules/.cache

USER app
COPY --chown=app:app . .
CMD ["npm", "run", "serve"]
