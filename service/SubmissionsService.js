'use strict';


/**
 * submit page
 * Upload a handwritten image. 
 *
 * sourceId BigDecimal Source of the submission. 1 = FDSC, 2 = Rumble 
 * returns inline_response_201
 **/
exports.submitPage = function(sourceId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "message" : "message"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

