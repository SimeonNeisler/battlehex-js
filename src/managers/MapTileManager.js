import EntityManager from './EntityManager';
import MapTile from '../data/MapTile';

export default class MapTileManager extends EntityManager {

  constructor() {
    super(MapTile);
  }

  generatePath(pathData) {
    return ['mapTiles', pathData.tiles];
  }

  getMapTileId(MapTile) {
    MapTile.getId();
  }

  getMapTileNum(MapTile) {
    MapTile.getTileNum();
  }

  getMapTileTerrain(MapTile) {
    MapTile.getTerrain();
  }

  getMapTileResource(MapTile) {
    MapTile.getResource();
  }

  getMapTileResourceQuantity(MapTile) {
    MapTile.getResourceQuantity();
  }

  getMapTileBoardUnit(MapTile) {
    MapTile.getBoardUnit();
  }
}
