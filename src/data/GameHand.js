import _ from 'lodash';
import Entity from './Entity';

export default class GameHand extends Entity {

  getUserId() {
    return _.get(this.rawData, 'userId');
  }

  getGameId() {
    return _.get(this.rawData, 'gameId');
  }

  getHandSize() {
    return _.get(this.rawData, 'handSize');
  }

  getHandContents() {
    return _.get(this.rawData, 'handContents');
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

  setHandSize(value, newHandSize) {
    _.assign(value, {
      handSize: newHandSize;
    })
  }

  addCardToHand(value, newCard) {
    _.assign(value, {
      handContets: this.handContents.add(newCard);
    })
  }

  removeCardFromHand(value, removedCard) {
    _.assign(value, {
      handContents: this.handContents.remove(removedCard);
    })
  }



  addNewGameHand(value, newUserId, newGameId, newHandSize) {
    this.setUserId(value, newUserId);
    this.setGameId(value, newGameId);
    this.setHandSize(value, newHandSize);
    addTimeStamps(value);
  }

}
