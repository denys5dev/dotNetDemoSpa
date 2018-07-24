import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { AlertifyService } from '../_services/alertify.service';
import { Login } from '../models/Login';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  public model: Login;

  constructor(private _authService: AuthService, private _alertify: AlertifyService) { }

  ngOnInit() {
    this.model = {
      username: '',
      password: '' };
  }

  login() {
    this._authService.login(this.model).subscribe(
      data => {
          this._alertify.success('Logged in successfuly');
      }, error => {
        this._alertify.error(error);
      });
  }

  logout() {
    this._authService.userToken = null;
    localStorage.removeItem('token');
    this._alertify.message('Logged out');
  }

  loggedIn() {
    return this._authService.loggedIn();
  }
}
