import EntityManager from './EntityManager';
import Identity from '../data/Identity';

export default class IdentityManager extends EntityManager {

  constructor() {
    super(Identity);
  }

  generatePath(pathData) {
    return ['identities', pathData.identityId];
  }
/*  generateIdentity(pathData, newId, newUserId, newProvider, newProviderUserId, newAccessToken) {
    generatePath(pathData);
    identityData = {id: newId,
                    userid: newUserId,
                    provider: newProvider,
                    providerUserId: newProviderUserId,
                    accessToken: newAccessToken};
    super.generateEntity(pathData, identityData);
    //newIdentity = Identity.addNewIdentity(newId, newUserId, newProvider, newProviderUserId, newAccessToken);
    //return newIdentity;
  }*/
}
