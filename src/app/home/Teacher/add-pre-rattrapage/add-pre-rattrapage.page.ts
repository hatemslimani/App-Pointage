import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ModalController, ToastController } from '@ionic/angular';
import { PreRattrapageService, PreRattrapage } from 'src/app/service/remplacement/pre-rattrapage.service';
import { DatePipe } from '@angular/common';
import { AuthServiceService } from 'src/app/service/authentification/auth-service.service';

@Component({
  selector: 'app-add-pre-rattrapage',
  templateUrl: './add-pre-rattrapage.page.html',
  styleUrls: ['./add-pre-rattrapage.page.scss'],
})
export class AddPreRattrapagePage implements OnInit {

  PreRattrappages: PreRattrapage[];
  now = new Date().getFullYear() + '-' + String(new Date().getMonth() + 1).padStart(2, '0') + '-' + String(new Date().getDate()).padStart(2, '0');
  @Input() id: number;
  isUpdate = false;
  data: any

  dateAbsence;
  sprinerName: string;
  isHidden: boolean = true;
  listGroups: any;
  listSeance: any;
  listSeanceAbcense: any;
  listFreeSalle: any;
  idEnsiegnant: any;
  rattrapage: PreRattrapage;
  PreRattrapageService: any;
  toastr: any;
  error: any;
  dateRatt: any;
  idSeance
  listNiveau;
  DateAbscence: any;
  constructor(
    private PreRattrapageServ: PreRattrapageService,
    private modalCrtl: ModalController,
    public toastController: ToastController,
    private datePipe: DatePipe,

  ) { }
  ngOnInit() {
  }
  getPrerattrapageById(id) {
    this.PreRattrapageServ.getPrerattrapageById(id).subscribe(d => {
      this.data = d;
    })
  }
  closeModal() {
    this.modalCrtl.dismiss(null, 'closed');
  }
  onSubmit(value) {
    
    if(value.dateAbsence=="" || value.dateRatt=="" || value.idSalle=="" || value.idSeance=="" || value.idSeanceAbsence=="")
    {
      this.presentToastt("tous les champs sont obligatoires","danger")
      return false;
    }
    value.dateAbsence=this.datePipe.transform(value.dateAbsence, 'yyyy-MM-dd')
    value.dateRatt=this.datePipe.transform(value.dateRatt, 'yyyy-MM-dd')
    this.PreRattrapageServ.create(value).subscribe(response =>
    {
       this.closeModal();
       this.presentToast();
    },err=>{
        this.presentToastt(err,"danger")
      }
    )
  }
  getPreSeancesPossibles(dateRatt, idSeance)
  {

    this.PreRattrapageServ.getPreSeancesPossibles(this.datePipe.transform(dateRatt, 'yyyy-MM-dd'),idSeance).subscribe(data => {
      this.listSeance = data;
    },err=>{
      this.presentToastt(err,"danger")
    })
  }



  async presentToast() {
    const toast = await this.toastController.create({
      message: 'opération effecutée avec succée',
      duration: 3000
    });
    toast.present();
  }
  async presentToastt(msg,color) {
    const toast = await this.toastController.create({
      message:msg,
      duration: 3000,
      color:color
    });
    toast.present();
  }
  getNiveau() {
    this.PreRattrapageServ.getNiveau().subscribe(data => {
      this.listNiveau = data;
    })
  }

  getFreeSallePre(dateRatt, idSeance) {
    this.PreRattrapageServ.getFreeSallePre(this.datePipe.transform(dateRatt, 'yyyy-MM-dd'), idSeance).subscribe(data => {
      this.listFreeSalle = data;
    })
  }
  getSeanceDenseignement(dateAbsence) {
    this.PreRattrapageServ.getSeanceDenseignement(this.datePipe.transform(dateAbsence, 'yyyy-MM-dd')).subscribe(data => {
      this.listSeanceAbcense = data;
    },err=>{
      this.presentToastt(err,'danger')
    })
  }
  maxDatePreRatt()
  {if(this.dateAbsence)
    return this.datePipe.transform(new Date(new Date(this.dateAbsence).getTime()  - (1000 * 60 * 60 * 24)), 'yyyy-MM-dd');;
  }
  MinDatePreRatt()
  {
    return this.datePipe.transform(new Date(new Date().getTime()  + (1000 * 60 * 60 * 24)), 'yyyy-MM-dd');
  }

}
