import _ from 'lodash';
import Entity from './Entity';

export default class GameHand extends Entity {

  getUserId() {
    return _.get(this.rawData, 'userId');
  }

  getGameId() {
    return _.get(this.rawData, 'gameId');
  }

  getNumberCards() {
    return _.get(this.rawData, 'numberCards');
  }

  getDrawPileIndex() {
    return _.get(this.rawData, 'drawPileIndex');
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

  setNumberCards(value, newNumberCards) {
    _.assign(value, {
      numberCards: newNumberCards;
    })
  }

  setDrawPileIndex(value, newDrawPileIndex) {
    _.assign(value, {
      drawPileIndex: newDrawPileIndex;
    })
  }

  addNewGameDrawPileState(value, newUserId, newGameId, newNumberCards, newDrawPileIndex) {
    this.setUserId(value, newUserId);
    this.setGameId(value, newGameId);
    this.setNumberCards(value, newNumberCards);
    this.setDrawPileIndex(value, newDrawPileIndex);
    addTimeStamps(value);
  }

}
