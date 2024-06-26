import mongoose from "mongoose"


export default async function connectdb(){
    try{
        mongoose.connect("mongodb+srv://root:root@testebug.ufokiw9.mongodb.net/?retryWrites=true&w=majority&appName=testebug")
        console.log("Banco conectado!")
    }catch(error){
        console.log("Erro ao conectar o banco!", error.message)
    }
}

