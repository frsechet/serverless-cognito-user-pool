"use strict";

const poolData = {
  UserPoolId : process.env.USER_POOL_ID,
  ClientId : process.env.USER_POOL_CLIENT_ID,
  Paranoia : process.env.PARANOIA_LEVEL
};
let CognitoUserPoolWrapper = require('./tmp')(poolData);

const Success = require("./helpers").success;
const CustomError = require("./helpers").error;

module.exports = {
  signup: (event, context, cb) => {
    const body = (typeof event.body === "string") ? JSON.parse(event.body) : event.body ;
    return CognitoUserPoolWrapper.signup(body, (err, res) => {
      return (err) ? cb(CustomError(err)) : cb(null, Success(res));
    });
  },

  signupConfirm: (event, context, cb) => {
    const body = (typeof event.body === "string") ? JSON.parse(event.body) : event.body ;
    return CognitoUserPoolWrapper.signupConfirm(body, (err, res) => {
      return (err) ? cb(CustomError(err)) : cb(null, Success(res));
    });
  },

  signupResend: (event, context, cb) => {
    const body = (typeof event.body === "string") ? JSON.parse(event.body) : event.body ;
    return CognitoUserPoolWrapper.signupResend(body, (err, res) => {
      return (err) ? cb(CustomError(err)) : cb(null, Success(res));
    });
  },

  login: (event, context, cb) => {
    const body = (typeof event.body === "string") ? JSON.parse(event.body) : event.body ;
    return CognitoUserPoolWrapper.login(body, (err, res) => {
      return (err) ? cb(CustomError(err)) : cb(null, Success(res));
    });
  },

  loginMfa: (event, context, cb) => {
    const body = (typeof event.body === "string") ? JSON.parse(event.body) : event.body ;
    return CognitoUserPoolWrapper.loginMfa(body, (err, res) => {
      return (err) ? cb(CustomError(err)) : cb(null, Success(res));
    });
  },

  loginNewPasswordRequired: (event, context, cb) => {
    const body = (typeof event.body === "string") ? JSON.parse(event.body) : event.body ;
    return CognitoUserPoolWrapper.loginNewPasswordRequired(body, (err, res) => {
      return (err) ? cb(CustomError(err)) : cb(null, Success(res));
    });
  },

  passwordForgot: (event, context, cb) => {
    const body = (typeof event.body === "string") ? JSON.parse(event.body) : event.body ;
    return CognitoUserPoolWrapper.passwordForgot(body, (err, res) => {
      return (err) ? cb(CustomError(err)) : cb(null, Success(res));
    });
  },

  passwordReset: (event, context, cb) => {
    const body = (typeof event.body === "string") ? JSON.parse(event.body) : event.body ;
    return CognitoUserPoolWrapper.passwordReset(body, (err, res) => {
      return (err) ? cb(CustomError(err)) : cb(null, Success(res));
    });
  },

  passwordChange: (event, context, cb) => {
    const body = (typeof event.body === "string") ? JSON.parse(event.body) : event.body ;
    return CognitoUserPoolWrapper.passwordChange(body, (err, res) => {
      return (err) ? cb(CustomError(err)) : cb(null, Success(res));
    });
  },

  profile: (event, context, cb) => {
    const body = (typeof event.body === "string") ? JSON.parse(event.body) : event.body ;
    return CognitoUserPoolWrapper.profile(body, (err, res) => {
      return (err) ? cb(CustomError(err)) : cb(null, Success(res));
    });
  },

  refreshSession: (event, context, cb) => {
    const body = (typeof event.body === "string") ? JSON.parse(event.body) : event.body ;
    return CognitoUserPoolWrapper.refreshSession(body, (err, res) => {
      return (err) ? cb(CustomError(err)) : cb(null, Success(res));
    });
  },

  profileEdit: (event, context, cb) => {
    const body = (typeof event.body === "string") ? JSON.parse(event.body) : event.body ;
    return CognitoUserPoolWrapper.profileEdit(body, (err, res) => {
      return (err) ? cb(CustomError(err)) : cb(null, Success(res));
    });
  },

  profileEditPhoneNumber: (event, context, cb) => {
    const body = (typeof event.body === "string") ? JSON.parse(event.body) : event.body ;
    return CognitoUserPoolWrapper.profileEditPhoneNumber(body, (err, res) => {
      return (err) ? cb(CustomError(err)) : cb(null, Success(res));
    });
  },

  mfa: (event, context, cb) => {
    const body = (typeof event.body === "string") ? JSON.parse(event.body) : event.body ;
    return CognitoUserPoolWrapper.mfa(body, (err, res) => {
      return (err) ? cb(CustomError(err)) : cb(null, Success(res));
    });
  },

};
