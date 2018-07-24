import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { AlertifyService } from '../_services/alertify.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  model: any = {};
  @Output() cancelRegister = new EventEmitter();
  constructor(private _authService: AuthService, private _alertify: AlertifyService) { }

  ngOnInit() {
  }

  register() {
    this._authService.register(this.model).subscribe(res => {
        this._alertify.success('registered successfully');
    }, error => {
        this._alertify.error(error);
    });
  }

  cancel() {
    this.cancelRegister.emit(false);
  }

}
