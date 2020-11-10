import { Router } from '@angular/router';
import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  message: string;

  constructor(
    public authService: AuthService,
    public router: Router,
  ) { }

  ngOnInit(): void {
  }

  setMessage(): void {
    this.message = 'Logged' + (this.authService.isLoggedIn ? 'in' : 'out');
  }

  login(): void {
    this.message = 'Trying to log in ...';

    this.authService.login().subscribe(() => {
      if (this.authService.isLoggedIn){
        const redirectUrl = '/admin';

        this.router.navigate([redirectUrl]);
      }
    });
  }

  logout(): void {
    this.authService.logout();
    this.setMessage();
  }

}
