
//veritabanina istek fonksiyonu çağırıldığında bağlanır 

const config = require('../config')
const { Sequelize, DataTypes, Model } = require('sequelize');

// Sequelize instance'ı oluşturun

const connection =()=>{
  return new Sequelize(
    config.sql.database,
    config.sql.user,
    config.sql.password,
    {
      host: config.host,
      dialect: 'mssql',
    });}
  
// // Senkronizasyonu gerçekleştirin
const authentication = () => {
  connection().authenticate()
    .then(() => { console.log('MSSQL veritabanina başariyla bağlandi.'); })
    .catch((error) => { console.error('MSSQL veritabani bağlantisi sirasinda bir hata oluştu:', error); });
}
const close = () => { 
  sequelize().close().then(() => { console.log("Veritabani kapatildi.") }) }
   
module.exports = {
  connection,
  authentication,
  close 
}
//moduller cağırılan sınıfta değişkenleri tamammen yüklüyor ama fonksiyonları yüklemiyor 
