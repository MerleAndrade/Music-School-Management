FROM openjdk:18

ENV ENVIRONMENT=prod

LABEL maintainer="florian.weber@neuefische.de"

ADD backend/target/zoomanagement.jar zoomanagement.jar

CMD [ "sh", "-c", "java -Dserver.port=$PORT -jar /zoomanagement.jar" ]