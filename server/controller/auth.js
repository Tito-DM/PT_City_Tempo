const {validationResult} = require("express-validator")
const User = require("../model/user")
const bycrypt = require("bcrypt-nodejs")
const jwt = require("jsonwebtoken")

const login = async (res,req)=>{
     //destructaring params
     const {username, password} = req.body

     try {
         let user = User.findOne({username})
         if(!user) {return res.status(400).json({errors:[{msg: "credencias invalido"}]})}

         //compare password
         const passwordMatch = await bycrypt.compare(password,user.password)

         if(!passwordMatch){ return res.status(400).json({ erros: [{ msg: "credencias errados" }] })}
        
         // set token payload
         const payload ={
             user:{
                 id: user.id
             }
         }
         //generate jwt
         jwt.sign(
             payload,
             process.env.JWTSECRETKEY,{
                expiresIn: 360000,  
             },(err,token)=>{
                 if(err) throw err;
                 res.status(200).json({token,user})
             }
         )
     } catch (error) {
        res.status(500).send("server Error"); 
     }
}

const siginUp = async (req,res)=>{
    const errors = validationResult(req)
    if(!erros.isEmpty()) {return res.status(400).json({erros: errors.array()})}

       //destructaring params
       const {username, password} = req.body

       try {
           //check if user already exits
           let user = User.findOne({username})
           if(!user) {return res.status(400).json({ erros: [{ msg: "este username ja existe" }] })}
            //encrypt Password
            const salt = await bycrypt.genSalt(10)
            const PasswordEncrypted = bycrypt.hash(password,salt)
           //create a new User
           user = new User({
               username,
               PasswordEncrypted
           })

           const payload = {
            user: {
              id: user.id,
            },
          };
      
          //generate jwt
          jwt.sign(
            payload,
            process.env.JWTSECRETKEY,
            {
              expiresIn: 360000,
            },
            (err, token) => {
              if (err) throw err;
              res.status(200).json({ token, user });
            }
          );
           
       } catch (error) {
        res.status(500).send("server Error");
       }
}

module.exports = {
    login, siginUp
}