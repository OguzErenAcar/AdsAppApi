//Schemas 
const connection =require('./dbconnect')
const { Sequelize, DataTypes, Model } = require('sequelize');

const Users = connection.connection().define('Users',{
    UserID: { type: DataTypes.INTEGER, allowNull: true , primaryKey: true,autoIncrement:true },
    UserName: { type: DataTypes.STRING, allowNull: true },
    Email: { type: DataTypes.STRING, allowNull: true },
    Password: { type: DataTypes.STRING, allowNull: true }
  },{
    timestamps: false
  })
  const Ads = connection.connection().define('Ads',{
    AdsID: { type: DataTypes.INTEGER, allowNull: true, primaryKey: true ,autoIncrement:true },
    UserID_: { type: DataTypes.INTEGER, allowNull: true },
    AdsName: { type: DataTypes.STRING, allowNull: true },
    AdsPrice: { type: DataTypes.INTEGER, allowNull: true },
    AdsDescription: { type: DataTypes.STRING, allowNull: true },
    AdsPhotoPaths: { type: DataTypes.STRING, allowNull: true },
    isSelled: { type: DataTypes.BOOLEAN, allowNull: true },
    ProfilID_: { type: DataTypes.INTEGER, allowNull: true }
  },{
    timestamps: false
  })
  const Photos = connection.connection().define('Photos',{
    PhotoID: { type: DataTypes.INTEGER, allowNull: false, primaryKey: true ,autoIncrement:true},
    Url: { type: DataTypes.STRING, allowNull: true },
    AdsID_: { type: DataTypes.INTEGER, allowNull: true }
  },{
    timestamps: false
  })
  const Profil = connection.connection().define("Profil",{
    ProfilID: { type: DataTypes.INTEGER, allowNull: false, primaryKey: true ,autoIncrement:true},
    Name: { type: DataTypes.STRING, allowNull: true },
    Age: { type: DataTypes.INTEGER, allowNull: true },
    Gender: { type: DataTypes.STRING, allowNull: true },
    PPurl: { type: DataTypes.STRING, allowNull: true },
    Number: { type: DataTypes.STRING, allowNull: true },
    UserID_: { type: DataTypes.INTEGER, allowNull: true }
  },{
    timestamps: false  
  })
  const UserAdsFavorite = connection.connection().define('UserAdsFavorite',{
    FavoriteID: { type: DataTypes.INTEGER, allowNull: false, primaryKey: true ,autoIncrement:true},
    UserID_: { type: DataTypes.INTEGER, allowNull: true },
    AdsID_: { type: DataTypes.INTEGER, allowNull: true },
    isFavorite: { type: DataTypes.BOOLEAN, allowNull: true }

  },{
    timestamps: false
  })

  module.exports={
    Users,
    Ads,
    Profil,
    UserAdsFavorite,
    Photos
  }