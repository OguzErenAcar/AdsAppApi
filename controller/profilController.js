const Shemas =require('../db/Schemas')

const create =async(request,response,next)=>{
try {
    
    const profil= await Shemas.Profil.create({ 
        "Name": request.body.Name,
        "Age": request.body.Age,
        "Gender": request.body.Gender,
        "PPurl": request.body.PPurl,
        "Number": request.body.Number,
        "UserID_": request.body.UserID_
      }
      )
       await profil.save()
       return  response.send({message:"profil created"})
    
} catch (error) {
   response.send(error) 
}
}
const getprofil =async(request,response,next)=>{
try {
    const profilid = request.body.ProfilID
    const profil=await Shemas.Profil.findAll({where:{ProfilID:profilid}})
    return response.send(profil)

} catch (error) {
    response.send(error)
}
}

module.exports={
    create,
    getprofil
}