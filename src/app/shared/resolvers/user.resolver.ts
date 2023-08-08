import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { User } from '../models/user.model';
import { UsersService } from '../services/users.service';

export const userResolver: ResolveFn<User> = (route, state) => {

  console.log(route.paramMap.get('id'));

  const userId = route.paramMap.get("id");
  return userId ? inject(UsersService).getUserById(+userId) : null;
};
