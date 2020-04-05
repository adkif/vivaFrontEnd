import { Component, OnInit } from '@angular/core';
import {VivaMapCmpComponent} from '../viva-map-cmp/viva-map-cmp.component';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-viva-bel-case-cmp',
  templateUrl: './viva-bel-case-cmp.component.html',
  styleUrls: ['./viva-bel-case-cmp.component.scss']
})
export class VivaBelCaseCmpComponent implements OnInit {
  public showUpMap = false;
  public position;
  constructor(private http: HttpClient) { }
  ngOnInit(): void {
  }
  onBelling(): void {
   const position = new VivaMapCmpComponent().getCustomerCurrentPosition();
   if (this.position !== undefined){
     this.http.post('http://localhost:2020/annoncerUnCas/', position).subscribe(value => (status: any) => {
       console.log(this.position + status);
       this.showUpMap = true;
     });
    }else{
      alert('Impossible d\'acceder à votre position\nVous ne pouvez pas lancer une alerte \nactiver d\'abord votre GPS puis continuer');
    }
   this.showUpMap = true;
  }
}
