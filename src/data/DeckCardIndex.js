import _ from 'lodash';
import {Firebase} from '../helpers';

export default class DeckCardIndex extends Firebase {

  getCardId() {
    return _.get(this.rawData, 'cardId');
  }

  getIndex() {
    return _.get(this.rawData, 'index');
  }

  setCardId(value, newCardId) {
    _.assign(value, {
      cardId: newCardId
    });
  }

  setIndex(value, newIndex) {
    _.assign(value, {
      index: newIndex
    });
  }

  addNewDeckCard(value, newDeckId, newCardId, newIndex, newTotal) {
    this.setCardId(value, newCardId);
    this.setIndex(value, newIndex);
  }

}
