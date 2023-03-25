# Start from Ubuntu
FROM ubuntu:22.04
LABEL \
  org.opencontainers.image.authors="Marco Bungart <mail@example.com>" \
  org.opencontainers.image.licenses=Apache-2.0 \
  purpose="Learning containers"

# Create a new user
RUN useradd \
  --uid 1000 \
  --home-dir /app \
  --create-home \
  --shell /bin/bash \
  runner

# Switch to the new user
USER 1000
# Also possible:
# USER runner

# All commands after this line be executed relative to the WORKDIR
WORKDIR /app

# Copy the script, change owner and permissions so that it is executable
COPY \
  --chown=1000:1000 \
  --chmod=700 \
  hello-world.sh .

# Start the script on container start
ENTRYPOINT [ "/bin/bash", "-c", "./hello-world.sh" ]