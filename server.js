// 8ApU8YrKLs4pptdr

const mongoose = require('mongoose');

const app = require('./app');

const DB_HOST =
  'mongodb+srv://Kateryna:8ApU8YrKLs4pptdr@cluster0.j2xro2a.mongodb.net/food-delivery-db?retryWrites=true&w=majority';

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
