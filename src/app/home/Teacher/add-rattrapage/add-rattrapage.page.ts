import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ModalController,ToastController } from '@ionic/angular';
import { RattrapageService,Rattrapage } from 'src/app/service/remplacement/rattrapage.service';
import { DatePipe } from '@angular/common';
@Component({
  selector: 'app-add-rattrapage',
  templateUrl: './add-rattrapage.page.html',
  styleUrls: ['./add-rattrapage.page.scss'],
})
export class AddRattrapagePage implements OnInit {

  PreRattrappages : Rattrapage[];
  now = new Date().getFullYear() + '-' + String(new Date().getMonth() + 1).padStart(2, '0') + '-' + String(new Date().getDate()).padStart(2, '0');
  @Input() preratt: Rattrapage;
  isUpdate = false;
  date = {
  dateabs: '',
  dateratt: '',
  niveau: '',
  seanceabs: '',
  seanceratt: ''
  };
  sprinerName:string;
  isHidden: boolean = true;
  listGroups: any;
  listSeance: any;
  listSeanceAbcense: any;
  listFreeSalle: any;
  idEnsiegnant: any;
  rattrapage: Rattrapage;
  RattrapageService: any;
  toastr: any;
  error:any;
  dateRatt:any;
  idSeance;
  SeanceAbsence;
  DateAbscence :any;
  constructor(
    private RattrapageServ: RattrapageService,
    private modalCrtl: ModalController,
    public toastController: ToastController,
    private datePipe: DatePipe
    ) { }

  ngOnInit() {
    this.getSeanceAbsence();
   }
  closeModal(){
    this.modalCrtl.dismiss(null, 'closed');
  }
  onSubmit(value) {
    value.dateRatt=this.datePipe.transform(value.dateRatt, 'yyyy-MM-dd')
    this.RattrapageServ.create(value).subscribe(response => {
      this.closeModal()
      this.presentToast()
    })
  }
  getSeanceAbsence()
  {
    this.RattrapageServ.getSeanceAbsence().subscribe(d =>{
      this.SeanceAbsence=d;
    })
  }
  getSeance(dateRatt,idAbsence) {
    this.RattrapageServ.getSeance(this.datePipe.transform(dateRatt, 'yyyy-MM-dd'),idAbsence).subscribe(data => {
       this.listSeance = data;       
     },err=>{
      this.presentToastt(err);
     })
    }
    getFreeSallePre(dateRatt, idSeance) {     
      this.RattrapageServ.getFreeSallePre(this.datePipe.transform(dateRatt, 'yyyy-MM-dd'), idSeance).subscribe(data => {
        this.listFreeSalle = data;          
      })
    }
    async presentToast() {
      const toast = await this.toastController.create({
        message: 'opération effecutée avec succée',
        duration: 2500
      });
      toast.present();
    }
    async presentToastt(msg) {
      const toast = await this.toastController.create({
        message: msg,
        duration: 2500
      });
      toast.present();
    }
}
