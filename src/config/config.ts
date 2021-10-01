import { config } from 'dotenv';
config();
let POSTGRESS_USERNAME: string;
let POSTGRESS_PASSWORD: string;
let POSTGRESS_DATABASE: string;
let POSTGRESS_HOST: string;
let dialect: string;
let AWS_REGION: string;
let AWS_PROFILE: string;
let AWS_MEDIA_BUCKET: string;
let JWT_SECRET : string;
let URL : string;
switch (process.env.environment) {
  case ('dev'):
    POSTGRESS_USERNAME = process.env.POSTGRES_USERNAME;
    POSTGRESS_PASSWORD = process.env.POSTGRESS_PASSWORD;
    POSTGRESS_DATABASE = process.env.POSTGRES_DATABASE;
    POSTGRESS_HOST = process.env.POSTGRES_HOST;
    dialect = process.env.dialect;
    AWS_REGION = process.env.AWS_REGION;
    AWS_PROFILE = process.env.AWS_PROFILE;
    AWS_MEDIA_BUCKET = process.env.AWS_BUCKET;
    JWT_SECRET = process.env.JWT_SECRET;
    URL = process.env.URL;
  default:
    POSTGRESS_USERNAME = process.env.POSTGRES_USERNAME;
    POSTGRESS_PASSWORD = process.env.POSTGRESS_PASSWORD;
    POSTGRESS_DATABASE = process.env.POSTGRES_DATABASE;
    POSTGRESS_HOST = process.env.POSTGRES_HOST;
    dialect = process.env.dialect;
    AWS_REGION = process.env.AWS_REGION;
    AWS_PROFILE = process.env.AWS_PROFILE;
    AWS_MEDIA_BUCKET = process.env.AWS_BUCKET;
    JWT_SECRET = process.env.JWT_SECRET;
    URL = process.env.URL;
}
// console.log(username);
//console.log(POSTGRESS_PASSWORD);
// console.log(database);
// console.log(host);
//console.log(AWS_MEDIA_BUCKET);
export {
  POSTGRESS_USERNAME,
  POSTGRESS_PASSWORD,
  POSTGRESS_DATABASE,
  POSTGRESS_HOST,
  dialect,
  AWS_REGION,
  AWS_PROFILE,
  AWS_MEDIA_BUCKET,
  JWT_SECRET,
  URL,
}
// export  config = {
//   "dev": {
//   "prod": {
//     "username": "",
//     "password": "",
//     "database": "udagram_prod",
//     "host": "",
//     "dialect": "postgres"
//   }
// }


// export  config = {
//   "dev": {
//     "username": "udagramchiemeziedev",
//     //"username": process.env.username,
//     "password": "CodeBoy?007",
//     //"password": process.env.password,
//     "database": "udagramchiemeziedev",
//     //"database": process.env.database,
//     "host": "udagramchiemeziedev.cpimz4aplaxl.us-east-1.rds.amazonaws.com",
//     //"host": process.env.host,
//     "dialect": "postgres",
//     "aws_region": "us-east-1",
//     "aws_profile": "dev",
//     "aws_media_bucket": "udagram-chiemezie-dev"
//   },
//   "prod": {
//     "username": "",
//     "password": "",
//     "database": "udagram_prod",
//     "host": "",
//     "dialect": "postgres"
//   }
// }