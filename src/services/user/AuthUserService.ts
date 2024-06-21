import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";
import prismaClient from "../../prisma";
import { AuthRquest } from "../../models/interface/user/auth/AuthRequest";

class AuthUserService {
    async execute({email, password}: AuthRquest){

        if(!email){
            throw new Error("Email precisa ser enviado!");
        }
        if(!password){
            throw new Error("A senha precisa ser enviada!");
        }

        //Verificar no banco de dado se existe um usuário com o email passado
        const user = await prismaClient.user.findFirst({
            where: {
                email: email
            }
        });
        if(!user) {
            throw new Error ("Wrong username or password!");
        }
        // Verificar se senha do usuário está correta
        const passwordWhatch = await compare(password, user?.password)
        if(!passwordWhatch){
            throw new Error("Wrong password!");
        }

        const token = sign(
            {
            name: user?.name,
            email: user?.email
        },
        process.env.JWT_SECRET as string,
        {
            subject: user.id,
            expiresIn: "30d"
        }
    );
    return {
        id: user?.id,
        name: user?.name,
        email: user?.email,
        token: token
    }

    }
}

export {AuthUserService}