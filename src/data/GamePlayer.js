import _ from 'lodash';
import TimeStamped from './Timestamped';

export default class GamePlayer extends TimeStamped {

  getUserId() {
    return _.get(this.rawData, 'userId');
  }

  setUserId(value, newUserId) {
    _.assign(value, {
      userId: newUserId;
    })
  }

  addNewGamePlayer(value, newUserId) {
    this.setUserId(value, newUserId);
    addTimeStamps(value);
  }
}
