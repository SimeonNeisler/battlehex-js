import {Firebase} from '../helpers';
import GameTurnState from './GameTurnState.js';
import _ from 'lodash';

export default class GameState extends Firebase {

  getGameId(){
    return _.get(this.rawData, 'gameId');
  }

  getCurrentGameTurnId(){
    return _.get(this.rawData, 'currentGameTurnId');
  }

  setGameId(value, newGameId) {
    _.assign(value, {
      gameId: newGameId
    });
  }

  setCurrentGameturnId(value, newCurrentGameTurnId) {
    _.assign(value, {
      currentGameTurnId: newCurrentGameTurnId
    });
  }
}
