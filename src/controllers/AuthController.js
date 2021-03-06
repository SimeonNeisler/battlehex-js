import Firebase from '../helpers/Firebase.js';
import Auth0Lock from 'react-native-lock';

export default class AuthController {

  constructor(identityManager, userManager) {
    this.identityManager = identityManager;
    this.userManager = userManager;
    this.lock = new Auth0Lock({clientId: '1sSkRR588YOSj5pNPt9pHIC9M7JMTMBA', domain: 'battlehex.auth0.com'});
  }


  /*//React Native Async storage
  //1. User logs in with facebook
  //2. Generate an Identity
  //  a. If identity already exists, lock from everyone except that user
  //  b. If not, create that identity using returned info
  //3. Generate User using credentials from identity
  //  a. Lookup user by IdentityID
  //  b. if user exists, lookup user
  //  c. if not, create a new user
  //4. Authenticating firebase with Identity
  //  a. generate delegation token with Identity Id token using Auth0 API
  //  b. after delegation token returned, use it to Auth with firebaseDB (AuthWithCustomToken)
  //5. Save delegation token for reuse later (refresh token) on device storage (React Native Async Storage)
  //6.

  When you get the delegation token, make a post-call to the Auth0 api
  when you make the call to the auth0 api make it to the auth0 delegation endpoint
  make call with these values: {
    grant_type: 'urn:ietf:params:oauth:grant-type:jwt-bearer',
    scope: 'openid',
    api_type: 'firebase',
    id_token: [your idToken],
    client_id: [your auth0 client id]
  }*/

  /*identityGeneration(newId, newUserId, newProvider, newProviderUserId, newAccessToken) {
    var ref = new Firebase("https://battlehex.firebaseio.com");
    newIdentity = this.identityManager.generateIdentity(newId, newUserId, newProvider, newProviderUserId, newAccessToken);
    ref.child("identities").push(newIdentity);
  }*/
  login() {
    var ref = new Firebase('https://battlehex.firebaseio.com');
    this.lock.show({}, (err, profile, token) => {
      if (err) {
        console.log(err);
        return;
      }
      console.log(ref);
      provider = profile.identities[0].provider;
      providerUserId = profile.identities[0].userId;
      id = profile.userId;
      accessToken = token.accessToken;
      auth = ref.getAuth();
      /*if (auth == null) {
        ref.createUser({
          provider:
        }, null);
      }*/
      //console.log(auth);
      // Authentication worked!
      console.log('Logged in with Auth0!');
      console.log(profile);
      console.log(token);
      identityManager = this.identityManager;
      var identityQueryResult;
      var identityQuery = ref
        .child("objects")
        .child("identities")
        .orderByChild("id")
        .equalTo(id)
        .once('value', function(snapshot) {
          identityQueryResult = snapshot.val();
          console.log(identityQueryResult);
          var newIdentityPath = ("http://battlehex.firebaseio.com/objects/identities/" + id);
          if (identityQueryResult == null) {
            debugger;
            var newIdentity = identityManager.generateIdentity(newIdentityPath, id, null, provider, providerUserId, accessToken);
            newIdentity.getAll();
          }
        }, function(err) {
            debugger;
            console.log("No data read.");
              if (!identityQueryResult) {
                //var newIdentity = this.identityManager.generateIdentity(id, null, provider, providerUserId, accessToken);
                //ref.child("Identities").push(newIdentity);
              }
        });
    /*
    Identities table: (Stores user ID, ) New identities can be created by anyone, identities can only be read or writen by user that owns them
    Users table:
    MapIdentityID>UserID table: IdentityID:UserID key value table
    Auth0Token > Delegate method > Query DB with new DelegationToken
    AuthWithCustomToken to authenticate with DB
    .post(`https://${Config.get('auth0Endpoint')}/delegation', {
      grant_type: 'urn:ietf:params:oauth:grant-type:jwt-bearer',
      scope: 'openid',
      api_type: 'firebase',
      id_token: idToken,
      client_id: Config.get('auth0ClientId')
    }).then(res => res.body);
  }

    */


    //--------------------------------------------------

    /*console.log("Printing Identity Query");
    console.log(identityQueryResult);
    if (!identityQueryResult) {
      debugger;
      var newIdentity = this.identityManager.generateIdentity(id, null, provider, providerUserId, accessToken);
      ref.child("Identities").push(newIdentity);
    }else if (identityQuery!= null) {
      var userQuery = ref.child("Users").orderByChild("id").equalTo(identityQuery.userId);
      if (userQuery == null) {
        ref.child("Users").child(auth.uid).set({
          userName: profile.name
        });
        ref.child("Identities").child(newIdentity).set({
          userId: auth.uid
        });
      }
    }*/
    });
  }
}
