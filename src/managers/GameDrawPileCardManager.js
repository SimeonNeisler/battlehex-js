import EntityManager from './EntityManager';
import GameDdrawPileCard from '../data/GameDrawPileCard';

export default class GameDrawPileCardManager extends EntityManager {

  constructor() {
    super(GameDrawPileCard);
  }

  generatePath(pathData) {
    return ['gameDrawPileCards', pathData.drawPileIndex];
  }
}
