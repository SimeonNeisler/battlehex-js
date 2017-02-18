import _ from 'lodash';
import Entity from './Entity.js';
import MapTile from './MapTile.js';

export default class Map extends Entity {

  getGameId() {
    return _.get(this.rawData, 'gameId');
  }

  getTiles() {
    return _.get(this.rawData, 'tiles');
  }

  getMapTileById(MapTileId) {
    MapTiles = this.getTiles();
    return MapTiles.get(MapTileId);
  }

  setGameId(value, newGameId) {
    _.assign(value, {
      gameId: newGameId
    });
  }


  //Ask about procedure for populating map with tiles

  //Maybe have a random tile generator and addit multiple times?

  addNewMap(value, newGameId) {
    this.setGameId(value, newGameId);
    addTimeStamps(value);
  }

}
