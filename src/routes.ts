import { Router, Request, Response} from "express";
import { CreateUserController } from "./controllers/user/CreateUserController";
import { AuthUserController } from "./controllers/user/AuthUserController"
import { DetailUserController } from "./controllers/user/DetailUserController";
import { isAuthenticated } from "./middlewares/isAuthenticated";
import { RemoveUserController } from "./controllers/user/RemoveUserController";
import { CreateCategoryController } from "./controllers/category/CreateCategoryController";
import { EditCategoryController } from "./controllers/category/EditCategoryController";

const router = Router();
router.get("/test", (request: Request, response: Response) => {
    return response.json({ ok: true });
});

//User Routes
router.post('/user',new CreateUserController().handle);
router.post('/session', new AuthUserController().handle)
router.get('/me', isAuthenticated, new DetailUserController().handle);
router.delete('/user/remove', new RemoveUserController().handle);

//Category Routes
router.post('/category',isAuthenticated,new CreateCategoryController().handle)
router.put('/category/edit', isAuthenticated,new EditCategoryController().handle)


export { router };