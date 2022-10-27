import { Component, OnInit } from '@angular/core';
import { 
  FormGroup,
  Validators, 
  FormBuilder } from '@angular/forms';
import { AlertController, NavController } from '@ionic/angular';
import { User } from 'src/app/interfaces/contacts.interface';
import { StorageService } from 'src/app/services/storage.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage  {
  requiredForm: FormGroup;
  users: User[] = [];
  constructor(
    private formBuilder: FormBuilder,
    private navCtrl: NavController,
    private storageService: StorageService,
    private userService: UserService,
    private alertCtrl: AlertController
    ) {
    this.buildForm();
  }

  buildForm(){
    this.requiredForm = this.formBuilder.group({
      user: ['', [Validators.pattern(/^[a-zA-Z]+$/), Validators.required]],
      emailUser: ['', [Validators.email, Validators.required]]
    });
  }

  onSubmit(value){
    this.userService.getUsers().subscribe( data => {
      let userLogged = data.find( user => user.email === value.emailUser);
      if( userLogged && userLogged.username === value.user ){
          this.storageService.saveUser(userLogged);
          this.navCtrl.navigateRoot('/tabs');
          this.requiredForm.reset();
      }else{
          this.presentAlert();
          this.requiredForm.reset();
      }
    });
  }

  async presentAlert(){
    const alert = await this.alertCtrl.create({
      header: 'Usuario no identificado',
      message: 'No se encuentra el usuario en la base de datos.',
      buttons: ['Aceptar']
    });
    await alert.present();
  }
}

