import EntityManager from './EntityManager';
import MapTile from '../data/MapTile';

export default class MapTileManager extends EntityManager {

  constructor() {
    super(MapTile);
  }

  generatePath(pathData) {
    return ['mapTiles', pathData.tiles];
  }
}
