FROM nginx:1.25

RUN mkdir -p /src/docker/nginx/logs
RUN touch -c /src/docker/nginx/logs/access.log
RUN touch -c /src/docker/nginx/logs/error.log

COPY ./default.conf /etc/nginx/conf.d/default.conf
