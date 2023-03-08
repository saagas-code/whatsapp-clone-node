import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { JwtStrategy } from 'common/strategy/jwt.strategy';

import { UserDatabaseModule } from './database.module';
import { CreateUserController } from './services/createUser/CreateUserController';
import { CreateUserService } from './services/createUser/CreateUserService';


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
  ],
  providers: [
    CreateUserService,
    JwtStrategy
  ],
  exports: [
    JwtStrategy, PassportModule
  ]
  
})

export class UserHttpModule {}
