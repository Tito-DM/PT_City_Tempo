const moongose = require('mongoose')


const dbConnection = async ()=>{

    try {
        await moongose.connect(process.env.MONGO_URL,{
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })

        console.log('')
    } catch (error) {
        
    }
}