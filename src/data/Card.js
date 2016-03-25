import _ from 'lodash';
import Entity from './Entity';

export default class Card extends Entity {

  getCardName() {
    return _.get(this.rawData, 'cardName');
  }

  getCardCost() {
    return _.get(this.rawData, 'cardCost');
  }

  getCardStrength() {
    return _.get(this.rawData, 'cardStrength');
  }

  getCardHP() {
    return _.get(this.rawData, 'cardHP');
  }

  getCardRange() {
    return _.get(this.rawData, 'cardRange');
  }

  getCardDeployCost() {
    return _.get(this.rawData, 'cardDeployCost');
  }

  setCardName(value, newName) {
    _.assign(value, {
      cardName: newName;
    })
  }

  setCardCost(value, newCost) {
    _.assign(value, {
      cardCost: newCost;
    })
  }

  setCardStrength(value, newStrength) {
    _.assign(value, {
      cardStrength: newStrength;
    })
  }

  setCardHP(value, newHP) {
    _.assign(value, {
      cardHP: newHP;
    })
  }
  setCardRange(value, newRange) {
    _.assign(value, {
      cardRange: newRange;
    })
  }

  setCardDeployCost(value, newDeployCost) {
    _.assign(value, {
      cardDeployCost: newDeployCost;
    })
  }

  addNewCard(value, newName, newCost, newStrength, newHP, newRange, newDeployCost) {
    this.setCardName(value, newName);
    this.setCardCost(value, newCost);
    this.setCardStrength(value, newStrength);
    this.setCardHP(value, newHP);
    this.setCardRange(value, newRange);
    this.setCardDeployCost(value, newDeployCost);
    addTimeStamps(value);
  }

}
