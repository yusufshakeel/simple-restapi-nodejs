# simple-restapi-nodejs
This is a simple REST API project using NodeJS.

## Table of Content
* [Prerequisite](#prerequisite)
* [Getting started](#getting-started)
* [Localhost server](#localhost-server)
* [API endpoints](#api-endpoints)
* [Docker Image](#docker-image)
* [Docker Container in localhost](#docker-container-in-localhost)

## Prerequisite

This project depends on the following.

* NodeJS (v14 or higher)
* Docker (Optional. Needed only if you want to create docker image and run the project in a container.)

## Getting started

This is a NodeJS project. To get started, first install all the packages by running the following command in the terminal.

```shell
npm i
```

## Localhost server

To start the localhost server.

```shell
npm run start
```

## API endpoints

Check out the `docs` folder. It has the Postman collection.

Home
```
GET /
Host: 0.0.0.0:3000
```

Liveness
```
GET /liveness
Host: 0.0.0.0:3000
```

Readiness
```
GET /readiness
Host: 0.0.0.0:3000
```

Metrics
```
GET /metrics
Host: 0.0.0.0:3000
```

## Tests

To run the test suite.

```shell
npm run test
```

## Docker Image

DockerHub link of this project [yusufshakeel/simple-restapi-nodejs](https://hub.docker.com/r/yusufshakeel/simple-restapi-nodejs)

To pull the image on your localhost.

```shell
docker pull yusufshakeel/simple-restapi-nodejs
```

## Docker Container in localhost

To run the docker container in localhost.

```shell
docker run -d yusufshakeel/simple-restapi-nodejs
```

This will start the server on port 3000.

## License

It's free :smiley:

[MIT License](https://github.com/yusufshakeel/simple-restapi-nodejs/blob/main/LICENSE) Copyright (c) 2023 Yusuf Shakeel

## Donate

Feeling generous :smiley: [Donate via PayPal](https://www.paypal.me/yusufshakeel)