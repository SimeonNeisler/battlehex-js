import EntityManager from './EntityManager';
import Identity from '../data/Identity';

export default class IdentityManager extends EntityManager {

  constructor() {
    super(Identity);
  }

  generatePath(pathData) {
    return ['identities', pathData.identityId];
  }
  generateIdentity(newId, newUserId, newProvider, newProviderUserId, newAccessToken) {
    this.entityClass.addNewIdentity(newId, newUserId, newProvider, newProviderUserId, newAccessToken);
  }
}
