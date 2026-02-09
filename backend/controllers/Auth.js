const User = require("../model/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

exports.signup = async(req, res) => {
    try{
        //get data from req, ki body
        const {name, email, password, confirmPassword} = req.body;
        //validation -> all data required
        if(!name || !email || !password || !confirmPassword) {
            return res.status(400).json({
                success: false,
                message: "All fields are required, please fill all the details"
            })
        }

        //check password and confirmPassword matches
        if(password !== confirmPassword) {
            return res.status(404).json({
                success: false,
                message: "please fill the correct confirm password",
            })
        }

        //check user already exist or not
        const userDetails = await User.find({email: email});

        console.log(userDetails);
        if(userDetails.length > 0) {
            return res.status(400).json({
                success: false,
                message: "User already registered with this email",
            })
        }

        //just hashed password before creating entry in db
        const hashedPassword = await bcrypt.hash(password, 10);

        //create their account
        const user = await User.create({
            name: name,
            email: email,
            password: hashedPassword,
        })

        //return response
        return res.status(200).json({
            success: true,
            message: "User registered successfully",
            user,
        })
    }
    catch(e){
        console.log(e);
        return res.status(500).json({
            success: false,
            message: "User can not signup, please try again"
        })
    }
}

//login ka flow
exports.login = async (req, res) => {
    try{
        //extract the data from req, ki body
        const {email, password} = req.body;

        //validation
        if(!email || !password) {
            return res.status(400).json({
                success: false,
                message: "Please fill the all the details",
            })
        }

        console.log(email);
        console.log(password);

        //check user exist or not with given email
        const user = await User.findOne({email});
        if(!user) {
            return res.status(404).json({
                success: false,
                message: "Please signup."
            })
        }

        console.log(user);

        //verify the password match or not
        const payload = {
            email: email,
            id: user._id
        }

        console.log(payload)

       const options = {
  expires: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
  httpOnly: true,
  secure: true,
  sameSite: "none",
}

        

        console.log(options)

        if(await bcrypt.compare(password, user.password)) {
            //if password matched
            console.log("insider")

            //create a token
            const token = jwt.sign(payload, process.env.SECRET_KEY, {expiresIn: "2h"} );
            console.log(token);

            res.cookie("Rahmat", token, options).status(200).json({
                success: true,
                user,
                token,
                message: "User logedin successfully"
            })

        }
        else {
            return res.status(400).json({
                success: false,
                message: "Password Incorrect",
            })
        }
    } 
    catch(e) {
        return res.status(404).json({
            success: false,
            message: "Something went wrong."
        })
    }
}