'use strict';

var utils = require('../utils/writer.js');
var Submissions = require('../service/SubmissionsService');

module.exports.submitPage = function submitPage (req, res, next, sourceId) {
  Submissions.submitPage(sourceId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
