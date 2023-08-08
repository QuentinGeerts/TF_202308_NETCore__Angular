import { Injectable } from '@angular/core';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private users: User[] = [
    { id: 1, lastname: 'Geerts', firstname: 'Quentin' },
    { id: 2, lastname: 'Geerts', firstname: 'Benjamin' },
    { id: 3, lastname: 'Geerts', firstname: 'William' },
    { id: 4, lastname: 'Geerts', firstname: 'Antoine' },
    { id: 5, lastname: 'Geerts', firstname: 'Mélanie' },
  ];

  getUserById (id: number): any {
    return this.users.find(u => u.id === id);
  }
}
