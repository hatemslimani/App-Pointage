import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder, NgForm } from '@angular/forms';
import { User } from 'src/app/Interface/IUser';
import { AuthServiceService } from 'src/app/service/authentification/auth-service.service';
import { ToastController } from '@ionic/angular';
@Component({
  selector: 'app-profil',
  templateUrl: './profil.page.html',
  styleUrls: ['./profil.page.scss'],
})
export class ProfilPage implements OnInit {
  user:User;
  constructor(private authService:AuthServiceService,public toastController: ToastController) { }

  ngOnInit() {
    this.getUser()
  }
  getUser()
  {
    this.authService.getUser().subscribe(data=>{
      this.user=data;
    })
  }
  ChangeInfoPersonneller(infoPer) {
    let user1
    if(this.user.role=='ENSEIGNANT')
    {
      user1 = {
        id: this.user.id,
        nom: infoPer.nom,
        prenom: null
      }
    }else
    {
      user1 = {
        id: this.user.id,
        nom: infoPer.nom,
        prenom: infoPer.prenom
      }
    }
    
    this.authService.ChangeInfoPersonneller(user1).subscribe(data => {
      this.getUser();
      this.afficherMsg(data.message)
    })
  }
  ChangePassword(value:NgForm) {
    let user1 = {
      id: this.user.id,
      password: value.value.actuelPassword,
      newPassword: value.value.newPassword
    }
    this.authService.ChangePassword(user1).subscribe((data) => {
      value.reset();
      this.afficherMsg(data.message)
    }, err => {
      this.afficherMsg(err)
    })
  }
  changeEmail(value:NgForm) {
    let user1 = {
      id: this.user.id,
      userName: value.value.email,
      password: value.value.password
    }
    this.authService.ChangeEmail(user1).subscribe((data) => {
      value.reset();
      this.getUser();
      this.afficherMsg(data.message)
    }, err => {
      this.afficherMsg(err)
    })
    
  }
  async afficherMsg(msg)
  {
    const toast = await this.toastController.create({
      message: msg,
      duration: 2000
    });
    toast.present();
  }
}
