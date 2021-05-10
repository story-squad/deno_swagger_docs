'use strict';

var utils = require('../utils/writer.js');
var Auth = require('../service/AuthService');

module.exports.cleverOAuthInit = function cleverOAuthInit (req, res, next, code) {
  Auth.cleverOAuthInit(code)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.cleverOAuthMerge = function cleverOAuthMerge (req, res, next, cleverId) {
  Auth.cleverOAuthMerge(cleverId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.cleverOAuthNew = function cleverOAuthNew (req, res, next, body, userType, cleverId) {
  Auth.cleverOAuthNew(body, userType, cleverId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.login = function login (req, res, next, body) {
  Auth.login(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.loginWithCleverButton = function loginWithCleverButton (req, res, next) {
  Auth.loginWithCleverButton()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.register = function register (req, res, next, body) {
  Auth.register(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
