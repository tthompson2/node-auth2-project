const jwt = require("jsonwebtoken");

function restrict(role = "normal") {
    return async(req, res, next) => {
        const authError = {
            message: "Invalid credentials",
        }

        try {

            const token = req.cookies.token
            if(!token) {
                return res.status(401).json(authError);
            }

            
        }
    }
}