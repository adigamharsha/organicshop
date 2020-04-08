import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase';
import { Observable } from 'rxjs';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { AppUser } from '../models/AppUser';

@Component({
  selector: 'bs-navbar',
  templateUrl: './bs-navbar.component.html',
  styleUrls: ['./bs-navbar.component.css']
})
export class BsNavbarComponent implements OnInit {
  auth: any;
  user$: Observable<firebase.User>;
  appUser: AppUser;

  constructor(private afauth: AuthService, private router: Router) {
    this.afauth.appUser$.subscribe(appUser => this.appUser = appUser);
  }

  ngOnInit() { }

  logout() {
    this.afauth.logout();
    this.router.navigate(['/login']);
  }

}
