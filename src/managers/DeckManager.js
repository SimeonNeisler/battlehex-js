import EntityManager from './EntityManager';
import Deck from '../data/Deck';

export default class DeckManager extends EntityManager {

  constructor() {
    super(Deck);
  }

  generatePath(pathData) {
    return ['decks', pathData.deckId];
  }
}
