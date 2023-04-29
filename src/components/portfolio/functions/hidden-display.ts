export function hiddenDisplay(){
    const Tesports: any = document.querySelector("#Tesports");
    const Tport: any = document.querySelector("#Tport");
    const TnotServ: any = document.querySelector("#TnotServ");
    const TtaskList: any = document.querySelector("#TtaskList");
    const TbestSurfing: any = document.querySelector("#TbestSurfing");

    const THiddenCurse: any = document.querySelector(".THiddenCurse")
    const THiddenPersonal: any = document.querySelector(".THiddenPersonal")
  
  
    let nonePersonalCheck: number = 0;
    let noneCurseCheck: number = 0;
  
    Tesports.style.display == "none" ? noneCurseCheck += 2 : noneCurseCheck -= 2;
    TnotServ.style.display == "none" ? noneCurseCheck += 2 : noneCurseCheck -= 2;
    TbestSurfing.style.display == "none" ? noneCurseCheck += 2 : noneCurseCheck -= 2;
  
    if (noneCurseCheck == 2) {
      THiddenCurse.style.display = "none"
    }
    if (noneCurseCheck == 0 || noneCurseCheck != 2)
      THiddenCurse.style.display = "flex"
  
    Tport.style.display == "none" ? nonePersonalCheck += 2 : nonePersonalCheck -= 2;
    TtaskList.style.display == "none" ? nonePersonalCheck += 2 : nonePersonalCheck -= 2;
  
  
    if (nonePersonalCheck == 2) {
      THiddenPersonal.style.display = "none"
    }
    if (nonePersonalCheck == 0 || nonePersonalCheck != 2) {
      THiddenPersonal.style.display = "flex"
    }
  
}