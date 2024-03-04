FROM node:20-bullseye-slim

WORKDIR /app

COPY package.json package-lock.json* ./

RUN npm ci

COPY . .

RUN npm run build

ENV NODE_ENV production

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

USER nextjs

EXPOSE 3000

ENV TZ Asia/Seoul
ENV PORT 3000

ENTRYPOINT node server.js


# docker build --tag anguklaw:2024030401 .