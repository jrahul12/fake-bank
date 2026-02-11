import { Component } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent {

  constructor(
    private loginService: LoginService,
    private router: Router
  ) { }

  // loginAdmin(data: any) {

  //   this.loginService.login({
  //     email: data.email,
  //     password: data.password
  //   }).subscribe({
  //     next: (res: any) => {

  //       localStorage.setItem('userRole', res.userRole);

  //       Swal.fire({
  //         title: 'Success!',
  //         text: 'Admin Login Successful',
  //         icon: 'success'
  //       }).then(() => {

  //         if (res.userRole === 'ADMIN') {
  //           this.router.navigate(['/admin-dashboard']);
  //         } else {
  //           Swal.fire('Access Denied', 'You are not admin', 'error');
  //         }

  //       });
  //     },
  //     error: () => {
  //       Swal.fire('Error', 'Login Failed', 'error');
  //     }
  //   });
  // }
}
