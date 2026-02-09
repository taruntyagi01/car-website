const mongoose = require("mongoose");

exports.dbConnect = () => {
    mongoose.connect(process.env.DATABASE_URL)
    .then( () => {console.log("DB connected successfully")})
    .catch((e)=> {
        console.log(e);
        console.log("DB issue");
        exit(1);
    })
}

// module.exports = dbConnect;
