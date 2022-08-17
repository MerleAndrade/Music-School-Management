FROM openjdk:18

ENV ENVIRONMENT=prod

LABEL maintainer="andrade.merle@gmail.com"

ADD backend/target/music-school-management.jar music-school-management.jar

CMD [ "sh", "-c", "dockejava -Dserver.port=$PORT -jar /music-school-management.jar" ]