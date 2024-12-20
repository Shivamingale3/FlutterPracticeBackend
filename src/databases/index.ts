import { MONGO_CONNECTION_URI } from '@config';

export const dbConnection = {
  url:
    MONGO_CONNECTION_URI.startsWith('mongodb://') || MONGO_CONNECTION_URI.startsWith('mongodb+srv://')
      ? MONGO_CONNECTION_URI
      : `mongodb://${MONGO_CONNECTION_URI}`,
  options: {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverSelectionTimeoutMS: 5000,
    socketTimeoutMS: 45000,
    maxPoolSize: 10,
  },
};
