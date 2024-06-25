import prismaClient from "../../prisma";
import { EditCategoryRequest } from "../../controllers/category/EditCategoryRequest";

class EditCategoryService {
    async execute({name, category_id}: EditCategoryRequest){
        if(category_id ===" " || name == " " || !category_id || !name){
            throw Error("Invalid arguments to edit category!");
        }
        
        const productEdited = await prismaClient.category.update({
            where: {
                id: category_id                
            },
            data:{
                name: name
            }
        });
        return productEdited;
    }
}

export { EditCategoryService }
