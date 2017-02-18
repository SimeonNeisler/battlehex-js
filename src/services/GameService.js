import MapManager from '../managers/MapManager';
import UnitManager from '../managers/UnitManager';

export default class GameService {

  constructor(MapManager, UnitManager) {
    this.MapManager = MapManager;
    this.UnitManager = UnitManager;
  }

  InitiateCombat(TileId1, TileId2) {
    
  }
}
