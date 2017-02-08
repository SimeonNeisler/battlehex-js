import _ from 'lodash';
import TimeStamped from './TimeStamped.js';

export default class Identity extends TimeStamped {

  constructor(pathData, rawData) {
    super(pathData, rawData);
    this.pathData = pathData;
    this.rawData = rawData;
  }

  getId() {
    console.log(this.rawData.id)
    return _.get(this.rawData, 'id');
  }

  getUserId() {
    console.log(this.rawData.userId)
    return _.get(this.rawData, 'userId');
  }

  getProvider() {
    console.log(this.rawData.provider)
    return _.get(this.rawData, 'provider');
  }

  getProviderUserId() {
    console.log(this.rawData.providerUserId);
    return _.get(this.rawData, 'providerUserId');
  }

  getAccessToken() {
    console.log(this.rawData.accessToken);
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

  getAll() {
    this.getId();
    this.getUserId();
    this.getProvider();
    this.getProviderUserId();
    this.getAccessToken();
    console.log(this.pathData);
  }

  /*addNewIdentity(newId, newUserId, newProvider, newProviderUserId, newAccessToken) {
    this.addId(value, newId);
    this.addUserId(value, newUserId);
    this.addProvider(value, newProvider);
    this.addProviderUserId(value, newProviderUserId);
    this.addAccessToken(value, newAccessToken);
    addTimeStamps(value);
  }*/
}
