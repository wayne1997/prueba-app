import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/interfaces/contacts.interface';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit{

  users: User[] = [];
  imageUrl: string = 'https://faopharmacy.unc.edu/wp-content/uploads/sites/200/2022/04/noimage.png';
  
  constructor( private userService: UserService ) {}
  
  
  ngOnInit(): void {
    this.userService.getUsers().subscribe( dataUsers => {
      this.users.push(...dataUsers);
    });
  }
}
