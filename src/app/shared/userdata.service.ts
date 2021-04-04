import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Userdata } from './userdata.model';

@Injectable({
  providedIn: 'root'
})
export class UserdataService {

  private userDetails:Userdata[]=[new Userdata("aman","aman@gmail.com","chandigarh","debugger")]
  constructor() { }
public updatedData=new Subject <Userdata[]> ();

addnewUser(user:Userdata)
{
this.userDetails.push(user);
this.updatedData.next(this.userDetails.slice());
}

displayUsers()
{
  return this.userDetails.slice()
}

deleteUser(id:number)
{
this.userDetails.splice(id,1);
this.updatedData.next(this.userDetails.slice());
}

selectedUser(index:number)
{
  return this .userDetails[index];
}

}
