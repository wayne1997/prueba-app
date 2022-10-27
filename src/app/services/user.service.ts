import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { User } from '../interfaces/contacts.interface';
import { StorageService } from './storage.service';



@Injectable({
  providedIn: 'root'
})
export class UserService {

  private URL = environment.contacts_url;
  private usersLogged: User[] = [];

  constructor( 
    private http: HttpClient
    ) {}

  getUsers(){
    return this.http.get<User[]>(this.URL);  
  }

}
