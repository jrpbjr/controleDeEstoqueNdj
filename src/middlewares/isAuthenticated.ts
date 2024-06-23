import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";
import {Payload} from "../models/interface/user/auth/Payload";

export function isAuthenticated(
    resquest : Request,
    response : Response,
    next : NextFunction
){
    // Acessar token JWT
    const authToken = resquest.headers.authorization;]

    if (!authToken){
        return response.status(401).end();
    }

    const [, token] = authToken.split(" ");

    try{

        //validar nosso token
        const { sub } = verify(token, process.env.JWT_SECRET) as Payload;
        resquest.user_id = sub;
        return next(); // deixa que a requisição prossiga
    }catch (error){
        return response.send(401).end;
    }

}
