import { Request, Response } from "express";
import { ListProductByCategoryIdService } from "../../services/product/ListProductByCategoryService";

class ListProductByCategoryController{

    async handle( request: Request, response: Response){
        const category_id = request.query.category_id as string;
        const listProductByCategoryIdService = new ListProductByCategoryIdService();

        const product = await listProductByCategoryIdService.execute({ category_id });
        return response.json(product);
    }

}

export { ListProductByCategoryController }