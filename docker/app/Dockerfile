FROM php:8.0-cli-alpine3.13

LABEL maintainer="Adrien DELHOM <adrien.delhom@outlook.com>"

WORKDIR /var/www/app

ARG USER=www-data
ARG UID=1000
ARG GROUP=www-data
ARG GID=1000

ENV TZ=UTC
ENV DEBIAN_FRONTEND noninteractive

# Default system packets
RUN apk add --no-cache --update --repository http://nl.alpinelinux.org/alpine/edge/testing/ $PHPIZE_DEPS \
    git \
    tzdata \
    gnupg \
    su-exec \
    supervisor \
    libcap \
    nodejs \
    npm \
    make \
    curl \
    zip \
    unzip

RUN npm install --global yarn

# Php extensions manager
ADD https://github.com/mlocati/docker-php-extension-installer/releases/latest/download/install-php-extensions /usr/local/bin/

RUN set -eux;
RUN chmod +x /usr/local/bin/install-php-extensions

# Install PHP extensions
RUN install-php-extensions \
    intl \
    opcache \
    imap \
    pdo \
    pdo_mysql  \
    pcov \
    msgpack \
    bcmath \
    igbinary \
    gd \
    zip \
    swoole \
    pcntl \
    gmp \
    xdebug \
    @composer

COPY start-container /usr/local/bin/start-container

# Composer configuration
COPY --from=composer:latest /usr/bin/composer /usr/bin/composer
ENV COMPOSER_ALLOW_SUPERUSER=1
ENV COMPOSER_HOME=/tmp
ENV PATH="${PATH}:/root/.composer/vendor/bin"
RUN find /tmp -type d -exec chmod -v 1777 {} +

# Miscellany
RUN setcap "cap_net_bind_service=+ep" /usr/local/bin/php
RUN chmod +x /usr/local/bin/start-container
RUN echo http://dl-2.alpinelinux.org/alpine/edge/community/ >> /etc/apk/repositories
RUN chown -R $USER:$GROUP /var/www
RUN chown -R $USER:$GROUP /usr/local/bin/start-container

# Add UID and GID
RUN apk add shadow \
    && usermod -u $UID $USER \
    && groupmod -g $GID $GROUP

RUN mkdir /.composer
RUN chmod -R ugo+rw /.composer

COPY xdebug.ini /usr/local/etc/php/conf.d/docker-php-ext-xdebug.ini
COPY php.ini /usr/local/etc/php/conf.d/99-php.ini
COPY supervisord.conf /etc/supervisor/conf.d/supervisord.conf

ENTRYPOINT ["start-container"]
