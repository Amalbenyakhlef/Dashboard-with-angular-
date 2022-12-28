//export const MONGO_DB_CONNECTION_STRING: string = 'mongodb://localhost:27017/db_facturtaion';

/* //how to connect the project with mongobd?
mongoose.connect('mongodb://localhost:27017/db_facturation', {useNewUrlParser: true});


import User from './user'; //Wherever your schema is
import mongoose from 'mongoose';

const Allusers = await User.find(); */

import mongoose from 'mongoose';
const mongo = require('mongoose');

mongo.connect('mongodb://localhost/db_facturation', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongo.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  console.log('Connected to MongoDB');
});
