import prismaClient from "../../prisma";

interface ListProductByCategoryIdRequest{
    category_id: string;
}

class ListProductByCategoryIdService{

    async execute({category_id} : ListProductByCategoryIdRequest){
        const findProdctByCategoryId = await prismaClient.product.findMany({
            where:{
                category_id: category_id
            }
        });
        return findProdctByCategoryId;
    }

}

export {ListProductByCategoryIdService}
