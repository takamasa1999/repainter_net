# Ubuntuをベースイメージとして使用
FROM debian:latest

RUN apt-get update && \
    apt-get install -y wget tar libicu-dev && \
    rm -rf /var/lib/apt/lists/*

RUN mkdir -p /usr/share/manager-server

# Manager Serverをダウンロード
RUN wget https://github.com/Manager-io/Manager/releases/latest/download/ManagerServer-linux-x64.tar.gz -O /usr/share/manager-server/ManagerServer-linux-x64.tar.gz

RUN tar xvzf /usr/share/manager-server/ManagerServer-linux-x64.tar.gz -C /usr/share/manager-server

EXPOSE 8080
CMD ["/usr/share/manager-server/ManagerServer", "-port", "8080"]