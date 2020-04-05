import { Component } from '@angular/core';
import {ForAuthService} from './services/for-auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent{
  public isAuth: boolean;
  public initUser = this.forAuthService.userInitialise();
  public today: number = Date.now();
  public pannel = false;
  public casConfirmer = 65;
  public death = 2;
  public guerit = 6;
constructor(private forAuthService: ForAuthService, private navG: Router) {
  this.isAuth = this.forAuthService.userIsAuth;
  console.log(this.isAuth);
}
  public staitics = {
    confirmed : this.casConfirmer,
    death : this.death,
    recovered: this.guerit
  };
  // ngO
  // lat: -1.6572382142948774, lng: 29.221804601783905
  latitude = -1.6572382142948774;
  longitude = 29.221804601783905;
  choseLocation = false;
  title = 'vivaRDC';
  whantMenu = false;

  onChoseLocation(event){
    console.log(event);
    this.latitude = event.coords.lat;
    this.longitude = event.coords.lng;
    this.choseLocation = true;
  }
  onSHowUpModal(){
    console.log('je suis ici');
  }
  onAskingForMenu(){
    if (this.whantMenu){
      this.whantMenu = false;
    }else{
      this.whantMenu = true;
    }
  }
  onInitialize(){
    return this.initUser[0];
  }
  onLookPannel() {
    if (this.pannel === true){
      this.pannel = false;
    }else if (this.pannel === false){
      this.pannel = true;
    }
  }
  onSignOut() {
    this.isAuth = this.forAuthService.userIsAuth;
    this.forAuthService.userSignOut();
  }
}
