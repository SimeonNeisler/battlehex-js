import _ from 'lodash';
import Entity from './Entity';

export default class Game extends Entity {

  getName() {
    return _.get(this.rawData, 'name');
  }

  setName(value, newName) {
    _.assign(value, {
      name: newName;
    })
  }


  addNewGame(value, newName) {
    this.setName(value, newName);
    addTimeStamps(value);
  }

}
