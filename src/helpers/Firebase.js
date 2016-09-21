import firebase from 'firebase';
import config from '../../config/default.json';
import fireproof from 'fireproof';
import _ from 'lodash';
export default class Firebase {

  constructor (ref, rawData) {
    this._ref = null;
    this._path = null;
    this.bound = false;
    if (ref.match(/https:\/\/battlehex\.firebaseio\.com*/)) {
      this._ref = new firebase(ref);
      this.bound = true;
      this.doBind();
    } else {
        this._path = ref;
    }
    this.rawData = rawData;
  }

  bind() {
    if (!this.bound) {
      this.bound = true;
      this._ref = new firebase(Firebase.path(ref));
      this.doBind();
    }
    return this;
  }

  doBind() {
    this.on('value', (snapshot) => {
      this.rawData = snapshot.val();
    })
  }

  proof() {
    return new fireproof(this);
  }

  async auth(authToken, onComplete, onCancel) {
    return await this._ref.auth(authToken, onComplete, onCancel);
  }

  async authWithCustomToken(authToken, onComplete, options) {
    return await this._ref.authWithCustomToken(authToken, onComplete, options);
  }

  async authWithPassword(credentials, onComplete, options) {
    return await this._ref.authWithPassword(credentials, onComplete, options);
  }

  child(path) {
    return this._ref.child(path);
  }

  equalTo(value) {
    return this._ref.equalTo(value);
  }

  getAuth() {
    return this._ref.getAuth();
  }

  onAuth(onComplete, context) {
    return this._ref.onAuth(onComplete, context);
  }

  offAuth(onComplete, context) {
    return this._ref.offAuth(onComplete, context);
  }

  orderByChild(value) {
    return this._ref.orderByChild(value);
  }

  unauth() {
    return this._ref.unauth();
  }

  toString() {
    return this._ref.toString();
  }

  async set(value, onComplete) {
    return await this._ref.set(value, onComplete);
  }

  async update(value, onComplete) {
    return await this._ref.update(value, onComplete);
  }

  async remove(onComplete) {
    return await this._ref.remove(onComplete);
  }

  async push(value, onComplete) {
    return await this._ref.push(value, onComplete);
  }

  async transaction(updateFunction, onComplete, applyLocally) {
    return await this._ref.transaction(updateFunction, onComplete, applyLocally);
  }

  async createUser(credentials, onComplete) {
    return await this._ref.createUser(credentials, onComplete);
  }

  async changeEmail(credentials, onComplete) {
    return await this._ref.changeEmail(credentials, onComplete);
  }

  async changePassword(credentials, onComplete) {
    return await this._ref.changePassword(credentials, onComplete);
  }

  async removeUser(credentials, onComplete) {
    return await this._ref.removeUser(credentials, onComplete);
  }

  goOnline() {
    return this._ref.goOnline();
  }

  goOffline() {
    return this._ref.goOffline();
  }

  on(eventType, callback, cancelCallback, context) {
    return this._ref.on(eventType, callback, cancelCallback, context);
  }

  off(eventType, callback, context) {
    return this._ref.off(eventType, callback, context);
  }

  once(eventType, successCallback, failureCallback, context) {
    return this._ref.once(eventType, successCallback, failureCallback, context);
  }

  key() {
    return this._ref.key();
  }

  static path(value) {
    /*Value can be either a string or an array of Strings.
    1. If string, method needs to check if firebaseURL has already been added to value
    If not, then add it
    2. If an array, needs to join all array parts (each part is part of the path)
    into one string;
    separators should be foreward slashes
    3. After joining, needs to check for firebaseURL
    4. Will need to escape ., $, #, [], /*/
    const firebaseURL = config.get('firebaseURL');


    //let newUrl = _.isArray(value) ? value.join('/') : value;
    let newURL = null;

    let parts = value;
    if (_.isString(parts)) {
      parts = parts
        .replace(firebaseURL, '')
        .replace(/^\//, '')
        .replace(/\/$/, '')
        .split('/');
    }

    parts = _.map(parts, (part) => {Firebase.escapePathPart(part)});

    newURL = value.join('/');
    if (newURL.indexOf(firebaseURL == -1)) {
      newURL = firebaseURL + newURL;
    }
    return newURL;
  }

  static escapePathPart(part) {
    return part
      .replace(new RegExp('\\.', 'g'), '(P)')
      .replace(new RegExp('\\$', 'g'), '(D)')
      .replace(new RegExp('\\#', 'g'), '(H)')
      .replace(new RegExp('\\[', 'g'), '(LB)')
      .replace(new RegExp('\\]', 'g'), '(RB)')
      .replace(new RegExp('\\/', 'g'), '(FL)');
  }

  static unescapePathPart(part) {
    /*TODO: Reverse effects of escapePathPart*/
      return part
        .replace(new RegExp('\\(P\\)', 'g'), '.')
        .replace(new RegExp('\\(D\\)', 'g'), '$')
        .replace(new RegExp('\\(H\\)', 'g'), '#')
        .replace(new RegExp('\\(LB\\)', 'g'), '[')
        .replace(new RegExp('\\(RB\\)', 'g'), ']')
        .replace(new RegExp('\\(FL\\)', 'g'), '/');
  }

  static timeStamp() {
    return firebase.ServerValue.TIMESTAMP;
  }

  /*
  let decks = ["deck1", "deck2", "deck3", "deck4"]
  static copy (E) {
    return [E, E]
  }
  _.flatmap(decks, copy);
  let newDeck = "deck5";
  _.sortedIndex(decks, newDeck);

  //I think we could get use this to modify objects en masse.
  static doesTagEqual(object, value) {
    object.Tag == value;
  }
  _.pullAllWith(Unit, "Armored", doesTagEqual(_.map(Unit), ))
  */


}
