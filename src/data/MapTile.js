import _ from 'lodash';
import Entity from './Entity';

export default class MapTile extends Entity {

  getTileNum() {
    return _.get(this.rawData, 'tileNum');
  }

  getTerrain() {
    return _.get(this.rawData, 'terrain');
  }

  getResource() {
    return _.get(this.rawData, 'resource');
  }

  getResourceQuantity() {
    return _.get(this.rawData, 'resourceQuantity');
  }

  getBoardUnit() {
    return _.get(this.rawData, 'boardUnit');
  }

  setTileNum(value, newTileNum) {
    _.assign(value, {
      tileNum: newTileNum;
    })
  }

  setTerrain(value, newTerrain) {
    _.assign(value, {
      terrain: newTerrain;
    })
  }

  setResource(value, newResource) {
    _.assign(value, {
      resource: newResource;
    })
  }

  setResourceQuantity(value, newResourceQuantity) {
    _.assign(value, {
      resourceQuantity: newResourceQuantity;
    })
  }

  setBoardUnit(value, newBoardUnit) {
    _.assign(value, {
      boardUnit: newBoardUnit;
    })
    this.addUpdatedAt(value);
  }

  //Ask about procedure for populating map with tiles

  //Maybe have a random tile generator and addit multiple times?

  addNewTile(value, newTileNum, newTerrain, newResource, newResourceQuantity) {
    this.setTileNum(value, newTileNum);
    this.setTerrain(value, newTerrain);
    this.setResource(value, newResource);
    this.setResourceQuantity(value, newResourceQuantity);
    addTimeStamps(value);
  }

}
