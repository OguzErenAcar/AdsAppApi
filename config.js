'use strict';

// dotenv ve assert modüllerini import ediyoruz
const dotenv = require('dotenv');
const assert = require('assert');

// .env dosyasındaki çevre değişkenlerini yüklüyoruz
dotenv.config();

// process.env üzerinden çevre değişkenlerini alıyoruz
const { PORT, HOST, HOST_URL, SQL_USER, SQL_PASSWORD, SQL_DATABASE, SQL_SERVER } = process.env;

// SQL şifreleme ayarını kontrol ediyoruz
const sqlEncrypt = process.env.SQL_ENCRYPT === "true";

// PORT ve HOST değişkenlerinin varlığını kontrol ediyoruz
assert(PORT, 'PORT is required');
assert(HOST, 'HOST is required');

// Modülümüzün dışarıya açtığı yapıyı oluşturuyoruz
module.exports = {
    port: PORT,
    host: HOST,
    url: HOST_URL,
    sql: {
        server: SQL_SERVER,
        database: SQL_DATABASE,
        user: SQL_USER,
        password: SQL_PASSWORD,
        options: {
            encrypt: sqlEncrypt,
            enableArithAbort: true
        },
    },
};