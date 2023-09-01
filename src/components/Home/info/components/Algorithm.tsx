import { Link } from "react-router-dom";

export const Algorithm = ({ name, hover, link }) => {
    return (
        <div
            className="flex justify-center  brightness-150     
    
    "
        >
            <button
                className={`
        text-3xl font-medium text-T1
        border-[#3b27535b] border-b-[3px] 
         hover:opacity-80 brightness-150
        setinha  ${hover}         
        n3:w-48 n3:h-16 n3:text-3xl         
        n4:w-36 n4:h-14 n4:text-2xl 
        n5:w-36 n5:h-14 n5:text-2xl 
        n6:w-36 n6:h-14 n6:text-xl 
        n7:w-36 n7:h-14 n7:text-xl      
        ` }
            >
                <Link to={link} onClick={() => (document.querySelector('#topo') as any).scrollIntoView(0)}
                    target="_blank">
                    <h1 className="" id="topo">{name}</h1>
                </Link>
            </button>
        </div>
    );
};
