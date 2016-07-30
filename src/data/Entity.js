import _ from 'lodash';
import TimeStamped from './TimeStamped.js';

export default class Entity extends TimeStamped {

  getId() {
    return _.get(this.rawData, 'id');
  }


}
