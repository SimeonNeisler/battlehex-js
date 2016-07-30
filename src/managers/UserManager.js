import EntityManager from './EntityManager';
import User from '../data/User';

export default class UserManager extends EntityManager {

  constructor() {
    super(User);
  }

  generatePath(pathData) {
    return ['users', pathData.userId];
  }
}
