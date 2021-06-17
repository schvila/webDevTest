import config from 'config';
import { dbConfig } from '@interfaces/db.interface';

const { host, port, database }: dbConfig = config.get('dbConfig');

export const dbConnection = {
  url: `mongodb+srv://standa:rnEZ3rjw3lf9J7Bh@cluster0.5tfx5.mongodb.net/tstest`,
  options: {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  },
};
