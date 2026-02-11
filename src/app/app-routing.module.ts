import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainDashboardComponent } from './shared/component/main-dashboard/main-dashboard.component';
import { LoginUserComponent } from './shared/component/login-user/login-user.component';
import { Login2MainComponent } from './shared/component/login2-main/login2-main.component';
import { UserDashboardComponent } from './shared/component/user-dashboard/user-dashboard.component';
import { AdminComponent } from './shared/component/admin/admin.component';
import { NavbarComponent } from './shared/component/navbar/navbar.component';
import { ForUserShowComponent } from './shared/component/for-user-show/for-user-show.component';
import { Navbar2Component } from './shared/component/navbar2/navbar2.component';
import { CurrentDashboardComponent } from './shared/crurrent-component/current-dashboard/current-dashboard.component';
import { CurrentMainComponent } from './shared/crurrent-component/current-main/current-main.component';
import { SavingDashboardComponent } from './shared/saving/saving-dashboard/saving-dashboard.component';
import { SavingThankYouComponent } from './shared/saving/saving-thank-you/saving-thank-you.component';
import { DonationComponent } from './shared/component-2/donation/donation.component';
import { ShowDonationComponent } from './shared/component-2/show-donation/show-donation.component';
import { ServicesComponent } from './shared/component-2/services/services.component';
import { DebitCardComponent } from './shared/component-2/debit-card/debit-card.component';

const routes: Routes = [
  {
    path: '',
    component: Navbar2Component
  },
  {
    path: 'user',
    component: UserDashboardComponent
  },
  {
    path: 'login',
    component: LoginUserComponent
  },
  {
    path: 'login-main',
    component: Login2MainComponent
  },
  {
    path: 'admin',
    component: AdminComponent
  },
  {
    path: 'main',
    component: MainDashboardComponent
  },
  {
    path: 'current',
    component: CurrentDashboardComponent
  },
  {
    path: 'main-current',
    component: CurrentMainComponent
  },
  {
    path: 'saving',
    component: SavingDashboardComponent
  },
  {
    path: 'saving-thank',
    component: SavingThankYouComponent
  },
  {
    path: 'donation',
    component: DonationComponent
  },
  {
    path: 'show-donation',
    component: ShowDonationComponent
  },
  {
    path: 'services',
    component: ServicesComponent
  },
  {
    path: 'debit',
    component: DebitCardComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
