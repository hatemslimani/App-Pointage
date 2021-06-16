import { Component, OnInit } from '@angular/core';
import { AlertController, ModalController, ToastController } from '@ionic/angular';
import { RattrapageService, Rattrapage } from 'src/app/service/remplacement/rattrapage.service';
import { UpdateRattrapagePage } from '../update-rattrapage/update-rattrapage.page';
import { PreRattrapagePage } from '../pre-rattrapage/pre-rattrapage.page';
import { AddRattrapagePage } from '../add-rattrapage/add-rattrapage.page';

@Component({
  selector: 'app-rattrapage',
  templateUrl: './rattrapage.page.html',
  styleUrls: ['./rattrapage.page.scss'],
})
export class RattrapagePage implements OnInit {
  Rattrappages: Rattrapage[];
  SeanceAbsence;
  constructor(
    private RattrapageServ: RattrapageService,
    private alertCtrl: AlertController,
    private modalCtrl: ModalController,
    public toastController: ToastController
  ) { }

  ngOnInit() {
    this.getAllRatt();
  }

  getAllRatt() {
    this.RattrapageServ.getRatt().subscribe(response => {
      this.Rattrappages = response;      
    })
  }
 

  async removeRatt(IdRattrapage) {
    const toast = await this.toastController.create({
      duration: 5000,
      animated: false,
    });

    this.alertCtrl.create({
      header: 'Supprimer',
      message: ' Etes-vous sur de supprimer ce rattrapage !',
      buttons: [
        {
          text: 'OUi',
          handler: () => {
            this.RattrapageServ.remove(IdRattrapage).subscribe(() => {
              this.getAllRatt();
              toast.message = "suppression avec succée";
              toast.present();
            }, err => {
              toast.message = err;
              toast.present();
            });
          }
        },
        { text: 'Non' }
      ]
    }).then(alertEl => alertEl.present());

  }


  modifPreRatt(preratt: Rattrapage) {
    this.modalCtrl
      .create({
        component: UpdateRattrapagePage,
        componentProps: { preratt }
      })
      .then(modal => modal.present());
  }

  async addRattrapage() {

    const c = await this.modalCtrl
          .create({
        component: AddRattrapagePage
      })
      c.present();
      c.onDidDismiss().then(data=>this.getAllRatt());

  }
}
