const { post } = require("../routes")

module.exports = {

    get(req,res) {
        res.send('Hello')
    },

    post(req,res) {
       const {name,email,password} = req.body
     
       console.log(name,email,password)
       res.send('ok')
    }
}