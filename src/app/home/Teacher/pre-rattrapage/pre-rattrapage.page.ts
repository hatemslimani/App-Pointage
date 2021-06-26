import { Component, OnInit } from '@angular/core';
import { AlertController, ModalController, ToastController } from '@ionic/angular';
import { PreRattrapageService, PreRattrapage } from 'src/app/service/remplacement/pre-rattrapage.service';
import { UpdatePreRattrapagePage } from '../update-pre-rattrapage/update-pre-rattrapage.page';
import { AddPreRattrapagePage } from '../add-pre-rattrapage/add-pre-rattrapage.page';
@Component({
  selector: 'app-pre-rattrapage',
  templateUrl: './pre-rattrapage.page.html',
  styleUrls: ['./pre-rattrapage.page.scss'],
})
export class PreRattrapagePage implements OnInit {
  PreRattrappages: PreRattrapage[];
  constructor(
    private PreRattrapageServ: PreRattrapageService,
    private alertCtrl: AlertController,
    private modalCtrl: ModalController,
    public toastController: ToastController) { }

  ngOnInit() {
    this.getAllPreRatt();
  }

  getAllPreRatt() {
    this.PreRattrapageServ.getPreRatt().subscribe(response => {
      this.PreRattrappages = response;
    })
  }


  async removePreRatt(cod_rattrapage) {
    const toast = await this.toastController.create({
      duration: 5000,
      animated: false,
    });
    this.alertCtrl.create({
      header: 'Supprimer',
      message: ' Etes-vous sur de supprimer ce pré-rattrapage !',
      buttons: [
        {
          text: 'OUi',
          handler: () => {
            this.PreRattrapageServ.remove(cod_rattrapage).subscribe(() => {
              this.getAllPreRatt();
              toast.message = "suppression avec succée";
              toast.present();
            }, err => {
              toast.message = err.error.message;
              toast.present();
            });
          }
        },
        { text: 'Non' }
      ]
    }).then(alertEl => alertEl.present());
  }


  modifPreRatt(id) {
    this.modalCtrl
      .create({
        component: UpdatePreRattrapagePage,
        componentProps: { id }
      })
      .then(modal => modal.present());
  }

  async addPreRatt() {

    const c = await this.modalCtrl
      .create({
        component: AddPreRattrapagePage
      });
    c.present();
    c.onDidDismiss().then(data=>this.getAllPreRatt());
  }
}
