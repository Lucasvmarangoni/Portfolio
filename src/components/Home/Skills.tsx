import { Database } from "../Home/skills/Database";
import { Git } from "../Home/skills/Git";
import { Javascript } from "../Home/skills/Javascript";
import { Python } from "../Home/skills/Python";
import { Security } from "../Home/skills/Security";

export function Skills() {
  return (
    <div className="h-[75px] bg-BGH m-auto mt-10
       n0:w-[1030px]   
       n1:w-[830px]    
       n2:w-[781px] n2:mt-10
       n3:w-[576px] n3:mt-6
       n4:w-[530px] n4:mt-6
       n5:w-[430px] n5:mt-6
       n6:w-[350px] n6:mt-4
       n7:w-[240px] n7:mt-4
       ">
      <div className="h-[75px] flex items-center justify-center
      n0:w-[1030px]   
      n1:w-[830px]    
      n2:w-[781px] 
      n3:w-[576px] 
      n4:w-[530px] 
      n5:w-[430px]
      n6:w-[350px]
      n7:w-[240px]
      ">
      

        <div className="box-border flex gap-10
        n6:gap-10 n6:p-0
        n7:gap-4 n7:p-2">
          <Python />
          <Javascript />
          <Database />
          <Git />
          <Security />         
        </div>
      </div>
    </div>
  );
}
