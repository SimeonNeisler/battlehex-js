import _ from 'lodash';
import Entity from './Entity.js';

export default class BoardUnit extends Entity {
  contructor(name, player, health, maxHealth, damage, moves, range, attackDirections) {
    this.name = name;
    this.player = player;
    this.health = health;
    this.maxHealth = maxHealth;
    this.damage = damage;
    this.moves = moves;
    this.range = range;
    this.attackDirections = attackDirections;
  }

  getUnitName() {
    return _.get(this.rawData, 'name');
  }
  getUnitPlayer() {
    return _.get(this.rawData, 'player');
  }
  getUnitHealth() {
    return _.get(this.rawData, 'health');
  }
  getUnitMaxHealth() {
    return _.get(this.rawData, 'maxHealth');
  }
  getUnitDamage() {
    return _.get(this.rawData, 'damage');
  }
  getUnitMoves() {
    return _.get(this.rawData, 'moves');
  }
  getUnitRange() {
    return _.get(this.rawData, 'range');
  }
  getUnitAttackDirections() {
    return _.get(this.rawData, 'attackDirections');
  }
  setUnitName(value, newName) {
    _.assign(value, {
      name: newName
    });
  }
  setUnitPlayer(value, newPlayer) {
    _.assign(value, {
      player: newPlayer
    });
  }
  setUnitHealth(value, newHealth) {
    _.assign(value, {
      health: newHealth
    });
  }
  setUnitMaxHealth(value, newMaxHealth) {
    _.assign(value, {
      maxHealth: newMaxHealth
    });
  }
  setUnitDamage(value, newDamage) {
    _.assign(value, {
      damage: newDamage
    });
  }
  setUnitRange(value, newRange) {
    _.assign(value, {
      range: newRange
    });
  }
  setUnitAttackDirections(value, newAttackDirections) {
    _.assign(value, {
      attackDirections: newAttackDirections
    });
  }
}
