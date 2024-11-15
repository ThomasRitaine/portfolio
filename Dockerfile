ARG NODE_VERSION=20-alpine


###################
# BUILD FOR PRODUCTION
###################

FROM --platform=$BUILDPLATFORM node:${NODE_VERSION} AS build

WORKDIR /usr/src/app

COPY --chown=node:node package*.json ./

RUN npm ci

COPY --chown=node:node . .

RUN npm run build

USER node


###################
# PRODUCTION
###################

FROM --platform=$TARGETPLATFORM nginx:alpine AS server

COPY ./nginx.conf /etc/nginx/conf.d/default.conf

COPY --from=build /usr/src/app/build /usr/share/nginx/html
