export class CitoyenAddresseClasse {
  public cProvince;
  public cVille;
  constructor(public prv: string, public vll: string) {
    this.cProvince = prv;
    this.cVille = vll;
  }
}
