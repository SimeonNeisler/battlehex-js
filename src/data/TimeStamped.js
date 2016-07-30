import {Firebase} from '../helpers';
import _ from 'lodash';

export default class TimeStamped extends Firebase {

  getUpdatedAt(){
    return _.get(this.rawData, 'updatedAt');
  }

  getCreatedAt(){
    return _.get(this.rawData, 'createdAt');
  }

  async push(value, onComplete){
    this.addTimeStamps(value);
    return await super.push(value, onComplete);
  }

  async set(value, onComplete){
    this.addTimeStamps(value);
    return await super.set(value, onComplete);
  }

  async update(value, onComplete){
    this.addUpdatedAt(value);
    return await super.update(value, onComplete);
  }

  addCreatedAt(value){
    _.assign(value, {
      createdAt: Firebase.timeStamp()
    });
  }

  addUpdatedAt(value){
    _.asign(value, {
      updatedAt: Firebase.timeStamp()
    });
  }

  addTimeStamps(value){
    this.addCreatedAt(value);
    this.addUpdatedAt(value);
  }
}
