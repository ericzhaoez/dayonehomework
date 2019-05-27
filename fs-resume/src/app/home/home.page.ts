import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private toastController: ToastController, private alertController: AlertController) {}
  async presentToast() {
  
    const toast = await this.toastController.create({
      message: 'Yes it will!',
      duration: 2000
    });
    toast.present();
  }

  async presentAlert() {
  
    const alert = await this.alertController.create({
      header: 'Alert Test',
      message: 'Did it work?',
      buttons:[
        {
          text: 'No',
          handler: () => {
            console.log('No clicked');
          }
        },
        {
          text: 'Yes',
          handler: () => {
            console.log('Yes clicked');
          }
        }
      ]
    });
    return await alert.present();
  }

}


