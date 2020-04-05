import {Injectable} from '@angular/core';

@Injectable()
export class CitoyenClasse {
  public uNom: string;
  public uPostnom: string;
  // public uPrenom: string;
  // public uPhone: string;
  public uEmail: string;
  // public uGenre: any;
  public uAdd: CitoyenClasse[];
  constructor() {
    // this.uNom = nm;
    // this.uPostnom = pstnm;
    // this.uEmail = em;
  }
}
