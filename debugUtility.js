const debugKey = process.env.DEBUG; // this variable is set to the
// environmental DEBUG variable in the .env file.

/** The logger function
creates an object with the functions err, warn, and debug, Each one of these
functions sets the color & tags the log with the appropriate level. If the
trigger and environmental are true and 0 than the errors will print to the terminal
if the trigger and DEBUG variable are set to 1 and anything other than true,
the logs will be appended to the all-logs file in the logs directory.
 **/

const logger = function JSClass(cont) {
  /** The "use strict" diretive is necessary because Block-scoped declarations
     (let, const, function, class) not yet supported outside strict mode **/

  'use strict';
  if(debugKey){
    const sep = ':';
    const clear = '\x1B[0m';// ansi value formats the text color to default

    let option;/* this variable is set based on the if statement below.
    It can either print to the terminal or save to a file.*/
    let trigger;// this variable is set based on the env DEBUG variable.
    /** This conditional staement sets the option variable in the logger function
    equal to either console.log or append.file. **/

  /** This method is used to log errors in this application **/
    this.err = (container) => {
      output('err', container);
    };
  /** This method is used to log debugs and replases console.logs in this application **/
    this.debug = (container) => {
      output('debug', container);
    };
  /** This method is used to log warnings in this application **/
    this.warn = (container) => {
      output('warn', container);
    };

    this.log = (container) => {
      output('log', container);
    };
  }
};


function output(type, msgInput){
  let sep = ':';
  const clear = '\x1B[0m';// ansi value formats the text color to default
  let color = '';
  let tag = '';
  let outputMethod;

  switch (type){
    case 'warn':
      color = '\x1B[41m\x1B[33m'; // ansi value formats the text color to yellow with red background
      tag = ' Warning ';
      outputMethod = console.warn;
      break;

    case 'debug':
      color = '\x1B[34m'; // ansi value formats the text color to blue
      tag = ' Debug ';
      outputMethod = console.log;

      break;
    case 'err':
      color = '\x1B[31m'; // ansi value formats the text color to red
      tag = ' Error ';
      outputMethod = console.error;
      break;
    default:
      // No current modification for logs / other cases
      sep = ''; // no seperator for basic logging
      outputMethod = console.log;
      break;
  }
      const msgOutput = color + tag + clear + sep + msgInput;
      outputMethod(msgOutput);

}

  // Version Bumper
  this.bump = (origVersionString, incrementType) => {
    const aryVersion = origVersionString.split('.');

    // Based upon the incrementType (case-insensitive)
    if(incrementType.toLowerCase() === 'major'){
      // Major modification the version number according to the semver rule
      aryVersion[0] = parseInt(aryVersion[0]) + 1;
      aryVersion[1] = 0;
      aryVersion[2] = 0;
    } else if(incrementType.toLowerCase() === 'minor'){
      // Minor modification the version number according to the semver rule
      aryVersion[1] = parseInt(aryVersion[1]) + 1;
      aryVersion[2] = 0;
    } else if(incrementType.toLowerCase() === 'patch'){
      // Patch modification the version number according to the semver rule
      aryVersion[2] = parseInt(aryVersion[2]) + 1;
    } else {
      // return false if the incrementType is not matched
      return false;
    }

    // Return the version number as a fully assembed string
    return aryVersion.join('.');
  }
};


/** This creates a version of logger and exports it to the application **/
const debugUtility = new logger();
module.exports = debugUtility;
