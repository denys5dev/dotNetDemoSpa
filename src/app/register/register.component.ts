import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  model: any = {};
  @Input() valuesFormHome: any;
  @Output() cancelRegister = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  register() {
    console.log(this.model);
  }

  cancel() {
    this.cancelRegister.emit(false);
  }

}
