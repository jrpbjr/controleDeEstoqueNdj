import { Request, Response } from "express";
import { ListProducService } from "../../services/product/ListProductService";

class ListProductController{

    async handle(request: Request, response:Response){
        const listProductService = new ListProducService();
        const products = await listProductService.execute();

        return response.json(products);
    }

}

export {ListProductController}