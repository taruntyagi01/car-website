const nodemailer = require("nodemailer");
require("dotenv").config();

const mailSender = async (email) => {
    try {
        const transporter = nodemailer.createTransport({
            host: "smtp.gmail.com",
            auth: {
                user: process.env.USER_MAIL,
                pass: process.env.USER_PASS
            }
        });

        const info = await transporter.sendMail({
            from: process.env.USER_MAIL,
            to: email,
            subject: "Thanks for signing up",
            text: "Hello! Thanks for signing up with us."
        });

        return info;
    } catch (error) {
        console.error("Email error:", error);
        throw error;
    }
};

module.exports = mailSender;
