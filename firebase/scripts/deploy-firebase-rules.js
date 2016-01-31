'use strict';
var client = require('firebase-tools');

var firebaseToken = '-K6KXaHyI1r2UPFUSUtQ|4b2d23c6ab26ca6e245d9f5af0069933';
var firebaseName = 'battlehex';

return client.deploy.rules({
  firebase: firebaseName,
  token: firebaseToken,
  cwd: __dirname + "/.."
}).then(function () {
  process.exit(0);
}).catch(function (err) {
  console.log("Error occurred while deploying firebase rules");
  console.log(err);
  process.exit(1);
});