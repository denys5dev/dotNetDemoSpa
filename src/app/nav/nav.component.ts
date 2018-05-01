import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  model: any = {};

  constructor(private _authService: AuthService) { }

  ngOnInit() {
  }

  login() {
    this._authService.login(this.model).subscribe(data => {
      console.log(data)
    }, error => {
      console.log('error');
    });
  }

  logout() {
    this._authService.userToken = null;
    localStorage.removeItem('token');
  }

  loggedIn() {
    const token = localStorage.getItem('token');
    return !!token;
  }

}
