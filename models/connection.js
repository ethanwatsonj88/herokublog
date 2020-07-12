var pgp = require('pg-promise')(/* options */)
const cn = {
    host: 'ec2-34-225-162-157.compute-1.amazonaws.com',
    port: 5432,
    database: 'd9as4j31v8lhig',
    user: 'djodxvfvrmjrsi',
    password: '5e1822c359c9321894579370db30f1a62189a02ef7f1a392d5c8ffbd0250c8a2',
    ssl: { rejectUnauthorized: false },
    max: 30 // use up to 30 connections
};
const db = pgp(cn);

module.exports = db;