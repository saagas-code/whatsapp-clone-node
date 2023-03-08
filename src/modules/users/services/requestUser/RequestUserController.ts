import { Controller, Post, Param, UseGuards, Get } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { GetUser } from '@users/decorators/user.decorator';
import { IUserViewHTTP, UserViewModel } from '@users/viewsModels/ListUserView';

import { RequestUserUseCase } from './RequestUserUseCase';

@Controller("/auth")
@UseGuards(AuthGuard('jwt'))
export class RequestUserController {
  constructor(
    private requestUserUseCase: RequestUserUseCase,
  ) {}
  
  @Get("/session")
  async request(@GetUser() user: IUserViewHTTP) {

    const userr = await this.requestUserUseCase.execute(user.id)

    return UserViewModel.toHTTP(userr)
  }

}