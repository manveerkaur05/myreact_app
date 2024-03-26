# Dockerized React App with Nginx

This project demonstrates how to Dockerize a React application using Nginx as a web server.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

To run this project, you need to have Docker installed on your system. You can download and install Docker from [here](https://docs.docker.com/get-docker/).

### Building and Running the Docker Container

1. Clone this repository to your local machine:

    ```bash
    git clone <repository-url>
    ```

2. Navigate into the project directory:

    ```bash
    cd <project-directory>
    ```

3. Build the Docker image:

    ```bash
    docker build -t my-react-app .
    ```

4. Run the Docker container:

    ```bash
    docker run -p 8080:80 my-react-app
    ```

5. Open your web browser and navigate to [http://localhost:8080](http://localhost:8080) to view the running React app.

## Dockerfile Explanation

### Stage 1: Build React app

```Dockerfile
FROM node:14 as builder

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy the entire project
COPY . .

# Build the project without running linting
RUN npm run build
