import { Component, } from '@angular/core';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  username:string = ""
  password:string = ""
  onChangeUser(event: any){
    this.username = event.target.value
  }
  onChangePassword(event: any){
     this.password = event.target.value
  }
  onSubmit(){
    // login process
  }
}
