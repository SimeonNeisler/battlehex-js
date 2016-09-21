import _ from 'lodash';
import TimeStamped from './TimeStamped.js';

export default class Entity extends TimeStamped {

  constructor(pathData, rawData){
    super();
    this.pathData = pathData;
    this.rawData = rawData;
    this.addTimeStamps();
  }

  getId() {
    return _.get(this.rawData, 'id');
  }


}
