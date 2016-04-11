import EntityManager from './EntityManager';
import GamePlayer from '../data/GamePlayer';

export default class GamePlayerManager extends EntityManager {

  constructor() {
    super(GamePlayer);
  }

  generatePath(pathData) {
    return ['gamePlayer', pathData.gameId.info];
  }
}
