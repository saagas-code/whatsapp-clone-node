import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { JwtStrategy } from 'common/strategy/jwt.strategy';

import { UserDatabaseModule } from './database.module';
import { AuthUserController } from './services/authUser/AuthUserController';
import { AuthUserUseCase } from './services/authUser/AuthUserUseCase';
import { CreateUserController } from './services/createUser/CreateUserController';
import { CreateUserService } from './services/createUser/CreateUserService';
import { RequestUserController } from './services/requestUser/RequestUserController';
import { RequestUserUseCase } from './services/requestUser/RequestUserUseCase';


@Module({
  imports: [
    UserDatabaseModule,
    PassportModule.register({defaultStrategy: 'jwt'}),
    JwtModule.register({
      secret: process.env.JWT_SECRET_KEY || '8819',
      signOptions: {
        expiresIn: 3600
      }
    })
  ],
  controllers: [
    CreateUserController,
    AuthUserController,
    RequestUserController
  ],
  providers: [
    CreateUserService,
    AuthUserUseCase,
    RequestUserUseCase,
    JwtStrategy
  ],
  exports: [
    JwtStrategy, PassportModule
  ]
  
})

export class UserHttpModule {}
