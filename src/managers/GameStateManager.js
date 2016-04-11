import EntityManager from './EntityManager';
import GameState from '../data/GameState';

export default class GameStateManager extends EntityManager {

  constructor() {
    super(GameState);
  }

  generatePath(pathData) {
    return ['gameState', pathData.cardId];
  }
}
