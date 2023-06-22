const { isUtf8 } = require('buffer')
const fs = require('fs')

const JsonFilePath = __dirname+"/queries.json"


const ReadJSon= function ReadJSon(){
    var response=fs.readFileSync(JsonFilePath, 'utf8', (err, data) => {
        if (err) {
            console.log("JSON okunurken bir hata olustu. "+err.message)
            return
        } 
        return data 
         })

        return JSON.parse(response)
 }

 const ReadJSon_= function ReadJSon(path){
    var response=fs.readFileSync(path, 'utf8', (err, data) => {
        if (err) {
            console.log("JSON okunurken bir hata olustu. "+err.message)
            return
        } 
        return data 
         })

        return JSON.parse(response)
 }


 module.exports={
    ReadJSon_,
    ReadJSon
 }



