# use our prepared Raspberry Pi compatible Docker base image with Node.js
FROM arm32v7/node

# make the src folder available in the docker image
ADD . /display
WORKDIR /display

RUN ls

RUN apt-get update

# Install dependencies
RUN apt-get install -y \
    python \
    python-dev \
    python-pip \
    python-virtualenv \
    build-essential \
    --no-install-recommends && \
    rm -rf /var/lib/apt/lists/*

RUN npm install serialport --build-from-source=serialport

# make port 80 available outside of the image
EXPOSE 3000