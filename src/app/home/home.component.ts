import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  registerMode: boolean = false;
  values: any;

  constructor(private _http: Http) { }

  ngOnInit() {
    this.getValues();
  }

  registerToggle() {
    this.registerMode = true;
  }

  getValues() {
    this._http.get('http://localhost:5000/api/values').subscribe(res => {
      this.values = res.json();
    })
  }

  cancelRegisterMode(registerMode: boolean) {
    this.registerMode = registerMode;
  }

}