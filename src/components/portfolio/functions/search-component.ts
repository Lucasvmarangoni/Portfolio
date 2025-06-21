export class Csearch {
  check: number;
  dabatase: string[];
  filter: string[];
  Id: HTMLElement;

  constructor(check: number, dabatase: string[], filter: string[], Id: HTMLElement){
    this.check = check;
    this.dabatase = dabatase;
    this.filter = filter;
    this.Id = Id;
  }

  execute() {
    const matches = this.filter.every(term =>
      this.dabatase.includes(term)
    );
    this.Id.style.display = matches ? "flex" : "none";
  }
}
