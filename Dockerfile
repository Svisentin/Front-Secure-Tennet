FROM node:22.1.0 AS build

# --- /env:start ---

# Pnpm setup
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"

# Avoid installing husky on docker
ENV HUSKY=0

# --- /env:end ---

# Only copy the package files to make proper use of image caching
WORKDIR /app
COPY package.json pnpm-lock.yaml ./
RUN corepack enable
RUN pnpm install

COPY . .

# Lint and build

RUN node --run lint && node --run build

FROM httpd:2.4 AS runtime

# --- /standard_labeling:start ---

# Don't move this to the top since it blows up docker cache
LABEL org.label-schema.version=$BUILD_VERSION
LABEL org.label-schema.build-date=$BUILD_DATE
LABEL org.label-schema.schema-version="1.0"
LABEL org.label-schema.name="registry.guardiansoftheball.com:8443/gob-frontend/astro-pixel-streaming"
LABEL org.label-schema.description="GOB Pixel Streaming"
LABEL org.label-schema.vendor="Guardians of the Ball"
LABEL description="v1 GOB Pixel Streaming"
LABEL maintainer=["matias.amendola@guardiansoftheball.com","juan@guardiansoftheball.com","joaco@guardiansoftheball.com"]

# --- /standard_labeling:end ---

# Now copy the whole repo
COPY --from=build /app/dist /usr/local/apache2/htdocs/

# Disable DirectorySlash and configure 404 error page
RUN { \
    echo 'ErrorDocument 404 /404.html'; \
} >> /usr/local/apache2/conf/httpd.conf

EXPOSE 80