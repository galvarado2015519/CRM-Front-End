import { Component, OnInit } from '@angular/core';
import { RestService } from 'src/app/services/rest/rest.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userLogin

  constructor( private rest: RestService, private router: Router) { 
    this.userLogin = {
      email: '',
      username: '',
      password: ''
    }
  }

  ngOnInit(): void {
  }

  submit(){
    if(this.userLogin.username != '' || this.userLogin.email){
      if(this.userLogin.password){  
        this.rest.login(this.userLogin).subscribe((res:any)=>{
          if(res.message){
            alert(res.message)
          }else if(res.token){
            alert(`Bienvenido ${ this.userLogin.username}`)
            this.router.navigateByUrl('work')
            localStorage.setItem('tokenUser', res.token);
            res.user.password = '';
            localStorage.setItem('user', JSON.stringify(res.user));
          }else{
            alert('Usuario incorrecto');
          }
        })
      }else{
        alert('Ingrese la contraseña')
      }
    }else{
      alert('Ingrese los datos de autenticación')
    }   
  }

}
