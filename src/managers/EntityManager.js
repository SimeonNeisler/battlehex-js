export default class EntityManager {

  constructor (entityClass) {
    this.entityClass = entityClass;
  }

  generateEntity (pathData, rawData) {
    //const path = this.generatePath(pathData);
    return new this.entityClass(pathData, rawData);
  }

  generatePath (pathData) {
    path = pathData;
    return path;
    //throw new Error("EntityManager.generatePath required to be implemented.");
  }

  async get (pathData) {
    const entity = this.generateEntity(pathData, null);
    await entity.bind().proof();
    return entity;
  }

  async remove(pathData) {
    const entity = this.generateEntity(pathData, null);
    await entity
        .bind()
        .proof()
        .remove();
  }

  async set(pathData, rawData) {
    const entity = this.generateEntity(pathData, rawData);
    await entity
        .bind()
        .proof()
        .set(rawData);
    return entity;

  }

  async update(pathData, updates) {
    const entity = this.generateEntity(pathData, null);
    await entity
        .bind()
        .proof()
        .update(updates);
    return entity;
  }
}
