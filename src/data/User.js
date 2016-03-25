import _ from 'lodash';
import TimeStamped from './Timestamped';

export default class User extends TimeStamped {

  getId() {
    return _.get(this.rawData, 'id');
  }

  getFirstName() {
    return _.get(this.rawData, 'firstName');
  }

  getLastName() {
    return _.get(this.rawData, 'lastName');
  }

  getUserName() {
    return _.get(this.rawData, 'userName');
  }

  addId(value, newId) {
    _.assign(value, {
      id: newId;
    })
  }

  addFirstName(value, newFirst) {
    _.assign(value, {
      firstName: newFirst;
    })
  }

  addLastName(value, newLast) {
    _.assign(value, {
      lastName: newLast;
    })
  }

  addUserName(value, newUserName) {
    _.assign(value, {
      userName: newUserName;
    })
  }

  addUser(value, newId, newFirst, newLast, newUserName) {
    this.addId(value, newId);
    this.addFirstName(value, newFirst);
    this.addLastName(value, newLast);
    this.addUserName(value, newUserName);
  }
}
