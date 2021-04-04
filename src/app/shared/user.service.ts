import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

//store username in loccal storage
setuser(username:string)
{

localStorage.setItem('user',username);

}
//to get usernsme in local storage
getuser()
{

return localStorage.getItem('user');
}
removeUser(){
  localStorage.removeItem('user');
}

//check user is stored inlocal storage or not

isloggedIn(){
 if(this.getuser()==null){
   return false;
 }
 else{
   return true;
 }

}

}
