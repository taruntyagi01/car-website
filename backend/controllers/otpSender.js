const mailSender = require("../utils/mailSender");

const mailSenderController = async (req, res) => {
    try {
        const { email } = req.body;

        const result = await mailSender(email);

        if (!result) {
            return res.status(400).json({
                success: false,
                message: "Mail not sent",
            });
        }

        return res.status(200).json({
            success: true,
            message: "Mail sent successfully",
            data: result,
        });

    } catch (e) {
        console.error(e);
        return res.status(500).json({
            success: false,
            message: e.message
        });
    }
};

module.exports = mailSenderController;
