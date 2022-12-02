
const menuClick = () => {
    const button: any = document.querySelector("#button"); 
  
    if ($(#button).css("visibility")) {
      button.style = "visibility: visible;";
     
    
    } else {
      setTimeout(() => {
        addEventListener("click", () => {        
          button.style = "visibility: invisible;";
          
        });
      }, 50);
    }
  };