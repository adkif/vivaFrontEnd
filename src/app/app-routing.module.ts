import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {VivaHomeCmpComponent} from './viva-home-cmp/viva-home-cmp.component';
import {VivaBelCaseCmpComponent} from './viva-bel-case-cmp/viva-bel-case-cmp.component';
import {VivaSigninSignupCmpComponent} from './viva-signin-signup-cmp/viva-signin-signup-cmp.component';
import {VivaStaticsCmpComponent} from './viva-statics-cmp/viva-statics-cmp.component';
import {VivaForumCmpComponent} from './viva-forum-cmp/viva-forum-cmp.component';
import {VivaTestingCmpComponent} from './viva-testing-cmp/viva-testing-cmp.component';
const routes: Routes = [
  {path: '', component: VivaHomeCmpComponent },
  {path: 'case-home', component: VivaHomeCmpComponent},
  {path: 'case-of-bel-route', component: VivaBelCaseCmpComponent},
  {path: 'case-cnx-route', component: VivaSigninSignupCmpComponent},
  {path: 'case-statistics-route', component: VivaStaticsCmpComponent},
  {path: 'case-forum-route', component: VivaForumCmpComponent},
  {path: 'case-testing-route', component: VivaTestingCmpComponent},
  {path: '**', component: VivaHomeCmpComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
