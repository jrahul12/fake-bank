import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from "@angular/common/http";
import { UserDashboardComponent } from './shared/component/user-dashboard/user-dashboard.component';
import { FilterPipe } from './shared/pipe/filter.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginUserComponent } from './shared/component/login-user/login-user.component';
import { MainDashboardComponent } from './shared/component/main-dashboard/main-dashboard.component';
import { NavbarComponent } from './shared/component/navbar/navbar.component';
import { Login2MainComponent } from './shared/component/login2-main/login2-main.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { MatIconModule } from "@angular/material/icon";
import { MatDialogModule } from "@angular/material/dialog";
import { MatDividerModule } from "@angular/material/divider";
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { MatProgressBarModule } from "@angular/material/progress-bar";
import { MatMenuModule } from "@angular/material/menu";
import { AdminComponent } from './shared/component/admin/admin.component';
import { ForUserShowComponent } from './shared/component/for-user-show/for-user-show.component';
import { ConfirmComponent } from './shared/component/confirm/confirm.component';

@NgModule({
  declarations: [
    AppComponent,
    UserDashboardComponent,
    FilterPipe,
    LoginUserComponent,
    MainDashboardComponent,
    NavbarComponent,
    Login2MainComponent,
    AdminComponent,
    ForUserShowComponent,
    ConfirmComponent
  ],
  imports: [
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatDialogModule,
    MatDividerModule,
    MatSnackBarModule,
    MatProgressBarModule,
    MatMenuModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
