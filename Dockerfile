FROM node:16.16.0-alpine

# node_modulesインストール
WORKDIR /usr/src/app
COPY app/package.json ./
COPY app/yarn.lock ./
RUN yarn install

# ソースコピー
COPY app/src ./src

# ビルド
CMD ["yarn", "build"]

# Port公開
EXPOSE 8080