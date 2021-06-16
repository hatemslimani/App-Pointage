import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ModalController, ToastController } from '@ionic/angular';
import { PreRattrapageService, PreRattrapage } from 'src/app/service/remplacement/pre-rattrapage.service';
import { DatePipe } from '@angular/common';

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

  //data to be updated
  /*data = {
  dateabs: null,
  dateratt: null,
  niveau: null,
  seanceabs: null,
  seanceratt: null
  };*/
  data: any


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
    private datePipe: DatePipe

  ) { }

  ngOnInit() {
  }
  getPrerattrapageById(id) {
    this.PreRattrapageServ.getPrerattrapageById(id).subscribe(d => {
      this.data = d;

    })
  }

  getAllPreRatt() {
    this.PreRattrapageServ.getPreRatt().subscribe(response => {
      this.PreRattrappages = response;
      console.log(response);

    })
  }


  closeModal() {
    this.modalCrtl.dismiss(null, 'closed');

  }

  onSubmit(value) {
    console.log(value);
    this.getAllPreRatt();
    this.PreRattrapageServ.create(value).subscribe(response => console.log(response)
    )
  }

  getSeance() {
    this.PreRattrapageServ.getSeance().subscribe(data => {
      this.listSeance = data;
      console.log(data);

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
      console.log(data);


    })
  }

  getFreeSalle(dateRatt, idSeance) {
    this.PreRattrapageServ.getFreeSalle(dateRatt, idSeance).subscribe(data => {
      this.listFreeSalle = data;
      console.log(data);
    })
  }
  getSeanceDenseignement(dateAbsence) {
    console.log(this.datePipe.transform(dateAbsence, 'yyyy-MM-dd'));
    this.PreRattrapageServ.getSeanceDenseignement(this.datePipe.transform(dateAbsence, 'yyyy-MM-dd')).subscribe(data => {
      console.log(data);
      this.listSeanceAbcense = data;
    },err=>{
      this.presentToastt(err,'danger')
    })
  }
  maxDatePreRatt(dateAbsence)
  {
    return dateAbsence;
  }

}
