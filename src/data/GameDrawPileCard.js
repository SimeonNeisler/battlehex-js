import {Firebase} from '../helpers';
import _ from 'lodash';

export default class GameDrawPileCard extends Firebase {

  getIndex(){
    return _.get(this.rawData, 'index');
  }

  getName(){
    return _.get(this.rawData, 'name');
  }

  setIndex(value, newIndex) {
    _.assign(value, {
      index: newIndex;
    })
  }

  setName(value, newName) {
    _.assign(value, {
      name: newName;
    })
  }
}
