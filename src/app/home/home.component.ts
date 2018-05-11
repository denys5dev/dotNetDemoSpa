import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FileService } from '../_services/file.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  registerMode: boolean = false;
  values: any;

  constructor(private _http: HttpClient, private _fileService: FileService) { }

  ngOnInit() {
   
  }

  registerToggle() {
    this.registerMode = true;
  }

  cancelRegisterMode(registerMode: boolean) {
    this.registerMode = registerMode;
  }

  generatePdf() {
    window.location.assign("http://localhost:5000/api/file");
  }

}
