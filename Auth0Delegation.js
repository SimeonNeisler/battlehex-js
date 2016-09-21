function (user, context, callback) {
  var isFirebase = context.isDelegation && context.request.body.api_type === "firebase";
  if (isFirebase) {
    var identity = user.identities[0];
    var identityId = identity.provider + "|" + identity.user_id;
    var firebaseURL = "";
    var firebaseSecret = "";

    switch (context.clientID) {
      case configuration.PROD_AUTH0_CLIENT_ID:
      firebaseURL = configuration.PROD_FIREBASE_URL;
      firebaseSecret = configuration.PROD_FIREBASE_SECRET;
      break;
      case configuration.SIMEON_AUTH0_CLIENT_ID:
      firebaseURL = configuration.SIMEON_FIREBASE_URL;
      firebaseSecret = configuration.SIMEON_FIREBASE_SECRET;
      break;
    }
    var getURL = firebaseURL + "/identities/" + identityId + ".json?auth=" + firebaseSecret;
    request.get({
      "url": getURL
    },
    function (err, response, body) {
      if (err) {
        return callback(err);
      } else {
        if (response.statusCode === 200) {
          var data = JSON.parse(body);
          if (!data) {
            return callback(new Error('Cannot find user for identityId "' + identityId + '"'));
          }
          user.firebase_data = {
            uid: data.userId
          };
          return callback(null, user, context);
        } else {
          return callback(new Error('The login returned an unknown error. Status: ' + response.statusCode + 'Body: ' + body));
        }
      }
    });
  } else {
    return callback(null, user, context);
  }
}
