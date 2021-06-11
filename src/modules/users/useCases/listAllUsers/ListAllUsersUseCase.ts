import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class ListAllUsersUseCase {
  constructor(private usersRepository: IUsersRepository) { }

  execute({ user_id }: IRequest): User[] {
    const userLogon = this.usersRepository.findById(user_id);

    if (userLogon.admin === false) {
      throw new Error("You aren't an admin user");
    }

    if (!userLogon) {
      throw new Error("User not exists");
    }

    return this.usersRepository.list();

  }
}

export { ListAllUsersUseCase };
