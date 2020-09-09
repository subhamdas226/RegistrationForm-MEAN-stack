import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';

import { environment } from '../../environments/environment';

import { User } from './user.model';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  selectedUser: User ={
    fullName: '',
    email: '',
    password:''
  };
  //constructor() { }
  constructor(private http: HttpClient) { }
  postUser(user: User){
    return this.http.post(environment.apiBaseUrl+'/register',user);
    //this.http.post('/api/register',user);
  }
}

