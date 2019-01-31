import { Request, Response, Router } from "express";


const publicRouter: Router = Router();

publicRouter.get("/update", (request: Request, response: Response) => {
 
Tas_test.findOne({ where: { ITEM_NAME:  request.body.item_name } }).then(person => {
     
      
    
      })
  
      })




export { publicRouter };      
