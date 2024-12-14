import { NextFunction, Request, Response } from 'express';
//import { Container } from 'typedi';

export class HomeController {
  //public user = Container.get(UserService);

  public Welcome = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      res.status(200).send('Hello');
    } catch (error) {
      next(error);
    }
  };
}
