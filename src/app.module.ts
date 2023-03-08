require('module-alias/register')
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config'
import { UserDatabaseModule } from '@users/database.module';
import { UserHttpModule } from '@users/http.module';

@Module({
  imports: [
  
  ConfigModule.forRoot(),
    UserDatabaseModule,
    UserHttpModule,
  ]
})
export class AppModule {}
