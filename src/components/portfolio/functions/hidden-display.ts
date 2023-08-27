function hiddenDisplay() {
  const Tesports = document.querySelector("#Tesports") as HTMLElement | any;
  const Tport = document.querySelector("#Tport") as HTMLElement | any;
  const TnotServ = document.querySelector("#TnotServ") as HTMLElement | any;
  const TtaskList = document.querySelector("#TtaskList") as HTMLElement | any;
  const TbestSurf = document.querySelector("#TbestSurf") as HTMLElement | any;
  const Tpaiva = document.querySelector("#Tpaiva") as HTMLElement | any;
  const TcurrencyConverter = document.querySelector("#TcurrencyConverter") as HTMLElement | any;

  const THiddenCourse = document.querySelector(".THiddenCourse") as HTMLElement | any;
  const THiddenPersonal = document.querySelector(".THiddenPersonal") as HTMLElement | any;
  const THiddenGroup = document.querySelector(".THiddenGroup") as HTMLElement | any;


  const hidden = () => {
    let nonePersonalCheck: number = 0;
    let noneGroupCheck: number = 0;
    let noneCourseCheck: number = 0;

    const windowWidth = window.innerWidth <= 949

    Tesports.style.display === "none" ? noneCourseCheck += 2 : noneCourseCheck -= 2
    TnotServ.style.display === "none" ? noneCourseCheck += 2 : noneCourseCheck -= 2;
    TbestSurf.style.display === "none" ? noneCourseCheck += 2 : noneCourseCheck -= 2;

    const numberOfCourseProjects = 3;

    if (noneCourseCheck !== -2 * numberOfCourseProjects || windowWidth) {
      THiddenCourse.style.display = "none"
    }

    if (noneCourseCheck === 0 || noneCourseCheck === -2 * numberOfCourseProjects && !windowWidth) {
      THiddenCourse.style.display = "flex"
    }

    Tpaiva.style.display === "none" ? noneGroupCheck += 2 : noneGroupCheck -= 2;

    if (noneGroupCheck === 2 || windowWidth) {
      THiddenGroup.style.display = "none"
    }
    if (noneGroupCheck === 0 || noneGroupCheck !== 2 && !windowWidth) {
      THiddenGroup.style.display = "flex"
    }

    Tport.style.display === "none" ? nonePersonalCheck += 2 : nonePersonalCheck -= 2;
    TtaskList.style.display === "none" ? nonePersonalCheck += 2 : nonePersonalCheck -= 2;
    TcurrencyConverter.style.display === "none" ? nonePersonalCheck += 2 : nonePersonalCheck -= 2;

    const numberOfPersonalProjects = 3;

    if (nonePersonalCheck !== -2 * numberOfPersonalProjects || windowWidth) {
      THiddenPersonal.style.display = "none"
    }

    if (nonePersonalCheck === 0 || nonePersonalCheck === -2 * numberOfPersonalProjects && !windowWidth) {
      THiddenPersonal.style.display = "flex"
    }
  }
  hidden()

  window.addEventListener("resize", () => {
    hidden()
  })
}