import mongoose from 'mongoose';

const db = mongoose.connection;
db.on('error', () => {
  console.error('mongo db error in connection');
});
db.once('open', () => {
  console.error('mongo db connection established');
});

export default class Database {

  url: string = `mongodb://${process.env.MONGODB_USER}:${process.env.MONGODB_PASS}@${process.env.MONGODB_SERVER}`

  constructor() {
    // eslint-disable-next-line max-len

    if (process.env.MONGO_AUTH_DISABLE) {
      this.url = 'mongodb://localhost:27017/chat-app'
    }
    console.log('DATABASE URL:', this.url)
  }

  connect() {
    return mongoose.connect(this.url, {
      autoIndex: false,
      useNewUrlParser: true,
      useFindAndModify: false,
      useUnifiedTopology: true,
      serverSelectionTimeoutMS: 5000,
    }, (error) => {
      if (error) {
        console.log('MongoDB Connection error:', error);
        process.exit(1);
      }
    });
  }
}

