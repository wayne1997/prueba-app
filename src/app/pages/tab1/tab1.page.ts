import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/interfaces/contacts.interface';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit{
  imageUrl: string = 'https://images.unsplash.com/photo-1516934984448-60e5f2808e6d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80s';
  constructor(private storageService: StorageService) {
  }
  
  get user() : User{
    return this.storageService.userLogged;
  }
  
  ngOnInit() {}
  
  logout(){}
}
