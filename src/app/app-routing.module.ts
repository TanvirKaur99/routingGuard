import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EdituserComponent } from './edituser/edituser.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { ProfileComponent } from './profile/profile.component';
import { AuthGuard } from './shared/auth.guard';
import { UserService } from './shared/user.service';
import { UserComponent } from './user/user.component';

const routes: Routes = [
{
  path:'',
  component:LoginComponent
},
// {
//   path:'post'
//   component:PostComponent
// }
{
  path:'profile',
  component:ProfileComponent,
  canActivate:[AuthGuard]
},
{
  path:'logout',
  component:LogoutComponent
},
{
  path:'user',
  component:UserComponent,
  canActivate:[AuthGuard]
},
{
  path:'edituser',
  component:EdituserComponent,

}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
