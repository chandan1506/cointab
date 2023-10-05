const DataTypes = require("sequelize")
//importing connection
const sequelize = require("../config/db")

// define UserModel
const UserModel = sequelize.define('random_users', {
    gender: DataTypes.STRING,
    title: DataTypes.STRING,
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    street_number: DataTypes.STRING,
    street_name: DataTypes.STRING,
    city: DataTypes.STRING,
    state: DataTypes.STRING,
    country: DataTypes.STRING,
    postcode: DataTypes.STRING,
    latitude: DataTypes.STRING,
    longitude: DataTypes.STRING,
    timezone_offset: DataTypes.STRING,
    timezone_description: DataTypes.STRING,
    email: DataTypes.STRING,
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    salt: DataTypes.STRING,
    md5: DataTypes.STRING,
    sha1: DataTypes.STRING,
    sha256: DataTypes.STRING,
    dob_date: DataTypes.DATE,
    dob_age: DataTypes.INTEGER,
    registered_date: DataTypes.DATE,
    registered_age: DataTypes.INTEGER,
    phone: DataTypes.STRING,
    cell: DataTypes.STRING,
    nino_name: DataTypes.STRING,
    nino_value: DataTypes.STRING,
    picture_large: DataTypes.STRING,
    picture_medium: DataTypes.STRING,
    picture_thumbnail: DataTypes.STRING,
    nat: DataTypes.STRING
  });
  

// to sync users table with cointab db (optional)
 sequelize.sync()


//exporting UserModel
module.exports = UserModel;