"use strict";

let Cognito = require('cognito-user-pool');
const poolData = {
  UserPoolId : process.env.USER_POOL_ID,
  ClientId : process.env.USER_POOL_CLIENT_ID,
  Paranoia : process.env.PARANOIA_LEVEL
};

const Helpers = require("./helpers");
const Success = Helpers.success;
const CustomError = Helpers.error;

module.exports = {
  signup: (event, context, cb) => {
    const body = (typeof event.body === "string") ? JSON.parse(event.body) : event.body ;
    return Cognito.signup(poolData, body, (err, res) => {
      return (err) ? cb(CustomError(err)) : cb(null, Success(res));
    });
  },

  signupConfirm: (event, context, cb) => {
    const body = (typeof event.body === "string") ? JSON.parse(event.body) : event.body ;
    return Cognito.signupConfirm(poolData, body, (err, res) => {
      return (err) ? cb(CustomError(err)) : cb(null, Success(res));
    });
  },

  signupResend: (event, context, cb) => {
    const body = (typeof event.body === "string") ? JSON.parse(event.body) : event.body ;
    return Cognito.signupResend(poolData, body, (err, res) => {
      return (err) ? cb(CustomError(err)) : cb(null, Success(res));
    });
  },

  login: (event, context, cb) => {
    const body = (typeof event.body === "string") ? JSON.parse(event.body) : event.body ;
    return Cognito.login(poolData, body, (err, res) => {
      return (err) ? cb(CustomError(err)) : cb(null, Success(res));
    });
  },

  loginMfa: (event, context, cb) => {
    const body = (typeof event.body === "string") ? JSON.parse(event.body) : event.body ;
    return Cognito.loginMfa(poolData, body, (err, res) => {
      return (err) ? cb(CustomError(err)) : cb(null, Success(res));
    });
  },

  loginNewPasswordRequired: (event, context, cb) => {
    const body = (typeof event.body === "string") ? JSON.parse(event.body) : event.body ;
    return Cognito.loginNewPasswordRequired(poolData, body, (err, res) => {
      return (err) ? cb(CustomError(err)) : cb(null, Success(res));
    });
  },

  passwordForgot: (event, context, cb) => {
    const body = (typeof event.body === "string") ? JSON.parse(event.body) : event.body ;
    return Cognito.passwordForgot(poolData, body, (err, res) => {
      return (err) ? cb(CustomError(err)) : cb(null, Success(res));
    });
  },

  passwordReset: (event, context, cb) => {
    const body = (typeof event.body === "string") ? JSON.parse(event.body) : event.body ;
    return Cognito.passwordReset(poolData, body, (err, res) => {
      return (err) ? cb(CustomError(err)) : cb(null, Success(res));
    });
  },

  passwordChange: (event, context, cb) => {
    const body = (typeof event.body === "string") ? JSON.parse(event.body) : event.body ;
    return Cognito.passwordChange(poolData, body, (err, res) => {
      return (err) ? cb(CustomError(err)) : cb(null, Success(res));
    });
  },

  profile: (event, context, cb) => {
    const body = (typeof event.body === "string") ? JSON.parse(event.body) : event.body ;
    return Cognito.profile(poolData, body, (err, res) => {
      return (err) ? cb(CustomError(err)) : cb(null, Success(res));
    });
  },

  profileEdit: (event, context, cb) => {
    const body = (typeof event.body === "string") ? JSON.parse(event.body) : event.body ;
    return Cognito.profileEdit(poolData, body, (err, res) => {
      return (err) ? cb(CustomError(err)) : cb(null, Success(res));
    });
  },

  profileEditPhoneNumber: (event, context, cb) => {
    const body = (typeof event.body === "string") ? JSON.parse(event.body) : event.body ;
    return Cognito.profileEditPhoneNumber(poolData, body, (err, res) => {
      return (err) ? cb(CustomError(err)) : cb(null, Success(res));
    });
  },

  mfa: (event, context, cb) => {
    const body = (typeof event.body === "string") ? JSON.parse(event.body) : event.body ;
    return Cognito.mfa(poolData, body, (err, res) => {
      return (err) ? cb(CustomError(err)) : cb(null, Success(res));
    });
  }

};
