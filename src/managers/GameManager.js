import EntityManager from './EntityManager';
import Game from '../data/Game';

export default class GameManager extends EntityManager {

  constructor() {
    super(Game);
  }

  generatePath(pathData) {
    return ['games', pathData.gameId];
  }
}
