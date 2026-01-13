# Dockerfile for production image

# INSTALL
FROM node:14.15.4 AS base
# Add maintainer info
LABEL maintainer="7Classes"
# Set the working directory
WORKDIR /base
# Copy our stuff over
COPY package*.json ./
# CI and release builds should use npm ci to fully respect the lockfile.
# Local development may use npm install for opportunistic package updates.
ARG npm_install_command=ci
RUN npm $npm_install_command
# Copy our stuff over
COPY ./ ./

# BUILD
FROM base AS build
# Add maintainer info
LABEL maintainer="7Classes"
# Environment
ENV NODE_ENV=production
ENV NEXT_PUBLIC_BASE_API_URL=https://develop.7classes.com
# Set the working directory
WORKDIR /build
# Copy our stuff over
COPY --from=base /base ./
# Run build
RUN npm run build
# Reduce installed packages to production-only.
RUN npm prune --production

# ARCHIVE
FROM node:14.15.4 AS production
# Add maintainer info
LABEL maintainer="7classes"
# Environment
ENV NODE_ENV=production
ENV NEXT_PUBLIC_BASE_API_URL=https://develop.7classes.com
# Set the working directory
WORKDIR /app
# Copy our stuff over
COPY --from=build /build/package*.json ./
COPY --from=build /build/.next ./.next
COPY --from=build /build/public ./public
# Install npm modules
RUN npm install --global pm2
RUN npm install next

EXPOSE 3000

CMD [ "pm2-runtime", "npm", "--", "start" ]
