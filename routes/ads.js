var express =require("express")
var router =express()
var adsController =require('../controller/adsController')

 router.post('/add',adsController.adsAdd)
 router.post('/delete',adsController.deleteAds)
 router.post('/getall',adsController.getAllAds)
 router.post('/get',adsController.getAds)


 module.exports=router
