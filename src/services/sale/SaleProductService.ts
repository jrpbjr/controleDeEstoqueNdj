import prismaClient from "../../prisma";
import { SaleProductRequest } from "../../models/interface/sale/SaleProductRequest";

class SaleProductService {

    async execute({ product_id, amount }: SaleProductRequest) {

        if (!product_id || !amount) {
            throw new Error("Dados de entrada não foram passados corretamente!");
        }

        const queryProduct = await prismaClient.product.findFirst({
            where: {
                id: product_id
            },
        });

        if (!queryProduct) {
            throw new Error("Produto não encontrado!");
        }

        if (queryProduct.amount > amount && amount > 0) {  
            const newAmount = queryProduct.amount - amount;
            const saveSale = await prismaClient.product.update({
                where: {
                    id: product_id
                },
                data: {
                    amount: newAmount
                },
                select: {
                    id: true,
                    name: true,
                    amount: true
                }
            });
            return saveSale;
        } else {
            throw new Error("Quantidade insuficiente ou inválida!Não sendo poss´vel efetuar a venda");
        }
    }
}

export { SaleProductService }