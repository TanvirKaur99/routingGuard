import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserdataService } from '../shared/userdata.service';
import { ActivatedRoute } from '@angular/router';
import { Userdata } from '../shared/userdata.model';


@Component({
  selector: 'app-edituser',
  templateUrl: './edituser.component.html',
  styleUrls: ['./edituser.component.css']
})
export class EdituserComponent implements OnInit {

  constructor(private activatedroute:ActivatedRoute,
    public userservice:UserdataService) { }
    id!:number
    prevData!:Userdata;
    @ViewChild('upateform', { static: false })
    newForm!: NgForm;

  ngOnInit() {
    this.activatedroute.queryParams.subscribe(params=>{
      this.id=params['id']
    });
    setTimeout(()=>{
      this.prevData=this.userservice.selectedUser(this.id);
      this.newForm.form.patchValue({
        username:this.prevData.username,
        email:this.prevData.email,
        location:this.prevData.location,
        profile:this.prevData.profile
      })
    }, )

  }

}
