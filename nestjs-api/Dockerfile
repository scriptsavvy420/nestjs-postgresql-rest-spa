# Specify Node Version and Image
# Name Image development (can be anything)
FROM node:20 AS development

# Specify Working directory inside container
WORKDIR /myapps/nestjs-api/src/app

# Copy package-lock.json & package.json from host to inside container working directory
COPY package*.json ./
COPY tsconfig.build.json ./
COPY tsconfig.json ./

# Install deps inside container
RUN npm install

RUN npm run build

EXPOSE 5000

################
## PRODUCTION ##
################
# Build another image named production
FROM node:20 AS production

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

# Set work dir
WORKDIR /myapps/src/app

COPY --from=development /myapps/nestjs-api/src/app/ .

EXPOSE 5050

# run app
CMD [ "node", "dist/main"]