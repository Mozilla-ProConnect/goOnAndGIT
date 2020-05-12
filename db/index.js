var mongoose = require('mongoose');

var mongoDB = 'mongodb+srv://moizh:4myprogramming@mozilla-product-qzmi9.mongodb.net/test?retryWrites=true&w=majority';
mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true });

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => console.log('MongoDB is connected '));