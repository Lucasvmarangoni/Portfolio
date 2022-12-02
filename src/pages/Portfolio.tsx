import { Esports } from "../components/portfolio/Esports";
import { Lab01 } from "../components/portfolio/Lab01";

export const Portfolio = () => {
  return (
    <div
      className="mt-10 w-[1030px] py-20 bg-BGH m-auto flex justify-center flex-wrap 
       n0:w-[1030px]   
       n1:w-[830px] n1:gap-0   
       n2:w-[781px] n2:mt-10 n2:gap-14
       n3:w-[576px] n3:mt-6 n3:gap-14  
       n4:w-[530px] n4:mt-6 n4:gap-14
       n5:w-[430px] n5:mt-6 n5:gap-14
       n6:w-[350px] n6:mt-4 n6:gap-14
       n7:w-[240px] n7:mt-4 n7:gap-10       
    "
    >
      <Esports />
      <Lab01 />
    </div>
  );
};
