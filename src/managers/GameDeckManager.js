import EntityManager from './EntityManager';
import GameDeck from '../data/GameDeck';

export default class GameDeckManager extends EntityManager {

  constructor() {
    super(GameDeck);
  }

  generatePath(pathData) {
    return ['gameDecks', pathData.gameDeck];
  }
}
