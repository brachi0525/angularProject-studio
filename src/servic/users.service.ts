import { Injectable } from '@angular/core';

export interface Users{
  userName:string,
  password:string,
  subject:string
}
@Injectable({
  providedIn: 'root'
})



export class UsersService {
  constructor() { }
  private users: Users[] = [
    { userName: 'מזכירה', password: 'מזכירה',subject:'secretary' },
    { userName: 'teacher1', password: 'teacher1' ,subject:'teacher' }
  ];

  getUser(userName: string, password: string): Users | undefined {
    
    return this.users.find(u => u.userName === userName && u.password === password);
  }

}
