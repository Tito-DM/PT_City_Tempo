const jwt = require('jsonwebtoken')


module.exports = (req,res,next)=>{
    //get token from header
    const token = req.header("x-auth-token")

    //token verification
    try {
        const decode = jwt.verify(token,process.env.JWTSECRETKEY)
        req.user = decode.user;
        next();
    } catch (error) {
        res.status(401).json({ msg: "token is not valid" });
        
    }

}