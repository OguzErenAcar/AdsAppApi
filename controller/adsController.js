
const Shemas = require('../db/Schemas') 

const adsAdd=async (request,response,next)=>{
try {
const ads =await Shemas.Ads.create({
            UserID_:request.body.UserID_,
            AdsName:request.body.AdsName,
            AdsPrice:request.body.AdsPrice,
            AdsDescription:request.body.AdsDescription,
            AdsPhotoPaths:request.body.AdsPhotoPaths,
            isSelled:request.body.isSelled,
            ProfilID_:request.body.ProfilID_
})
    ads.save()
    response.send({message:"Ads add Success"})
} 
catch (error) {
    response.send({message:error})
}
}

const deleteAds=async(request,response,next)=>{

    try {
        const AdsID=request.body.AdsID
        const delete_=await Shemas.Ads.destroy({where:{'AdsID':AdsID}})
        response.send({message:"Ads delete Success"})
} 
catch (error) {
    response.send({message:error})
}
    
}

const getAllAds=async(request,response,next)=>{

try { 
        const res=await Shemas.Ads.findAll()
        response.send({message:"OK"})
} 
catch (error) {
    response.send({message:error})
}
   

}
const getAds=async (request,response,next)=>{
    try { 
        const res=await Shemas.Ads.findAll({where:{'AdsID':AdsID}})
        response.send({message:"OK"})
} 
catch (error) {
    response.send({message:error})
}
}




module.exports={adsAdd,
                deleteAds,
                getAds,
                getAllAds}