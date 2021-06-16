import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from 'src/app/service/authentification/auth-service.service'
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private auth:AuthServiceService) { }

  ngOnInit() {
  }
  onSubmit(){
    
  }
  login(val)
  {   
    this.auth.login(val);
  }
}
