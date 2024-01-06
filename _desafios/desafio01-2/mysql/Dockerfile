FROM mysql:latest

ENV MYSQL_ROOT_PASSWORD=root
ENV MYSQL_DATABASE=nodedb
ENV MYSQL_USER=root

COPY ./scripts/ /docker-entrypoint-initdb.d/
