const UserModel = require("../model/UserModel")
const fetch = require("node-fetch")
const { Op } = require("sequelize")
//console.log(Op)
//fetch and add users data in to database
const getUserData = async(req,res)=>{
    try {
        const response=await fetch("https://randomuser.me/api/?results=50")
        const data=await response.json()
        const users = data.results
      
    for (const user of users) {
      await UserModel.create({
        gender: user.gender,
        title: user.name.title,
        first_name: user.name.first,
        last_name: user.name.last,
        street_number: user.location.street.number,
        street_name: user.location.street.name,
        city: user.location.city,
        state: user.location.state, 
        country: user.location.country,
        postcode: user.location.postcode,
        latitude: user.location.coordinates.latitude,
        longitude: user.location.coordinates.longitude,
        timezone_offset: user.location.timezone.offset,
        timezone_description: user.location.timezone.description,
        email: user.email,
        username: user.login.username,
        password: user.login.password,
        salt: user.login.salt,
        md5: user.login.md5,
        sha1: user.login.sha1,
        sha256: user.login.sha256,
        dob_date: new Date(user.dob.date),
        dob_age: user.dob.age,
        registered_date: new Date(user.registered.date),
        registered_age: user.registered.age,
        phone: user.phone,
        cell: user.cell,
        nino_name: user.id.name,
        nino_value: user.id.value,
        picture_large: user.picture.large,
        picture_medium: user.picture.medium,
        picture_thumbnail: user.picture.thumbnail,
        nat: user.nat
      });
    }
    res.status(200).json({ message: 'Users fetched and stored successfully.' });
    } catch (error) {
      console.error(error.message);
      res.status(500).json({ error: 'An error occurred while fetching and storing users.' });
    }
}


// Retrieve all usersData from the database with filteration and pagination
const getAllUsers  = async (req, res) => {
  try {
    const { title, gender } = req.query;
    
    let page = req.query.page || 1

    // Prepare the data based on the query parameters
    const obj = {};
    if (gender) {
      obj.gender = gender;
    }
    if(title){
      obj.title=title
    }

    const response = await UserModel.findAndCountAll({ where: obj,limit:10,offset:(page-1)*10 });

    let payload={
      currentPage:page,
      pages:Math.ceil(response.count/10),
      results:response.rows
  }
    res.status(200).json(payload);
} catch (error) {
    console.log(error.message)
    res.send({ error: "Internal Server Error" })
}
};


// Delete all users from the database
const deleteAllUsers = async (req, res) => {
  try {
    await UserModel.destroy({ where: {} });
    res.status(200).json({ message: 'All users deleted successfully.' });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: 'An error occurred while deleting users.' });
  }
};


const getFilteredData = async (req,res)=>{
        try {
          const response = await UserModel.findAll({where:{first_name:{[Op.like]:"R%"}}})
          res.status(200).json(response);
        } catch (error) {
          console.error(error.message);
        res.status(500).json({ error: 'An error occurred while fetching users.' });
        }
}

module.exports={ getUserData, getAllUsers, deleteAllUsers, getFilteredData }
