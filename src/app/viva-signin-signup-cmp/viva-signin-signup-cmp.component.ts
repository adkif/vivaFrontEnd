import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {ForAuthService} from '../services/for-auth.service';
import {Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {CitoyenClasse} from '../services/citoyen-classe';

@Component({
  selector: 'app-viva-signin-signup-cmp',
  templateUrl: './viva-signin-signup-cmp.component.html',
  styleUrls: ['./viva-signin-signup-cmp.component.scss']
})
export class VivaSigninSignupCmpComponent implements OnInit {
  isAuthentified: boolean;
  error = false;
  constructor(private forAuthService: ForAuthService, private route: Router, private httpClient: HttpClient) { }
  ngOnInit(): void {

  }
  // add new Citoyen or user
  onSignUpForUser(signUpForm: NgForm){
    // same like in signIn method
    this.httpClient.post('http://localhost:2020/signupuser', signUpForm.value).subscribe((getCitoyen: CitoyenClasse) => {
      if (getCitoyen !== null){
        this.forAuthService.userSignUp(getCitoyen);
        this.isAuthentified = this.forAuthService.userIsAuth;
        this.error = false;
        setTimeout(() => {
          // if well i redirect user to 'statistics page'
          this.route.navigate(['/case-statistics-route']);
        }, 200);
      }else{
        this.error = true;
      }
    });
  }
  // sign in of existing citoyen
  onSignInUser(signInForm: NgForm){
    // sending a pwd and email add or phone number to connect user
    // if user exist this will going to return an object Citoyen
    this.httpClient.post('http://localhost:2020/signinuser', 'david').subscribe((response: CitoyenClasse) => {
      if (response !== null){
        this.forAuthService.userSignIn(response);
        this.isAuthentified = this.forAuthService.userIsAuth;
        this.error = false;
        setTimeout(() => {
          // if well i redirect user to 'statistics page'
          this.route.navigate(['/case-statistics-route']);
        }, 200);
      }else{
        this.error = true;
      }
    });
  }
}
