import { Console } from 'console';
import {Sequelize} from 'sequelize-typescript';
import { POSTGRESS_USERNAME, POSTGRESS_PASSWORD, POSTGRESS_DATABASE, POSTGRESS_HOST, dialect } from './config/config';

// Instantiate new Sequelize instance!
//console.log(dialect, POSTGRESS_USERNAME,POSTGRESS_PASSWORD)
export const sequelize = new Sequelize({
  "username":POSTGRESS_USERNAME,
  "password":POSTGRESS_PASSWORD,
  "database":POSTGRESS_DATABASE,
  "host":    POSTGRESS_HOST,

  dialect: "postgres",
  storage: ':memory:',
});

