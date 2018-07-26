import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FileService } from '../_services/file.service';
import { AuthService } from '../_services/auth.service';

import { SwPush,  } from '@angular/service-worker';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
  registerMode = false;
  values: any;
  sub: PushSubscription;

  readonly VAPID_PUBLIC_KEY = 'BCV-4grBIRW4uo5QJtCPWVjAtfca55K11U6BXpUUC8r__ckKJkNFRpv5596CjW7z4X54EB1s-BVB1XKe67HKavA';

  // public notificationPayload = {
  //   'notification': {
  //       'title': 'Angular News',
  //       'body': 'Newsletter Available!',
  //       'icon': 'assets/main-page-logo-small-hat.png',
  //       'vibrate': [100, 50, 100],
  //       'data': {
  //           'dateOfArrival': Date.now(),
  //           'primaryKey': 1
  //       },
  //       'actions': [{
  //           'action': 'explore',
  //           'title': 'Go to the site'
  //       }]
  //   }
  // };

  // tslint:disable-next-line:max-line-length
  // {"publicKey":"BCV-4grBIRW4uo5QJtCPWVjAtfca55K11U6BXpUUC8r__ckKJkNFRpv5596CjW7z4X54EB1s-BVB1XKe67HKavA",
  // "privateKey":"KqwIPq-u8Zl-ih5FSXJFUbG99kr-S3np-IjZR8aKO1E"}
  constructor(private _http: HttpClient,
    private _fileService: FileService,
    private _authService: AuthService,
    private swPush: SwPush) { }

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

  pushNotification() {
    this.swPush.requestSubscription({
      serverPublicKey: this.VAPID_PUBLIC_KEY
    }).then(sub => {
        this.sub = sub;
        console.log('Notification Subscription: ', sub);
    }).catch(err => console.error('Could not subscribe to notifications', err));
  }

  sendNotification() {}

}
