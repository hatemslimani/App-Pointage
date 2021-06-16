import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder, NgForm } from '@angular/forms';
import { User } from 'src/app/Interface/IUser';
import { AuthServiceService } from 'src/app/service/authentification/auth-service.service';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.page.html',
  styleUrls: ['./profil.page.scss'],
})
export class ProfilPage implements OnInit {
  user:User;
  constructor(private authService:AuthServiceService) { }

  ngOnInit() {
    this.getUser()
  }
  getUser()
  {
    this.authService.getUser().subscribe(data=>{
      console.log(data);
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
    
    this.authService.ChangeInfoPersonneller(user1).subscribe(() => {
      this.getUser();
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
      console.log(data)
    }, err => {
      console.log(err)
    })
  }
  changeEmail(value:NgForm) {
    let user1 = {
      id: this.user.id,
      userName: value.value.email,
      password: value.value.password
    }
    this.authService.ChangeEmail(user1).subscribe((data) => {
      console.log(data);
      
      value.reset();
      this.authService.updateToken(data);
      this.getUser();
      console.log(data)
    }, err => {
      console.log(err)
    })
    
  }
}
