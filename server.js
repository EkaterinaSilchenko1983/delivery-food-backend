// 8ApU8YrKLs4pptdr

const mongoose = require('mongoose');

const app = require('./app');

const { DB_HOST } = require('./config');

mongoose.set('strictQuery', true);

mongoose
  .connect(DB_HOST)
  .then(() => {
    app.listen(3001);
  })
  .catch(error => {
    console.log(error.message);
    process.exit(1);
  });
