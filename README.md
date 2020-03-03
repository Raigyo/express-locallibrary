# REST API - Setting up a Node.js development environment with Express.js (using Mongoose ORM / MongoDB Atlas)

*February 2020*

> 🔨 xxxxxx. MDN tutorial '[Setting up a Node development environment](https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/development_environment)'.

![Node Logo](readme-img/node-logo.jpg)

## About

xxxxx

To download skeleton only (ready to start environment):

~~~~
git clone -b skeleton git@github.com:Raigyo/express-locallibrary.git
~~~~

or

~~~~
git clone -b skeleton-with-routes git@github.com:Raigyo/express-locallibrary.git

npm install
~~~~

------------------

## Techs covered

- xxxxx

------------------

## Packages used

### -Express.js

Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.

~~~~
npm install -g express

npm install express-generator -g

express myApp --view=pug

cd myApp

npm install

~~~~

On Windows, use this command:

`SET DEBUG=express-locallibrary-tutorial:* & npm start`

On macOS or Linux, use this command:

`DEBUG=express-locallibrary-tutorial:* npm start`

### -Nodemon

Enable server restart on file changes

~~~~
npm install -g nodemon

npm install --save-dev nodemon

~~~~

Add in package.json:

~~~~
"scripts": {
  "start": "node ./bin/www",
  "devstart": "nodemon ./bin/www",
  "serverstart": "DEBUG=express-locallibrary-tutorial:* npm run devstart"
},
~~~~

On Windows, use this command:

`SET DEBUG=express-locallibrary-tutorial:* & npm run devstart`

On macOS or Linux, use this command:

`DEBUG=express-locallibrary-tutorial:* npm run devstart`

### -Mongoose ORM

Installing Mongoose adds all its dependencies, including the MongoDB database driver.

`npm install mongoose --save`

### -Async

Async is a utility module which provides straight-forward, powerful functions for working with asynchronous JavaScript.

`npm install async --save`

- async.parallel() to execute any operations that must be performed in parallel.
- async.series() for when we need to ensure that asynchronous operations are performed in series.
- async.waterfall() for operations that must be run in series, with each operation depending on the results of preceding operations.

### -Moment

Lightweight JavaScript date library for parsing, validating, manipulating, and formatting dates

`npm install moment --save`

[Date formats documentation](https://momentjs.com/docs/#/displaying/)

### -[populatedb.js](https://raw.githubusercontent.com/hamishwillee/express-locallibrary-tutorial/master/populatedb.js)

`node populatedb '<your atlas mongodb url>'` (don't forget quotes)

(I.E.: *'mongodb+srv://<user>:<password>@cluster0-mbdj7.mongodb.net/<db-name>?retryWrites=true'*)

------------------

## Ressources

- [GitHub: express-locallibrary-tutorial](https://github.com/mdn/express-locallibrary-tutorial)
- [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
- [populatedb.js](https://raw.githubusercontent.com/hamishwillee/express-locallibrary-tutorial/master/populatedb.js)
