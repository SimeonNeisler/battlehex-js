import EntityManager from './EntityManager';
import Gamecard from '../data/GameCard';

export default class GameCardManager extends EntityManager {

  constructor() {
    super(GameCard);
  }

  generatePath(pathData) {
    return ['gameCards', pathData.gameCardId];
  }
}
