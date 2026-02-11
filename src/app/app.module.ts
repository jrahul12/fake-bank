import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HTTP_INTERCEPTORS, HttpClientModule, HttpClient } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

/* --------- MATERIAL MODULES --------- */
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { MatIconModule } from "@angular/material/icon";
import { MatDialogModule } from "@angular/material/dialog";
import { MatDividerModule } from "@angular/material/divider";
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { MatProgressBarModule } from "@angular/material/progress-bar";
import { MatMenuModule } from "@angular/material/menu";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";

/* --------- COMPONENTS --------- */
import { UserDashboardComponent } from './shared/component/user-dashboard/user-dashboard.component';
import { FilterPipe } from './shared/pipe/filter.pipe';
import { LoginUserComponent } from './shared/component/login-user/login-user.component';
import { MainDashboardComponent } from './shared/component/main-dashboard/main-dashboard.component';
import { NavbarComponent } from './shared/component/navbar/navbar.component';
import { Login2MainComponent } from './shared/component/login2-main/login2-main.component';
import { AdminComponent } from './shared/component/admin/admin.component';
import { ForUserShowComponent } from './shared/component/for-user-show/for-user-show.component';
import { ConfirmComponent } from './shared/component/confirm/confirm.component';
import { Navbar2Component } from './shared/component/navbar2/navbar2.component';
import { CurrentDashboardComponent } from './shared/crurrent-component/current-dashboard/current-dashboard.component';
import { CurrentMainComponent } from './shared/crurrent-component/current-main/current-main.component';
import { SavingDashboardComponent } from './shared/saving/saving-dashboard/saving-dashboard.component';
import { SavingThankYouComponent } from './shared/saving/saving-thank-you/saving-thank-you.component';
import { ShowUsersComponent } from './shared/component-2/show-users/show-users.component';
import { DonationComponent } from './shared/component-2/donation/donation.component';
import { ShowDonationComponent } from './shared/component-2/show-donation/show-donation.component';
import { ServicesComponent } from './shared/component-2/services/services.component';
import { DebitCardComponent } from './shared/component-2/debit-card/debit-card.component';

/* --------- INTERCEPTOR --------- */
import { AuthInterceptor } from './shared/auth.interceptor';

/* --------- NGX TRANSLATE --------- */
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

// ===== IMPORTANT: Loader function for ngx-translate =====
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

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
    ConfirmComponent,
    Navbar2Component,
    CurrentDashboardComponent,
    CurrentMainComponent,
    SavingDashboardComponent,
    SavingThankYouComponent,
    ShowUsersComponent,
    DonationComponent,
    ShowDonationComponent,
    ServicesComponent,
    DebitCardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,

    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatDialogModule,
    MatDividerModule,
    MatSnackBarModule,
    MatProgressBarModule,
    MatMenuModule,
    MatProgressSpinnerModule,

    // ===== ADD THIS FOR TRANSLATION =====
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
