import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class ListAllUsersUseCase {
  constructor(private usersRepository: IUsersRepository) { }

  execute({ user_id }: IRequest): User[] {
    const userLogon = this.usersRepository.findById(user_id);

    //const allUsers = this.usersRepository.list();
    //console.log(userLogon);
    //if (userLogon.isAdmin) return allUsers;
  }
}

export { ListAllUsersUseCase };
