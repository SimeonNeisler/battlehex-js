import EntityManager from './EntityManager';
import Map from '../data/Map';

export default class NapManager extends EntityManager {

  constructor() {
    super(Map);
  }

  generatePath(pathData) {
    return ['maps', pathData.map];
  }
}
