'use strict';


/**
 * Initial Clever auth endpoint
 * Find a user's Clever authentication status. Has 3 distinct status codes, each signifying a different body value type.  'SUCCESS', 'MERGE', 'NEW'  On success, the body property will contain the necessary information to log the user into your application  On merge, the body will contain the user's account info. Have the user attempt to sign in (make sure to autofill the codename field) and, on success, the user's Story Squad account will be linked to their Clever login.  On new, the body will contain the user's Clever profile info. This info should be populated into the signup form. When the user signs up in this manner, their Story Squad and Clever accounts will be automatically linked. 
 *
 * code String Code from the Clever API
 * returns inline_response_200_1
 **/
exports.cleverOAuthInit = function(code) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = "";
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Clever merge accounts
 * Merge a user's existing Story Squad account with their Clever SSO account. This endpoint should be used when a user attempts to log in with Clever and the main endpoint returns an object with the 'MERGE' status. 
 *
 * cleverId String User's clever ID
 * returns authResponse
 **/
exports.cleverOAuthMerge = function(cleverId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "user" : "",
  "token" : "tstrysejmkhbzdsear.fgjfxghsdfghsdteryhxcvxh.sijjtgcmxfhdzfgsdfhgf"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * new account for Clever user
 * Create a new Story Squad account for a user that will be linked to their Clever information automatically. 
 *
 * body Body_1  (optional)
 * userType String User type
 * cleverId String User's Clever ID
 * returns authResponse
 **/
exports.cleverOAuthNew = function(body,userType,cleverId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "user" : "",
  "token" : "tstrysejmkhbzdsear.fgjfxghsdfghsdteryhxcvxh.sijjtgcmxfhdzfgsdfhgf"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * log a user in
 * Log in to the application with your Story Squad account credentials 
 *
 * body Body  (optional)
 * returns authResponse
 **/
exports.login = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "user" : "",
  "token" : "tstrysejmkhbzdsear.fgjfxghsdfghsdteryhxcvxh.sijjtgcmxfhdzfgsdfhgf"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Login with Clever link retrieval
 * This endpoint returns a URL that, when visited, takes the user to their Clever Login Portal. After logging in, the user will be redirected back to the application's Redirect URI. 
 *
 * returns inline_response_200
 **/
exports.loginWithCleverButton = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "url" : "https://clever.com/oauth/authorize?redirect_uri=..."
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * register a user
 * Register a new Story Squad account
 *
 * body NewUser  (optional)
 * returns authResponse
 **/
exports.register = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "user" : "",
  "token" : "tstrysejmkhbzdsear.fgjfxghsdfghsdteryhxcvxh.sijjtgcmxfhdzfgsdfhgf"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

