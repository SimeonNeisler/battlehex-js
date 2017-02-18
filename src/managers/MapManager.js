import EntityManager from './EntityManager';
import Map from '../data/Map';

export default class MapManager extends EntityManager {

  constructor() {
    super(Map);
  }

  generatePath(pathData) {
    return ['maps', pathData.map];
  }

  Combat(Map, TileId1, TileId2) {
    if()
    Tiles = Map.getTiles();
    Tile1 = Tiles.getMapTileById(TileId1);
    Tile2 = Tiles.getMapTileById(TileId2);

    Attacker = Tile1.getMapTileBoardUnit();
    Defender = Tile2.getMapTileBoardUnit();

    if(Distance > Defender.getUnitRange()) {
      Defender.setUnitHealth(Defender.getUnitHealth - Attacker.getUnitDamage);
    }
    else {
      Attacker.setUnitHealth(Attacker.getUnitHealth - Defender.getUnitDamage);
      Defender.setUnitHealth(Defender.getUnitHealth - Attacker.getUnitDamage);
      if Attacker.getUnitHealth <= 0 {

      }
    }
  }
}
