export class Csearch {
    check: number;
    dabatase: string[];
    filter: string[];
    Id: any;


    constructor(check: number, dabatase: string[], filte: string[], Id: any){
        this.check = check;
        this.dabatase = dabatase;
        this.filter = filte;
        this.Id = Id;
    }

    execute(){
        for (let i = 0; i < this.dabatase.length; i++) {
            this.dabatase.includes(this.filter[i])
              ? ++this.check
              : (this.check += 0);
          }
          this.check >= this.filter.length
            ? (this.Id.style = "display: flex")
            : (this.Id.style = "display: none");  
    }
}