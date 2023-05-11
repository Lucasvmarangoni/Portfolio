export function hiddenDisplay() {
  const Tesports: any = document.querySelector("#Tesports");
  const Tport: any = document.querySelector("#Tport");
  const TnotServ: any = document.querySelector("#TnotServ");
  const TtaskList: any = document.querySelector("#TtaskList");
  const TbestSurf: any = document.querySelector("#TbestSurf");
  const Tpaiva: any = document.querySelector("#Tpaiva");

  const THiddenCourse: any = document.querySelector(".THiddenCourse")
  const THiddenPersonal: any = document.querySelector(".THiddenPersonal")
  const THiddenGroup: any = document.querySelector(".THiddenGroup")


  let nonePersonalCheck: number = 0;
  let noneGroupCheck: number = 0;
  let noneCourseCheck: number = 0;

  Tesports.style.display === "none" ? noneCourseCheck += 2 : noneCourseCheck -= 2;
  TnotServ.style.display === "none" ? noneCourseCheck += 2 : noneCourseCheck -= 2;
  TbestSurf.style.display === "none" ? noneCourseCheck += 2 : noneCourseCheck -= 2;

  if (noneCourseCheck === 2) {
    THiddenCourse.style.display = "none"
  }
  if (noneCourseCheck === 0 || noneCourseCheck !== 2)
    THiddenCourse.style.display = "flex"


  Tpaiva.style.display === "none" ? noneGroupCheck += 2 : noneGroupCheck -= 2;

  if (noneGroupCheck === 2) {
    THiddenGroup.style.display = "none"
  }
  if (noneGroupCheck === 0 || noneGroupCheck !== 2) {
    THiddenGroup.style.display = "flex"
  }

  Tport.style.display === "none" ? nonePersonalCheck += 2 : nonePersonalCheck -= 2;
  TtaskList.style.display === "none" ? nonePersonalCheck += 2 : nonePersonalCheck -= 2;


  if (nonePersonalCheck === 2) {
    THiddenPersonal.style.display = "none"
  }
  if (nonePersonalCheck === 0 || nonePersonalCheck !== 2) {
    THiddenPersonal.style.display = "flex"
  }

}