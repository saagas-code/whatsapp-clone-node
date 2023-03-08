
import { Controller, Body, Get } from "@nestjs/common"
import { CreateUserDTO } from "@users/DTOs/CreateUserDTO";
import { ListUserService } from "./LIstUserService";


@Controller("/users")
export class ListUserController {
  constructor(
    private listEmployeeService: ListUserService,
  ) {}
  
  @Get("/")
  async handle() {
    // const list = await this.listEmployeeService.execute()
    // return list
  }

}