"use strict";

function CustomError(message, name) {
  this.name = name;
  this.message = message || '';
  let error = new Error(this.message);
  error.name = this.name;
  this.stack = error.stack;
}
CustomError.prototype = Object.create(Error.prototype);


module.exports = function(err) {

  // fix for missing status codes
  if (!err.statusCode) {

    // signup missing error.statusCode
    if (err.name === "MissingRequiredParameter")
      err.statusCode = 400;

    // other missing error.statusCode
    else
      err.statusCode = 400;
  }

  err.message = "[" + err.statusCode + "] " + err.message;
  return new CustomError(err.message, err.name);
};