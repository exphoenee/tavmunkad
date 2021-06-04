import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { from, Observable } from 'rxjs';
import { Repository } from 'typeorm';
import { UserEntity } from '../models/user.entity';
import { User } from '../models/user.interface';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userReposiroy: Repository<UserEntity>,
  ) {}

  create(user: User): Observable<User> {
    return from(this.userReposiroy.save(user));
  }

  findOne(id: number): Observable<User> {
    return from(this.userReposiroy.findOne({ id }));
  }

  findAll(): Observable<User[]> {
    return from(this.userReposiroy.find());
  }

  deleteOne(id: number): Observable<any> {
    return from(this.userReposiroy.delete(id));
  }

  updateOne(id: number, user: User): Observable<any> {
    return from(this.userReposiroy.update(id, user));
  }
}
