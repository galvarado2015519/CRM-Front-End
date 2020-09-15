import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  token: string;
  user: string;

  constructor(public router:Router) { }

  ngOnInit(): void {
    this.user = localStorage.getItem('user');
    this.token = localStorage.getItem('tokenUser');
    if(this.token == null){
      console.log("No se estas logeado, inicia sesión");
    }
  }

  logOut(){
    localStorage.clear();
    this.router.navigateByUrl('/');
  }

}
