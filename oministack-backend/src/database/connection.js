// import { knex } from "knex";

const knex = require("knex");

import configuration from "../../knexfile";
const connection = knex(configuration.development);
export default connection;
