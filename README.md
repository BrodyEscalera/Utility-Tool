# Utility-Tool
Logging utility tool
#installation
 ```bash
 $ npm install brody_logger
 ```

# Usage

## Version Bumper

With the utility tool required to your node file call the .bump method with the arguments of Semantic Version Number and how you would like the number incremented ('Major', 'Minor', or 'Patch'). This is case insensitive.
Your server will require access to the .env file. I recommend adding the 'dotenv' node module
```bash
$ npm i --save dotenv
```
```js
require('dotenv').config();
const logger = require('brody_logger');

// Note: You should supply the old version number dynamically
const newVersionNumber = logger.bump('1.11.111', 'patch'));
```

## Logging
* To enable debugging create an environmental variable in the .env file and set it to true.

 ```env
 DEBUG=true
 ```
 in the .env file - Logs will be presented in the terminal window.

* To disable debugging set  ```env DEBUG=false ``` in the .env file

The logging functions are handled by the debugUtility.js
the four methods for debugging are
* err
* warn
* debug
* log

to include the debugUtility in your files place
 ```js
const logger = require('brody_logger');
 ```

To use the looger throughout your code simple treat the logger as you would a
 ```js
 console.log()
  ```
  Example:
  ```js
  //some code
  logger.log('Message I want to send to the terminal or log file without any tag');
  //some code
  logger.debug('Message I want to send to terminal or log file with a debug flag');
  //some code
  logger.err('Message I want to send to terminal or log file with an err flag');
  //some code
  logger.warn('Message I want to send to terminal or log file with an warn flag')
   ```
Colors for the individual flags can be modified in the debugUtility.js
