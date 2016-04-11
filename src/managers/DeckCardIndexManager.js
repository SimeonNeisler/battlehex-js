import EntityManager from './EntityManager';
import DeckCardIndex from '../data/DeckCardIndex';

export default class DeckCardIndexManager extends EntityManager {

  constructor() {
    super(DeckCardIndex);
  }

  generatePath(pathData) {
    return ['cardsIndex', pathData.index];
  }
}
