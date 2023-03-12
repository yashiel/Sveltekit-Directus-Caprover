FROM node:19.2.0-alpine3.15
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci
COPY . .
RUN npm run build && npm prune --production
ENV PORT 80
EXPOSE 80
CMD ["node", "build"]