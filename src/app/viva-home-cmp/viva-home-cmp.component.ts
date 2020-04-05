import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-viva-home-cmp',
  templateUrl: './viva-home-cmp.component.html',
  styleUrls: ['./viva-home-cmp.component.scss']
})
export class VivaHomeCmpComponent implements OnInit {
  today: number = Date.now();
  casConfirmer = 65;
  death = 2;
  guerit = 6;

  public staitics = {
    confirmed : this.casConfirmer,
    death : this.death,
    recovered: this.guerit
  };
  constructor() { }

  ngOnInit(): void {
  }

}
