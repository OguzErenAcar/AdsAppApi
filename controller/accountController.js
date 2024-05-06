
const config = require('../config')
const sql = require('mssql')
const Ssql = require('../db/dbconnect')
const Schemas = require('../db/Schemas')
const ReaderJSon = require('../util/ReadJsonFile')
 const sqlQueries = ReaderJSon.ReadJSon()
 

const signin = async (request, response, next) => {
    try { 
        const UserName=request.body.UserName
        const Email=request.body.Email
        const Password=request.body.Password

        const user = await Schemas.Users.create({ "UserName":UserName,"Email":Email,"Password":Password})
        await user.save()
        response.send( {'message':"Saved"});    
 
    } catch (error) {
        if(error.message=="Validation error"){
            response.status(500).send({'error':"Farklı Kullanıcı adı veya Email deneyin "});

        }else
            response.status(500).send({'error':error.message});
    }
};

const login = async (request, response) => {
    try {
        const Email=request.body.Email
        const Password=request.body.Password
        try {
            const Auth=(await Schemas.Users.findAll({attributes:['Email',"Password"],where:{'Email':Email,'Password':Password}}))
            .toString()  
            await console.log(Auth)
            if(Auth!=""){
                response.send({'state':true,'message':"Login Success"})
            }else
            response.send({'state':false,'message':"Login failed"})
        } catch (error) {
            response.status(500).send({'state':false,'message':'Email invalid'});  
        }  
    } catch (error) {
        response.status(500).send({'error':error.message});
    }
      
}
const deleteAccount = async (request, response) => {
    try {
        const Email=request.body.Email
        const Password=request.body.Password
        try {
            const user=await (await Schemas.Users.destroy({where:{'Email':Email,'Password':Password}})).toString()
            if(user!=0){
                response.send({'state':true,'message':"delete Success"})
            }else
            response.send({'state':false,'message':"delete failed"})
        } catch (error) {
            response.status(500).send({'state':false,'message':'Email invalid'});  
        }  
    } catch (error) {
        response.status(500).send({'error':error.message});
    }

}
const getAccount = async (request, response) => {
    try {
        const Email=request.body.Email
        const Password=request.body.Password
        try {
            const user=(await Schemas.Users.findAll({where:{'Email':Email,'Password':Password}}))
            //await console.log(user[0].Users)   
            if(user!=""){
                response.send({'state':true,'response':user[0]})
            }else
            response.send({'state':false,'message':"failed"})   
        } catch (error) {
            response.status(500).send({'state':false,'message':error.message});  
        }  
    } catch (error) {
        response.status(500).send({'error':error.message});
    }}


module.exports = {
    signin,
    login,
    deleteAccount,
    getAccount
}