import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ModalController,ToastController } from '@ionic/angular';
import { RattrapageService,Rattrapage } from 'src/app/service/remplacement/rattrapage.service';

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

  //data to be updated
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
    public toastController: ToastController

    ) { }

  ngOnInit() {
    this.getSeanceAbsence();
   }



  closeModal(){
    this.modalCrtl.dismiss(null, 'closed');
  }

  onSubmit(value) {
    this.RattrapageServ.create(value).subscribe(response => console.log(response)
    )
  }

  getSeanceAbsence()
  {
    this.RattrapageServ.getSeanceAbsence().subscribe(d =>{
      this.SeanceAbsence=d;
      
    })
  }

  getSeance() {
    this.RattrapageServ.getSeance().subscribe(data => {
       this.listSeance = data;       
     })
    }
    getFreeSalle(dateRatt, idSeance) {     
      this.RattrapageServ.getFreeSalle(dateRatt, idSeance).subscribe(data => {
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

}
