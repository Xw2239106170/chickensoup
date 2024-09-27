'use strict';
const db = uniCloud.database()
exports.main = async (event, context) => {
  return db.collection("soup-list").get()
};