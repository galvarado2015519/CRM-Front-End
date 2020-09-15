import { Component, OnInit } from '@angular/core';
import { UserModel } from 'src/app/models/user.model';
import { RestService } from 'src/app/services/rest/rest.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user: UserModel;

  constructor(private rest: RestService, private router: Router) { 
    this.user = new UserModel('','','','', undefined,'');
  }

  ngOnInit(): void {
  }

  submit(){
    if(this.user.name != '' &&
      this.user.username != '' &&
      this.user.email != '' &&
      this.user.password != '' &&
      this.user.telephone != undefined){

        // Subscribe maneja consultas
      this.rest.saveUser(this.user).subscribe(( res:any)=>{
        if(res.message){
          alert(res.message)
        }else if(res.UsuarioCreado){
          alert(` Bienvenido ${res.UsuarioCreado.name}` );
          this.router.navigateByUrl('work');
          localStorage.setItem('tokenUser', res.token);
          localStorage.setItem('user', JSON.stringify(res.UsuarioCreado));
          
        }else{
          alert(res.message)
        }
      });
    }else{
      alert('Ingrese todos los campos para registrarse');
    }
    
  }

}
