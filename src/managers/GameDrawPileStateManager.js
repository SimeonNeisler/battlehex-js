import EntityManager from './EntityManager';
import GameDrawPileState from '../data/GameDrawPileState';

export default class GameDrawPileStateManager extends EntityManager {

  constructor() {
    super(GameDrawPileState);
  }

  generatePath(pathData) {
    return ['gameDrawPileState', pathData.drawPileId];
  }
}
