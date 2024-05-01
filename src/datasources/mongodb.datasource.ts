import {inject, lifeCycleObserver, LifeCycleObserver} from '@loopback/core';
import {juggler} from '@loopback/repository';

const config = {
  name: 'mongodb',
  connector: 'mongodb',
  url: '',
  host:
    process.env.NODE_ENV === 'development' ? 'localhost' : process.env.DB_HOST,
  user: process.env.NODE_ENV === 'development' ? 'admin' : process.env.DB_USER,
  password:
    process.env.NODE_ENV === 'development' ? '' : process.env.DB_PASSWORD,
  database:
    process.env.NODE_ENV === 'development'
      ? 'lb4-test-crud'
      : process.env.DB_NAME,
  useNewUrlParser: true,
  protocol: process.env.NODE_ENV === 'development' ? '' : 'mongodb+srv',
};

// Observe application's life cycle to disconnect the datasource when
// application is stopped. This allows the application to be shut down
// gracefully. The `stop()` method is inherited from `juggler.DataSource`.
// Learn more at https://loopback.io/doc/en/lb4/Life-cycle.html
@lifeCycleObserver('datasource')
export class MongodbDataSource
  extends juggler.DataSource
  implements LifeCycleObserver
{
  static dataSourceName = 'mongodb';
  static readonly defaultConfig = config;

  constructor(
    @inject('datasources.config.mongodb', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
