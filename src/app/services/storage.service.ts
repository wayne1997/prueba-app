import { Injectable } from '@angular/core';
import { User } from '../interfaces/contacts.interface';
import { Storage } from '@ionic/storage-angular';
@Injectable({
  providedIn: 'root'
})
export class StorageService {
  private _userLogged: User | null = null;
  private _storage: Storage | null = null;

  constructor(private storage: Storage ) { 
    this.init();
  }

  get userLogged(): User{
    return this._userLogged;
  }

  async init(){
    const storage = await this.storage.create();
    this._storage = storage;
    await this.obtainUser();
  }

  async saveUser( user:User ){
    await this._storage.set('user-logged', user);
  }

  async obtainUser(){
    try{
      const userData = await this._storage.get('user-logged');
      this._userLogged = {...userData};
    } catch(error){
      console.log(error);
    }
  }

  async cleanData(){
    await this._storage.clear();
  }
}
