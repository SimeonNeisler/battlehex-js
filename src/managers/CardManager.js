import EntityManager from './EntityManager';
import Card from '../data/Card';

export default class CardManager extends EntityManager {

  constructor() {
    super(Card);
  }

  generatePath(pathData) {
    return ['cards', pathData.cardId];
  }
}
