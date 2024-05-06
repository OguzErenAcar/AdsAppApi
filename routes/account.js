var express =require("express")
var router =express()
var accountController =require('../controller/accountController')

router.post('/signin',accountController.signin)
router.post('/login',accountController.login)
router.post('/deleteAccount',accountController.deleteAccount)
router.post('/getAccount',accountController.getAccount)


 module.exports=router
