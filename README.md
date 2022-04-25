# api-data-transformation

<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo_text.svg" width="320" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>

## About Proyecto

This project allows to transform in the most described way the Data Transformation of the Karvi API.

## How to start

1. Clone or download this repository to your computer.
1.  Copy the .env file with the command  `` cp .env.sample .env `` and set the parameter **HEADER_API_KEY** cib the corresponding **api-key**. 

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test
```
## Testing the endpoints

Once the `.env` file is configured and the application is **running**, we can proceed to test the endpoints.

> **NOTE:** To correctly perform the tests we suggest using [Postman](https://identity.getpostman.com/signup?continue=https%3A%2F%2Fgo.postman.co%2Fbuild).


### Endpoint 1

1. Open Postman and create a new `GET` request pointing to the following address: `http://localhost:3000/cars?site={{site}}`
   
    | KEY | DESCRIPTION         |
    |-----|---------------|
    | site   | The site that can be `ar` or `br` |

> **NOTE:** You can also test the deployed endpoint: `http://3.133.111.41:3000/cars?site={{site}}`.


1. Click on the `Send` button and the request will be sent to the endpoint, you should receive a response with the status `200 Ok` and a JSON with the filtered cars.

### Endpoint 2

1. Open Postman and create a new `GET` request pointing to the following address: `http://localhost:3000/cars-ids?site={{site}}&ids={{ids}}`
   
    | KEY | DESCRIPTION         |
    |-----|---------------|
    | site   | The `site` that can be `ar` or `br` |
    | ids   | The query `ids` will receive ids separated by commas. E.g. `ids=349851,349970` |

1. Click on the `Send` button and the request will be sent to the endpoint, you should receive a response with the status `200 Ok` and a JSON with the filtered cars by ids.

> **NOTE:** You can also test the deployed endpoint: `http://3.133.111.41:3000/cars-ids?site=br&ids={{ids}}`.
