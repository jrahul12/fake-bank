import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainDashboardComponent } from './shared/component/main-dashboard/main-dashboard.component';
import { LoginUserComponent } from './shared/component/login-user/login-user.component';
import { Login2MainComponent } from './shared/component/login2-main/login2-main.component';
import { UserDashboardComponent } from './shared/component/user-dashboard/user-dashboard.component';
import { AdminComponent } from './shared/component/admin/admin.component';
import { NavbarComponent } from './shared/component/navbar/navbar.component';
import { ForUserShowComponent } from './shared/component/for-user-show/for-user-show.component';

const routes: Routes = [
  {
    path: '',
    component: ForUserShowComponent
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
    path:'main',
    component:MainDashboardComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
