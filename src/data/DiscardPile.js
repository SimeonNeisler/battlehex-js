import _ from 'lodash';
import Entity from './Entity';

export default class DiscardPile extends Entity {

  getUserId() {
    return _.get(this.rawData, 'userId');
  }

  getGameId() {
    return _.get(this.rawData, 'gameId');
  }

  getContents() {
    return _.get(this.rawData, 'contents');
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

  addCardToDiscardPile(value, newCard) {
    _.assign(value, {
      contets: this.contents.add(newCard);
    })
  }

  removeCardFromDiscardPile(value, removedCard) {
    _.assign(value, {
      contents: this.contents.remove(removedCard);
    })
  }

  addNewDiscardPile(value, newUserId, newGameId) {
    this.setUserId(value, newUserId);
    this.setGameId(value, newGameId);
    addTimeStamps(value);
  }

}
