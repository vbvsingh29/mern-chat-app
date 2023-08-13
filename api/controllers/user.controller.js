const Users = require("../models/user.model");
const jwt = require("jsonwebtoken");

exports.register = async (req, res) => {
  try {
    const { username, password } = req.body;
    const createdUser = await Users.create({ username, password });
    jwt.sign({userID:createdUser._id}, process.env.JWT_SECRET_KET,(err,token)=>{
        if(err) throw err;
        res.cookie('token',token).status(201).send({
            status:true,
            message: "Registration successful"
        });
    })
  } catch (err) {
    return res.status(500).send({
      status: false,
      message: err.message,
    });
  }
};
