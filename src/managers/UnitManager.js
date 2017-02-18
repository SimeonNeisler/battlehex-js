import EntityManager from './EntityManager';
import Unit from '../data/Unit';

export default class UnitManager extends EntityManager {

  constructor() {
    super(Unit);
  }

  generatePath(pathData) {
    return ['Units', pathData.UnitId];
  }

  getUnitName(Unit) {
    Unit.getUnitName();
  }

  getUnitHealth(Unit) {
    Unit.getUnitHealth();
  }

  getUnitPlayer(Unit) {
    Unit.getUnitPlayer();
  }

  getUnitMaxHealth(Unit) {
    Unit.getUnitMaxHealth();
  }

  getUnitDamage(Unit) {
    Unit.getUnitDamage();
  }

  getUnitMoves(Unit) {
    Unit.getUnitMoves();
  }

  getUnitRange(Unit) {
    Unit.getUnitRange();
  }

  getUnitAttackDirections(Unit) {
    Unit.getUnitAttackDirections();
  }
  
}
