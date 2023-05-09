# Use the base image of Alpine Linux
FROM alpine:3.14

# Declare a build argument named "Version" with a default value
ARG Version=default_value

# Print the value of the "Version" build argument
RUN echo "Version passed: ${Version}"
