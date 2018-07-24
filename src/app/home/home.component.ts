import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FileService } from '../_services/file.service';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
  registerMode = false;
  values: any;

  constructor(private _http: HttpClient, private _fileService: FileService, private _authService: AuthService) { }

  ngOnInit() {}

  registerToggle() {
    this.registerMode = true;
  }

  cancelRegisterMode(registerMode: boolean) {
    this.registerMode = registerMode;
  }

  generatePdf() {
    this._fileService.generatePdf();
  }

  loggedIn() {
    return this._authService.loggedIn();
  }

}
