var express =require("express")
var router =express()
var profilController =require('../controller/profilController')

 router.post('/create',profilController.create)
 router.post('/getprofil',profilController.getprofil)

 module.exports=router
