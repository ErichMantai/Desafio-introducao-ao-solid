import { Request, Response } from "express";

import { TurnUserAdminUseCase } from "./TurnUserAdminUseCase";

class TurnUserAdminController {
  constructor(private turnUserAdminUseCase: TurnUserAdminUseCase) { }

  handle(request: Request, response: Response): Response {
    try {
      const { user_id } = request.params;

      const turnUserIsAdmin = this.turnUserAdminUseCase.execute({ user_id });

      response.json(turnUserIsAdmin);
    } catch (error) {
      return response
        .status(404)
        .json({ error: `Couldn't set admin: ${error}` });
    }


  }
}

export { TurnUserAdminController };
