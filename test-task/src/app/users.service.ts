import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface IUser {
  id: number;
  name: string;
  age: number;
  gender: "male" | "famale";
  department: "Backend";
  address: {
    city: string;
    street: string;
  }
}

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private readonly usersUrl = "assets/users.json";

  constructor(private http: HttpClient) {
  };

  public getUsers():Observable<IUser[]> {
    return this.http.get<IUser[]>(this.usersUrl);
  };
}
