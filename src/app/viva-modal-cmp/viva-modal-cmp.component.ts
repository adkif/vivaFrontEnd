import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-viva-modal-cmp',
  templateUrl: './viva-modal-cmp.component.html',
  styleUrls: ['./viva-modal-cmp.component.scss']
})
export class VivaModalCmpComponent implements OnInit {
  whantMenu = true;
  constructor() { }
  ngOnInit(): void {
  }
  closeMenu() {
    this.whantMenu = false;
  }
}
