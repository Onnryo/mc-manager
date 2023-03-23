FROM itzg/minecraft-server:java19

WORKDIR /data

RUN apt install curl
EXPOSE 25565
EXPOSE 25575

#RUN groupadd minecraft && usermod -aG minecraft minecraft
USER minecraft
RUN chown -R minecraft:minecraft /data
CMD ["ls", "-la"]
ENTRYPOINT ["/data/start.sh"]
CMD ["run"]
