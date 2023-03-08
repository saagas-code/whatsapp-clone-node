
import { Controller, Get, UseGuards } from "@nestjs/common"
import { AuthGuard } from "@nestjs/passport";
import { GetUser } from "@users/decorators/user.decorator";
import { IUserViewHTTP, UserViewModel } from "@users/viewsModels/ListUserView";
import { ListUserUseCase } from "./ListUserUseCase";


@Controller("/users")
@UseGuards(AuthGuard("jwt"))
export class ListUserController {
  constructor(
    private listUserUseCase: ListUserUseCase,
  ) {}
  
  @Get("/")
  async handle(@GetUser() user: IUserViewHTTP) {
    const list = await this.listUserUseCase.execute(user.id)
    return list.map(UserViewModel.toHTTP);
  }

}