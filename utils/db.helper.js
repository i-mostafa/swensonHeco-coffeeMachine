/**
 *  in order to limit size of response & not to load all the data at the same time
 *  in a large application a pagination should be addd to skip this limit
 */
const maxDocsLimit = Number(process.env.MAX_DOCS_LIMIT) || 20;

module.exports = class DbHelper {
  constructor(dbModel, queryObj = {}) {
    this.model = dbModel;
    this.queryObj = queryObj;
    this.query = this.model.find();
  }

  /**
   * function to filter the query with query obj
   */
  filter() {
    // apply query
    this.query = this.query.find(this.queryObj).limit(maxDocsLimit);
    return this;
  }
};
