import {CitoyenClasse} from './citoyen-classe';

export class ForAuthService {
  constructor() {
  }
  public defaultUsers = [
    {
      index: 1,
      name: 'david',
      postNom: 'maene',
      number: '+243970284772',
      email: 'davidmened@gmail.com',
      password: 'davidmaene.me'
    },
    {
      index: 2,
      name: 'jean',
      postNom: 'zelote',
      number: '+243970284772',
      email: 'jean.z@gmail.com',
      password: 'jeanze.me'
    },
    {
      index: 3,
      name: 'styve',
      postNom: 'bikanaba',
      number: '+243970284772',
      email: 'vieu.mbayo@gmail.com',
      password: 'styvemb.me'
    }
  ];
  userIsAuth = false;
  currentSession: CitoyenClasse = new CitoyenClasse();
  userInitialise(){
    return [this.currentSession.uNom, this.currentSession.uPostnom];
  }
  userSignUp(citoyen: CitoyenClasse){
    this.currentSession = citoyen;
    this.userIsAuth = true;
  }
  userSignIn(citoyen: CitoyenClasse){
    this.currentSession = citoyen;
    this.userIsAuth = true;
    // let user;
    // for (user of this.defaultUsers) {
    //   if (user.email === emOrPhone || user.number){
    //     if (user.password === pwd){
    //      // this.currentSession = new CitoyenClasse();
    //      this.currentSession.uNom = user.name;
    //      this.currentSession.uPostnom = user.postNom;
    //      this.currentSession.uEmail = user.email;
    //      this.userIsAuth = true;
    //      console.log(this.userIsAuth);
    //      return true;
    //     }else{
    //       return false;
    //     }
    //   }else {
    //     return false;
    //   }
    // }
  }
//   new Promise(
// (resolve, reject) => {
//   setTimeout(() => {
//   this.userIsAuth = false;
//   resolve(true);
// }, 100);
// }
// );
  userSignOut(){
    this.userIsAuth = false;
    return true;
  }
}
