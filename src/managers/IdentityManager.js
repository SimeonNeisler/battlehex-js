import EntityManager from './EntityManager';
import Identity from '../data/Identity';

export default class IdentityManager extends EntityManager {

  constructor() {
    super(Identity);
  }

  generatePath(pathData) {
    return ['identities', pathData.identityId];
  }
  generateIdentity(pathData, newId, newUserId, newProvider, newProviderUserId, newAccessToken) {
    //generatePath(pathData);
    rawData = {id: newId,
                    userid: newUserId,
                    provider: newProvider,
                    providerUserId: newProviderUserId,
                    accessToken: newAccessToken};
    super.generateEntity(pathData, rawData);
    //newIdentity = Identity.addNewIdentity(newId, newUserId, newProvider, newProviderUserId, newAccessToken);
    //return newIdentity;
  }
}
