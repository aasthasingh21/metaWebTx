const mysql = require('mysql');
const mongoose = require('mongoose');

const connection = () => {
  //database connection can be done in 2 ways local/cloud, here i am connecting locally
  mongoose.connect("mongodb://localhost/MetaUser" , { // a databasse is created with the name metawebtx.
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  //for error handling or to know if database is connected without any errors
  const db = mongoose.connection; 
  db.on('open', function() {
    console.log('database connected');
  });

};

module.exports = connection();