FROM php:8.2-fpm
EXPOSE 5173
WORKDIR /src/

# timezone environment
ENV TZ=UTC \
  # locale
  LANG=en_US.UTF-8 \
  LANGUAGE=en_US:en \
  LC_ALL=en_US.UTF-8 \
  # composer environment
  COMPOSER_ALLOW_SUPERUSER=1 \
  COMPOSER_HOME=/composer

RUN apt-get update \
    && apt-get install -y \
        locales \
        git \
        zip \
        unzip \
        vim \
        libfreetype6-dev \
        libjpeg62-turbo-dev \
        libmcrypt-dev \
        libpng-dev \
        libfontconfig1 \
        libxrender1

RUN docker-php-ext-configure gd --with-freetype --with-jpeg
RUN docker-php-ext-install gd
RUN docker-php-ext-install bcmath
RUN docker-php-ext-install pdo_mysql mysqli exif

# Get latest Composer
RUN cd /usr/bin && curl -s http://getcomposer.org/installer | php  \
    && ln -s /usr/bin/composer.phar /usr/bin/composer
RUN composer config -g process-timeout 3600 && \
    composer config -g repos.packagist composer https://packagist.org
#ENV NODE_VERSION=16.16.0
#RUN curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.3/install.sh | bash
#ENV NVM_DIR=/root/.nvm
#RUN . "$NVM_DIR/nvm.sh" && nvm install ${NODE_VERSION}
#RUN . "$NVM_DIR/nvm.sh" && nvm use v${NODE_VERSION}
#RUN . "$NVM_DIR/nvm.sh" && nvm alias default v${NODE_VERSION}
#ENV PATH="/root/.nvm/versions/node/v${NODE_VERSION}/bin/:${PATH}"
#RUN node --version
#RUN npm --version

RUN apt-get update && apt-get install -y locales
RUN sed -i -e 's/# en_US.UTF-8 UTF-8/en_US.UTF-8 UTF-8/' /etc/locale.gen && \
    dpkg-reconfigure --frontend=noninteractive locales && \
    update-locale LANG=en_US.UTF-8
ENV LANG en_US.UTF-8
ENV LANGUAGE en_US:en
ENV LC_ALL en_US.UTF-8

WORKDIR /src/
# laravelの初期インストールを行う。
#RUN rm -rf /src/api/vendor
#RUN rm -rf /src/api/bootstrap/cache/*
#RUN rm -rf /src/api/composer.lock
#RUN /usr/bin/composer install --no-cache
#RUN chmod -R 777 storage bootstrap/cache
#RUN php artisan optimize:clear
#RUN php artisan optimize
#
## ローカルフォルダをコピーしているので、不要なキャッシュなどをクリアする
#RUN php artisan cache:clear


ADD . /src/backend/api/storage
RUN chown -R www-data:www-data /src/backend/api/storage
#RUN chown -R www-data:www-data /src/api/bootstrap/cache
# ENTRYPOINT [ "bash", "-c", "cd api", "composer install; exec php-fpm" ]


# RUN cp .env.production .env
