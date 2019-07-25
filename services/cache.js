const mongoose = require('mongoose');

const exec = mongoose.Query.prototype.exec;

mongoose.Query.prototype.exec = function(){
  console.log('IM  ABOUT TO RUN A QUERY');

  const key = Object.assign({}, this.getQuery(), {
    collection: this.mongooseCollection.name
  })

  console.log(key); 

  return exec.apply(this, arguments);
}