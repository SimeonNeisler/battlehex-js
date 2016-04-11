import EntityManager from './EntityManager';
import GameHand from '../data/GameHand';

export default class GameHandManager extends EntityManager {

  constructor() {
    super(GameHand);
  }

  generatePath(pathData) {
    return ['hands', pathData.hand];
  }
}
