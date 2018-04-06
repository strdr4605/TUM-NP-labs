# TUM-NP-lab2

Laboratory work for Network Programming (Programarea în Rețea) at Technical University of Moldova

## Lab description

In this repository we will try to implement [Metrics Aggregator](https://github.com/Alexx-G/PR-labs/blob/master/lab2-3.md#metrics-aggregator).  

### Roles:
* [Dragoș Străinu](https://github.com/strdr4605/): Unit testing, docs. [![CircleCI](https://circleci.com/gh/strdr4605/TUM-NP-lab2.svg?style=shield)](https://circleci.com/gh/strdr4605/TUM-NP-lab2)  
* [Stanislav Spatari](https://github.com/sspatari/): Development.

## Babel Node.js Express Setup

A starter pack for server side JavaScript applications using standards from ES2015, ES2016, ES2017. It uses Babel to compile from this standard to ES5. This project used [express](https://expressjs.com/) framework

## Usage

### Installation

Install the dependencies

```sh
$ npm install
```

### Start server using development build

This will use [babel-register](https://babeljs.io/docs/usage/babel-register/) package tot compile our code to ES5 without outputing any additional folder that has the compiled code, and will start the server using [nodemon](https://nodemon.io/) package

```sh
$ npm start
```

### Clean

Deletes the dist folder

```sh
$ npm run clean
```

### Build

Clean project, then compile the contents of server folder using babel, places the output into dist folder created by babel, besides this also gives the [source maps](http://www.mattzeunert.com/2016/02/14/how-do-source-maps-work.html) that are used for debugging purposes

```sh
$ npm run build
```

### Start server using production build

This will call the **build** command will start the server using production build

```sh
$ npm run production
```

## More Info

### Author

Spatari Stanislav

### License

This project is licensed under the MIT License
