import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../shared/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    public userService:UserService,
    private router:Router
    ) { }

  ngOnInit(): void {
 }

 onlogin(form:NgForm){
  this.userService.setuser(form.value.username);
  this.router.navigateByUrl('/profile');

 }

}
