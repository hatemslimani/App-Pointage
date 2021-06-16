import { Component, OnInit } from '@angular/core';
import { DepartementService } from 'src/app/service/departement.service';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { SeanceInterface } from 'src/app/Interface/SeanceInterface';
@Component({
  selector: 'app-aceuill',
  templateUrl: './aceuill.page.html',
  styleUrls: ['./aceuill.page.scss'],
})
export class AceuillPage implements OnInit {
  blocks: any;
  currentDate: any;
  currentMonth: any;
  currentTime: any;
  error: any;
  seance:SeanceInterface;
  constructor(private DepServ: DepartementService, private route: Router,public toastController: ToastController) {
    setInterval(() => {
      this.getTime();
    })
  }
  getTime() {
    this.currentDate = new Date().getDate() + " / " + new Date().getMonth() + " / " + new Date().getFullYear();
    this.currentTime = new Date().getHours() + " : " + new Date().getMinutes() + " : " + new Date().getSeconds();
  }
  ngOnInit() {
  }
  ionViewWillEnter()
  {
    this.getBlocks();
    this.getSeance();
  }
  getBlocks() {
    this.DepServ.getBlocks().subscribe(data => {
      this.blocks = data;
      this.error=null;
    }, err => {      
      this.blocks=null;
      this.error = err;      
    })
  }
  goToClass(id) {
    this.route.navigate(["/home/class"], { queryParams: { "idBlock": id } });
  }
  doRefresh(event) {
    this.DepServ.getBlocks().subscribe(data => {
      this.blocks = data;
      this.error=null;
      event.target.complete();
    }, err => {
      this.error = err;
      this.blocks=null;
      event.target.complete();
    })
    this.getSeance();
  }
  async pointagefait()
  {
    const toast = await this.toastController.create({
      message: 'Pointage fait avec success ',
      duration: 2000
    });
    toast.present();
  }
  getSeance()
  {
    this.DepServ.getSeance().subscribe(data=>{
      this.seance=data;
    })
  }
}
