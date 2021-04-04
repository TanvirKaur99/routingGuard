import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSelectModule} from '@angular/material/select';
import { FormsModule }   from '@angular/forms';
import {MatExpansionModule} from '@angular/material/expansion';
import { PostcreateComponent } from './postcreate/postcreate.component';
import { PostlistComponent } from './postlist/postlist.component';
import { ProfileComponent } from './profile/profile.component';
import { UserComponent } from './user/user.component';
import {MatIconModule} from '@angular/material/icon';
import { EdituserComponent } from './edituser/edituser.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LogoutComponent,
    PostcreateComponent,
    PostlistComponent,
    ProfileComponent,
    UserComponent,
    EdituserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatToolbarModule,
    MatSelectModule,
    FormsModule,
    MatExpansionModule,
    MatIconModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
