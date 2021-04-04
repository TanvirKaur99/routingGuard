import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import{ Subscription } from 'rxjs'
import { Userdata } from '../shared/userdata.model';
import { UserdataService } from '../shared/userdata.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(public udservice:UserdataService,
    private router:Router) { }

  users!:Userdata[];
  subscription!:Subscription;

  ngOnInit(): void {

    this.users=this.udservice.displayUsers();
    console.log(this.users)
    this.subscription=this.udservice.updatedData.subscribe((user:Userdata[])=>{this.users=user})
    console.log(this.subscription);

  }
  model:any={username:"varun",email:"varun@gmail.com",location:"delhi",profile:"developer"};

  adduser(form:NgForm)
  {
    //console.log(form.value)
    const users=new Userdata(form.value.username,form.value.email,form.value.location,form.value.profile)

    this.udservice.addnewUser(users);
    alert("data inserted successfully");
  }

  onDelete(index:number)
  {
     this.udservice.deleteUser(index);
     alert("Data is deleted successfully...")

  }

  onEdit(index:number)
  {
    // this.router.navigateByUrl('/edit-user');
    // localhost:4200/edit-user?id=0
    this.router.navigate(['/edituser'],{queryParams:{id:index}})

  }


}
