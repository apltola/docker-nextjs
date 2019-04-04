#FROM node:alpine as builder

# set working directory
#WORKDIR /app

# copy "package.json" and "package-lock.json" before other files
#COPY /package*.json ./

# install deps
#RUN npm install

# copy all files
#COPY . .

# build app for production!
#RUN npm run build

# expose the listening port
#EXPOSE 3000

# FROM nginx
# COPY --from=builder /app/.next /usr/share/nginx/html




FROM node:alpine

# Set working directory
WORKDIR /usr/app

# Install PM2 globally
# RUN npm install pm2

# Copy "package.json" and "package-lock.json" before other files
# Utilise Docker cache to save re-installing dependencies if unchanged
COPY ./package*.json ./

# Install dependencies
RUN npm install

# Copy all files
COPY ./ ./

# Build app
RUN npm run build

# Expose the listening port
EXPOSE 3000

# Launch app with PM2
# CMD [ "pm2-runtime", "start", "npm", "--", "start" ]
CMD [ "npm", "run", "start" ]