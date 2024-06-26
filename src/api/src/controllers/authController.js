import userSchema from "../models/user.js"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"

const secret = "HSUAHSUFM41SD51F5D1F5"

export async function login(req,res){
    try{
        const user = await userSchema.findOne({email:req.body.email})
        if(!user){
            return res.status(401).json({
                statusCode:401,
                message:"Usuário não encontrado",
                data:{
                    email:req.body.email
                }
            })
        }
        const validacaoPassword = bcrypt.compareSync(req.body.password,user.password)
        if(!validacaoPassword){
            return res.status(401).json({
                statusCode:401,
                message:"Senha invalida"
            })
        }
        
        const token = jwt.sign({name:user.name},secret,{expiresIn:5*60})
        res.status(200).json({
            statusCode:200,
            message:"Login Realizado com Sucesso!",
            data:{
                token
            }
            
        })
    }catch(error){
        console.error(error)
        res.status(500).json({
            statusCode:500,
            message:error.message
        })
    }
}

export async function verificarToken(req,res,next){
    const tokenHeader = req.headers["authorization"]
    const token = tokenHeader && tokenHeader.split(" ")[1]
    if(!token){
        return res.status(401),json({
            statusCode:401,
            message:"Nao Autorizado!"
        })
    }try{
        jwt.verify(token,secret)
        next()
        
    }catch(error){
        console.error(error)
        res.status(500).json({
            statusCode:500,
            message:"Token Invalido!"
        })
    }
}