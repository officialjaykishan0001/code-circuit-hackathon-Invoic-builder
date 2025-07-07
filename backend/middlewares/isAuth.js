const jwt = require('jsonwebtoken');


module.exports.isAuthenticated = async(req, res, next) =>{
    try{
        const token = req.cookies.token || req.headers.authorization.split(' ')[1];

        if(!token){
            return res.status(401).json({
                success: false,
                message: "User not authenticated"
            })
        }

        const decode = await jwt.verify(token, process.env.SECRET_KEY);
        
        if(!decode){
            return res.status(401).json({
                success: false,
                message: "Invalid token "
            })
        }

        req.id = decode.userId;
        next();
    }catch(err){
        console.log(err);

        return res.status(500).json({
            success: false,
            message: "Internal server error"
        })
    }
}