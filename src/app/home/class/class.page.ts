import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';
import { ActivatedRoute,Router } from '@angular/router';
import { DepartementService } from 'src/app/service/departement.service';
import { ToastController } from '@ionic/angular';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-class',
  templateUrl: './class.page.html',
  styleUrls: ['./class.page.scss'],
})
export class ClassPage implements OnInit {
  @ViewChild(IonSlides) slides: IonSlides;
  idBlock: any;
  slideOpts;
  etages: any;
  slidesLeng: number;
  pointage: any[] = [];
  constructor(public loadingController: LoadingController,private actRroute: ActivatedRoute, private DepServ: DepartementService,public toastController: ToastController,private route: Router) {
    this.actRroute.queryParams.subscribe((res) => {
      this.idBlock = res.idBlock;
    });

  }

  ngOnInit() {
    this.slideOpts = {
      initialSlide: 0,
      speed: 400,
      pager: false,
      scrollbar: false,
      onlyExternal: false,
      allowTouchMove: false
    };
    this.getEtagesByBlock()
  }

  async next() {
    let index;
    await this.slides.getActiveIndex().then(num => {
      index = num;
    });
    await this.slides.length().then(num => {
      this.slidesLeng = num;
    });
    if (this.slidesLeng == index + 1) {
      this.storePointage();
    }
    else {
      this.slides.slideNext();
    }
  }
  async prev() {
    let index;
    await this.slides.getActiveIndex().then(num => {
      index = num;
    });
    if (0 != index ) {
      this.slides.slidePrev();
    }
  }
  getEtagesByBlock() {
    this.DepServ.getEtagesByBlock(this.idBlock).subscribe(data => {
      this.etages = data;
      for (let etage of this.etages) {
        for (let salle of etage.salles) {
          this.pointage.push({
            "id_Salle": salle.id,
            "occupee": false
          });
        }
      }
    })
  }
  change(id, event) {
    for (let i = 0; i < this.pointage.length; i++) {
      if (this.pointage[i].id_Salle == id) {
        this.pointage[i].occupee = event.detail.checked;
      }
    }
  }
  async storePointage()
  {
    const loading = await this.loadingController.create({
      cssClass: 'my-custom-class',
      message: 'Please wait...'
    });
    await loading.present();
    this.DepServ.sendPointage(this.idBlock,this.pointage).subscribe(data=>{
      loading.dismiss();
      this.route.navigate(["/home/aceuil"]);
    },err=>{
      loading.dismiss();
      this.route.navigate(["/home/aceuil"]);
    });
  }

}
