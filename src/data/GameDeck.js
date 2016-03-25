import _ from 'lodash';
import Entity from './Entity';

export default class GameDeck extends Entity {

  getUserId() {
    return _.get(this.rawData, 'userId');
  }

  getGameId() {
    return _.get(this.rawData, 'gameId');
  }

  getDeckName() {
    return _.get(this.rawData, 'deckName');
  }

  getDeckSize() {
    return _.get(this.rawData, 'deckSize');
  }

  getDeckCards() {
    return _.get(this.rawData, 'deckCards');
  }

  setUserId(value, newUserId) {
    _.assign(value, {
      userId: newUserId;
    })
  }

  setGameId(value, newGameId) {
    _.assign(value, {
      gameId: newGameId;
    })
  }

  setDeckName(value, newDeckName) {
    _.assign(value, {
      deckName: newDeckName;
    })
  }

  setDeckSize(value, newDeckSize) {
    _.assign(value, {
      deckSize: newDeckSize;
    })
  }

  //Needs a different method since it duplicates a User's deck
  setDeckCards(value, newRange) {
    _.assign(value, {
      cardRange: newRange;
    })
  }


  addNewGameDeck(value, newId, newUserId, newGameId, newDeckName, newDeckSize) {
    this.setId(value, newId);
    this.setUserId(value, newUserId);
    this.setGameId(value, newGameId);
    this.setDeckName(value, newDeckName;
    this.setDeckSize(value, newDeckSize);
    addTimeStamps(value);
  }

}
