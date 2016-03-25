import _ from 'lodash';
import Entity from './Entity';

export default class GameturnState extends Entity {

  getGameId() {
    return _.get(this.rawData, 'gameId');
  }

  getUserId() {
    return _.get(this.rawData, 'userId');
  }

  getComplete() {
    return _.get(this.rawData, 'complete')
  }

  setGameId(value, newGameId) {
    _.assign(value, {
      gameId: newGameId;
    })
    this.addUpdatedAt(value);
  }

  setUserId(value, newUserId) {
    _.assign(value, {
      userId: newUserId;
    })
    this.addUpdatedAt(value);
  }

  setComplete(value, newTurnComplete) {
    _.assign(value, {
      complete: newTurnComplete;
    })
    this.addUpdatedAt(value);
  }

}
