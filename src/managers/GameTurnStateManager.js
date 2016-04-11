import EntityManager from './EntityManager';
import GameTurnState from '../data/GameTurnState';

export default class GameTurnStateManager extends EntityManager {

  constructor() {
    super(GameTurnState);
  }

  generatePath(pathData) {
    return ['gameTurnStates', pathData.turnId];
  }
}
