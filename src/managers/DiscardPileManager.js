import EntityManager from './EntityManager';
import DiscardPile from '../data/DiscardPile';

export default class DiscardPileManager extends EntityManager {

  constructor() {
    super(DiscardPile);
  }

  generatePath(pathData) {
    return ['discardPiles', pathData.discardPile];
  }
}
