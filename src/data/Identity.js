import _ from 'lodash';
import TimeStamped from './TimeStamped.js';

export default class Identity extends TimeStamped {

  getId() {
    return _.get(this.rawData, 'id');
  }

  getUserId() {
    return _.get(this.rawData, 'userId');
  }

  getProvider() {
    return _.get(this.rawData, 'provider');
  }

  getProviderUserId() {
    return _.get(this.rawData, 'providerUserId');
  }

  getAccessToken() {
    return _.get(this.rawData, 'accessToken');
  }

  addId(value, newId) {
    _.assign(value, {
      id: newId
    });
  }

  addUserId(value, newUserId) {
    _.assign(value, {
      userId: newUserId
    });
  }

  addProvider(value, newProvider) {
    _.assign(value, {
      provider: newProvider
    });
  }

  addProviderUserId(value, newProviderUserId) {
    _.assign(value, {
      providerUserId: newProviderUserId
    });
  }

  addAccessToken(value, newAccessToken) {
    _.assign(value, {
      accessToken: newAccessToken
    });
  }

  addNewIdentity(newId, newUserId, newProvider, newProviderUserId, newAccessToken) {
    this.addId(value, newId);
    this.addUserId(value, newUserId);
    this.addProvider(value, newProvider);
    this.addProviderUserId(value, newProviderUserId);
    this.addAccessToken(value, newAccessToken);
    addTimeStamps(value);
    }
}
