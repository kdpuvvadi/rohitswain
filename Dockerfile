FROM nginx:mainline-alpine

WORKDIR /usr/share/nginx

VOLUME [ "/etc/nginx/" ]

COPY . html/