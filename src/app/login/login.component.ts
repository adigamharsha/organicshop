import { Component, OnInit } from '@angular/core';
// tslint:disable-next-line: import-spacing
import * as firebase from 'firebase';
import { AngularFireAuth } from '@angular/fire/auth';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private auths: AuthService) { }

  ngOnInit() {
  }

  login() {
    this.auths.login();
  }

}
