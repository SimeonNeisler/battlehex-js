import _ from 'lodash';
import TimeStamped from './TimeStamped';

export default class DeckCard extends TimeStamped {

  getDeckId() {
    return _.get(this.rawData, 'deckId');
  }

  getCardId() {
    return _.get(this.rawData, 'cardId');
  }

  getIndex() {
    return _.get(this.rawData, 'index');
  }

  getTotal() {
    return _.get(this.rawData, 'total');
  }

  setDeckId(value, newDeckId) {
    _.assign(value, {
      deckId: newDeckId;
    })
  }

  setCardId(value, newCardId) {
    _.assign(value, {
      cardId: newCardId;
    })
  }

  setIndex(value, newIndex) {
    _.assign(value, {
      index: newIndex;
    })
  }

  setTotal(value, newTotal) {
    _.assign(value, {
      total: newTotal;
    })
  }

  addNewDeckCard(value, newDeckId, newCardId, newIndex, newTotal) {
    this.setDeckId(value, newDeckId);
    this.setCardId(value, newCardId);
    this.setIndex(value, newIndex);
    this.setTotal(value, newTotal);
    addTimeStamps(value);
  }

}
