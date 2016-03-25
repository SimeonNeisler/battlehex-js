import _ from 'lodash';
import TimeStamped from './Timestamped';

export default class Entity extends TimeStamped {

  getId() {
    return _.get(this.rawData, 'id');
  }


}
