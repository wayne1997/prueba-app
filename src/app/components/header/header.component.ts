import { Component, Input, OnInit } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  @Input() headerName = '';

  constructor(
     private storageService: StorageService,
     private navCtrl: NavController,
     private alertCtrl: AlertController
     ) { }

  ngOnInit() {}


  async logOut(){
      await this.storageService.cleanData();
      this.navCtrl.navigateRoot('/login');
  }

  async showAlert(){
    const alert = await this.alertCtrl.create(
      {
      header: '¿Está seguro de cerrar sesión?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => alert.dissmis()
        },
        {
          text: 'Salir',
          role: 'confirm',
          handler: () => this.logOut()
        }
      ]
     }
    );
    await alert.present();
  }

}
