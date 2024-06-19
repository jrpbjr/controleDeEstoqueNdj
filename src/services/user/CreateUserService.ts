import prismaClient from "../../prisma";
import { hash } from "bcryptjs";
import {UserRequest} from "../../models/interface/user/UserRequest"

class CreateService{

    async execute({name,email,password}: UserRequest) {
        if(!email){
            throw new Error("Email incorrect");
        }

        const userAlreadyExist = await prismaClient.user.findFirst({
            where: {
                email: email
            }
        })

        if (userAlreadyExist){
            throw new Error("Email already exist");
        }

        //encriptando senha do usuário
        const passwordHash = await hash(password, 8);

        // Criando  nosso usuário

        const user = prismaClient.user.create({
            data: {
                name: name,
                email: email,
                password: passwordHash
            },
            select: {
                id: true,
                name: true,
                email: true
            }
        })

        return user;

    }

}
export { CreateService }