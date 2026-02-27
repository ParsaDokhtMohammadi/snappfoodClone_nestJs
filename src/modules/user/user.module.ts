import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from './entity/user.entity';
import { UserAdressEntity } from './entity/address.entity';

@Module({
  imports:[TypeOrmModule.forFeature([UserEntity,UserAdressEntity])],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
