import _ from 'lodash';
import Entity from './Entity.js';

export default class Deck extends Entity {

  getDeckName() {
    return _.get(this.rawData, 'deckName');
  }

  getUserId() {
    return _.get(this.rawData, 'userId');
  }

  setDeckName(value, newName) {
    _.assign(value, {
      deckName: newName
    });
  }

  setUserId(value, newUserId) {
    _.assign(value, {
      userId: newUserId
    });
  }

  addNewDeck(value, newDeckName, newUserId) {
    this.setDeckName(value, newName);
    this.setUserId(value, newId);
    addTimeStamps(value);
  }

}
