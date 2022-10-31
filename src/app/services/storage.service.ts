import { Injectable } from '@angular/core';
import { User } from '../interfaces/contacts.interface';
import { Storage } from '@ionic/storage-angular';
@Injectable({
  providedIn: 'root'
})
export class StorageService {
  private _storage: Storage | null = null;

  constructor(private storage: Storage ) { 
    this.init();
  }

  async init(){
    const storage = await this.storage.create();
    this._storage = storage;
  }

  async saveUser( user:User ){
    await this._storage.set('user-logged', user);
  }

  async obtainUser(): Promise<User>{
    try{
      const userData = await this._storage.get('user-logged');
      return userData;
    } catch(error){
      console.log(error);
    }
  }

  async cleanData(){
    await this._storage.remove('user-logged');
  }
}
