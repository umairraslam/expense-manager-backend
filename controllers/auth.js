const User = require('../models/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const moment = require('moment');
const SALT_ROUNDS = 10;


const generateJwtToken = (user) => {
    let expires = moment().utc().add({ days: 1 }).unix();
    let token = jwt.sign({
        exp: expires,    //expires in 24 hrs
        user: user
    }, process.env.JWT_SECRET);
    return {
        token: token,
        expires: moment.unix(expires).format()
    }
}

let token;

module.exports = {
    async signUp(req, res) {
        try {
            var user = new User();
            user.firstName = req.payload.firstName;
            user.lastName = req.payload.lastName;
            user.role = req.payload.role;
            user.email = req.payload.email;
            user.dob = req.payload.dob;
            
            let hash = await bcrypt.hash(req.payload.password, SALT_ROUNDS);
            console.log(req.payload.password)
            console.log(hash)
            user.password = hash;
            console.log("------------------")
            let response = await user.save();
            return response;
        } catch (err) {
            console.log(err);
            throw new Error(err);
        }
    },
    async authenticate(req, res) {
        try {
            let user = await User.find({ email: req.payload.email });
            if(user && user.length == 0){
                return res.response({message: "Invalid credentials"}).code(500);
            }
            console.log(user);
            let havePasswordsMatched = await bcrypt.compare(req.payload.password, user[0].password);
            if(havePasswordsMatched){
                token = generateJwtToken(user);
                return res.response({message: "Authenticated", token: token}).code(200);
            } else{
                return res.response({message: "Invalid credentials"}).code(500);
            }
        } catch (err) {
            console.log(err);
            throw new Error(err);
        }
    }
}