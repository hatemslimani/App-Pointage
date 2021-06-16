import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { User } from 'src/app/Interface/IUser';
import { JwtHelperService } from "@auth0/angular-jwt";
import { ToastController } from '@ionic/angular';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  private uri:String="http://localhost:9191/user/";
  constructor(private http:HttpClient,private route:Router,public toastController: ToastController) { }
  login(log)
  {
    this.http.post<User>(this.uri+"authenticate",log).subscribe(data=>{
      if(data.role=='CONTROLLER' || data.role == 'ENSEIGNANT')
      {
        localStorage.setItem("currentUser",JSON.stringify(data))
        if(data.role=='CONTROLLER')this.route.navigate(['/home/aceuil'])
        if(data.role=='ENSEIGNANT')this.route.navigate(['/home/teacher'])
      }
      else
      this.presentToast("vous n'est pas autorisee")
    }
    ,
    err=>{
      this.presentToast(err);
    });
  }
  isLogged()
  {
    return !!localStorage.getItem('currentUser');
  }
  getToken()
  {
    let user:User=JSON.parse(localStorage.getItem("currentUser"));
    return user.token;
  }
  logoutUser()
  {
    localStorage.removeItem("currentUser")
    this.route.navigate(['/login'])
  }
  getRole()
  {
    let user:User=JSON.parse(localStorage.getItem("currentUser"));
    const helper = new JwtHelperService();
    const decodedToken = helper.decodeToken(user.token);
    return decodedToken.role;
  }
  async presentToast(msg) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 2000
    });
    toast.present();
  }
  getUser():Observable<User>
  {
    return this.http.get<User>(this.uri+"getUser")
  }
  ChangeInfoPersonneller(infoPer)
  {
    return this.http.post(this.uri+"ChangeInfoPer",infoPer);
  }
  ChangePassword(info)
  {
    return this.http.post(this.uri+"ChangePassword",info);
  }
  ChangeEmail(info)
  {
    return this.http.post(this.uri+"ChangeEmail",info);
  }
  updateToken(t)
  {
    let user:User=JSON.parse(localStorage.getItem("currentUser"));
    user.token=t;
    localStorage.setItem("currentUser",JSON.stringify(user))
  }
  
}
