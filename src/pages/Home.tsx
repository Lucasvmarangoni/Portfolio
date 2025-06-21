import { Capa } from "../components/Home/Capa";
import { Motion, MotionFirst } from "../components/functions/Motion";
import { Info } from "../components/Home/Info-tec";
import { NavLink } from 'react-router-dom';
import { Me } from "./util/me";
import { pageWidth } from "./util/page-width";
import CurriculumButton from "./resume";

export const Home = () => {

    return (


        <div className={"mt-10  m-auto" + pageWidth}>
            <div className={"m-auto py-16 pr-6 gap-4 bg-BGH " + pageWidth}>

                <div className={"flex n2:flex-nowrap n7:flex-wrap justify-center items-center m-auto pl-10 n2:px-20 n7:px-16 gap-4 n3:flex" + pageWidth}>
                    <img
                        className="rounded-[3em] 
                     brightness-[1] 
                     contrast-[1.15] 
                     saturate-[0.9]
                     n0:w-48
                     n1:w-40    
                     n2:w-40
                     n3:w-40
                     n4:w-48
                     n5:w-44
                     n6:w-44
                     n7:w-40"
                        src="foto1.png"
                        alt="Foto do perfil"
                    />


                    <div className={"text-center flex flex-col "} >

                        {Motion(0.7, 0.3,
                            <h1
                                // brightness-[2.4] 
                                className="text-T2 font-semibold hover:brightness-200 
                n0:text-3xl n0:text-left
                n1:text-3xl n1:text-left
                n2:text-3xl n2:text-left
                n3:text-3xl n7:text-center
                n4:text-2xl 
                n5:text-2xl 
                n6:text-2xl 
                n7:text-2xl"
                            >
                                Lucas Vazzoller Marangoni
                            </h1>
                        )}
                        {Motion(0.7, 0.4,
                            <p className="p mb-1 text-justify text-lg text-T1 n3:text-justify n2:text-left n7:text-center 

                  ">
                                I’m a Golang backend software engineer and currently specializing in offensive cybersecurity.
                                Below, you can explore my hands-on experience in both software engineering and Offensive security.
                            </p>
                        )}


                    </div>
                </div>

                <div
                    className={"flex flex-wrap justify-center gap-3 n2:mt-0 n7:mt-5"}
                >
                    {Motion(0.6, 0.8,
                        <NavLink
                            id="button-icon"
                            className="buttons brightness-[1.3]
                                "
                            to="https://www.linkedin.com/in/lucasvmarangoni/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >

                            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M3.00133 4.38388C3.00133 5.1529 3.53571 5.76723 4.36097 5.76723H4.37946C5.23727 5.76723 5.77204 5.1529 5.77204 4.38388C5.75356 3.59638 5.23727 3.00094 4.39352 3.00094C3.54977 3.00094 3.00133 3.6008 3.00133 4.38388ZM5.57959 6.98625H3.00093V15.0039H5.57959V6.98625ZM9.70552 6.98625V8.10201C10.0808 7.56763 10.667 6.79862 12.0311 6.79862C13.7238 6.79862 15.0043 7.91438 15.0043 10.3199C15.0043 11.5094 14.3459 12.2797 13.4021 12.2797C12.4726 12.2797 12.0847 11.8037 11.9773 11.2529C11.9527 10.9665 11.948 10.6793 11.948 10.4372V9.80397C11.9801 9.33429 12.4042 8.85214 13.117 8.85214C14.0499 8.85214 14.4252 9.56973 14.4252 10.62V15.0039H12.0039V10.4372C12.0039 9.33429 11.5844 8.85214 10.6705 8.85214C9.80661 8.85214 9.33195 9.56973 9.33195 10.62V15.0039H7.12686V6.98625H9.70552Z"
                                    fill="#ffffffaf" />
                            </svg>

                            <p className="">Linkedin</p>
                        </NavLink>
                    )}

                    {Motion(0.6, 0.9,
                        <NavLink
                            id="button-icon"
                            className="buttons brightness-[1.3]
                                "
                            to="https://github.com/Lucasvmarangoni"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <svg version="1.0" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet">
                                <path className="github-path" d="M9.05044 2.00043C5.15551 2.00043 2 5.10682 2 8.93529C2 12.0009 4.01995 14.5993 6.81942 15.516C7.17326 15.5815 7.30105 15.3669 7.30105 15.1814C7.30105 15.0167 7.29708 14.5811 7.29444 14.0029C5.33221 14.4208 4.91888 13.0706 4.91888 13.0706C4.59765 12.2714 4.13408 12.0568 4.13408 12.0568C3.49602 11.6282 4.18476 11.6373 4.18476 11.6373C4.89156 11.6845 5.26347 12.3503 5.26347 12.3503C5.89228 13.4113 6.91328 13.1044 7.31735 12.9259C7.37905 12.479 7.5628 12.1717 7.76285 12.0005C6.19766 11.8267 4.55182 11.2307 4.55182 8.57338C4.55182 7.81445 4.82502 7.19638 5.27669 6.71094C5.1987 6.53713 4.95986 5.83064 5.33882 4.87537C5.33882 4.87537 5.92886 4.69029 7.2777 5.58662C7.84217 5.43276 8.44146 5.35604 9.04031 5.35214C9.63959 5.35604 10.2384 5.43319 10.8029 5.58662C12.1438 4.69029 12.7334 4.87537 12.7334 4.87537C13.1119 5.83064 12.8731 6.5367 12.8044 6.71094C13.2516 7.19638 13.5248 7.81488 13.5248 8.57338C13.5248 11.2368 11.8768 11.8241 10.3098 11.9936C10.5548 12.2012 10.7844 12.6281 10.7844 13.2761C10.7844 14.2036 10.7756 14.9508 10.7756 15.1767C10.7756 15.357 10.899 15.5737 11.2621 15.5039C14.0823 14.5967 16.1 11.9962 16.1 8.93486C16.1 5.10638 12.9445 2 9.04956 2L9.05044 2.00043Z"
                                    fill="#ffffffaf" />
                            </svg>
                            <p className="">Github</p>
                        </NavLink>
                    )}

                    {Motion(0.6, 1.0,


                        < CurriculumButton />

                    )}
                </div>
            </div>


            <PortfolioButtons />
        </div>
    );
};

const PortfolioButtons: React.FC = () => {
    return (
        <div className={"flex items-center justify-center mt-6"}>
            <div className={"flex n3:flex-nowrap n7:flex-wrap gap-6 mx-auto w-full"}>

                <NavLink
                    to="/offsec"
                    className={"group w-full aspect-square relative bg-BGH border-2 border-[#375949] rounded-lg overflow-hidden transition-all duration-500 hover:scale-105 hover:shadow-lg hover:shadow-[#375949]/20 block active:scale-95"}
                >
                    <div className="absolute inset-0 bg-gradient-to-br from-[#375949]/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    <div className="absolute inset-0 rounded-lg border-2 border-[#375949] opacity-0 group-hover:opacity-100 group-hover:animate-pulse transition-opacity duration-300" />

                    <div className="absolute inset-0 pointer-events-none">
                        <div className="absolute top-2 left-2 w-1 h-1 bg-[#375949] rounded-full opacity-0 group-active:opacity-100 group-active:animate-ping" />
                        <div className="absolute top-4 right-3 w-1 h-1 bg-[#375949] rounded-full opacity-0 group-active:opacity-100 group-active:animate-ping" style={{ animationDelay: '0.1s' }} />
                        <div className="absolute bottom-3 left-4 w-1 h-1 bg-[#375949] rounded-full opacity-0 group-active:opacity-100 group-active:animate-ping" style={{ animationDelay: '0.2s' }} />
                    </div>

                    <div className="relative z-10 h-full flex flex-col items-center justify-center p-6 transition-all duration-300 text-[#375949]">
                        <div className="mb-4 transform transition-all duration-300 group-hover:brightness-200 group-hover:scale-110">
                            <HackerIcon />
                        </div>
                        <h3 className="text-2xl font-bold mb-2 text-center transition-all duration-300 group-hover:brightness-200">
                            Offensive Security
                        </h3>
                    </div>
                </NavLink>


                <NavLink
                    to="/projetos"
                    className="group relative w-full sm:basis-1/2  aspect-square  bg-BGH border-2 border-[#375949] rounded-lg overflow-hidden transition-all duration-500 hover:scale-105 hover:shadow-lg hover:shadow-[#553877]/20 block active:scale-95"
                >
                    <div className="absolute inset-0 bg-gradient-to-br from-[#375949]/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    <div className="absolute inset-0 rounded-lg border-2 border-[#375949] opacity-0 group-hover:opacity-100 group-hover:animate-pulse transition-opacity duration-300" />

                    <div className="absolute inset-0 pointer-events-none">
                        <div className="absolute top-2 right-2 w-1 h-1 bg-[#375949] rounded-full opacity-0 group-active:opacity-100 group-active:animate-ping" />
                        <div className="absolute top-4 left-3 w-1 h-1 bg-[#375949] rounded-full opacity-0 group-active:opacity-100 group-active:animate-ping" style={{ animationDelay: '0.1s' }} />
                        <div className="absolute bottom-3 right-4 w-1 h-1 bg-[#375949] rounded-full opacity-0 group-active:opacity-100 group-active:animate-ping" style={{ animationDelay: '0.2s' }} />
                    </div>

                    <div className="relative z-10 h-full flex flex-col items-center justify-center p-6 transition-all duration-300" style={{ color: '#375949' }}>
                        <div className="mb-4 transform group-hover:scale-110   group-hover:brightness-[2.3] transition-all duration-300">
                            <BackendEngineeringIcon />
                        </div>
                        <h3 className="text-2xl font-bold mb-2 text-center  group-hover:brightness-[2.3] group-hover:text-shadow-sm transition-all duration-300">
                            Backend Engineering
                        </h3>
                    </div>
                </NavLink>
            </div>
        </div>
    );
};

export default PortfolioButtons;

const HackerIcon = () => (
    <svg width="200" height="200" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">

        <circle cx="50" cy="35" r="20" fill="none" stroke="currentColor" strokeWidth="2" />
        <circle cx="50" cy="35" r="12" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="50" cy="35" r="6" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="50" cy="35" r="2" fill="currentColor" />

        <line x1="30" y1="35" x2="25" y2="35" stroke="currentColor" strokeWidth="2" />
        <line x1="70" y1="35" x2="75" y2="35" stroke="currentColor" strokeWidth="2" />
        <line x1="50" y1="15" x2="50" y2="10" stroke="currentColor" strokeWidth="2" />
        <line x1="50" y1="55" x2="50" y2="60" stroke="currentColor" strokeWidth="2" />

        <path d="M25 65 L35 70 L35 82 C35 85 32 87 30 88 C28 87 25 85 25 82 L25 70 Z"
            fill="none" stroke="currentColor" strokeWidth="2" />

        <path d="M30 70 L32 75 L29 78 L31 82" fill="none" stroke="currentColor" strokeWidth="1.5" />

        <rect x="45" y="65" width="35" height="25" rx="2" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <rect x="45" y="65" width="35" height="6" fill="#375949" opacity="0.3" />

        <line x1="48" y1="75" x2="58" y2="75" stroke="currentColor" strokeWidth="1" />
        <line x1="48" y1="78" x2="65" y2="78" stroke="currentColor" strokeWidth="1" />
        <line x1="48" y1="81" x2="55" y2="81" stroke="currentColor" strokeWidth="1" />
        <line x1="48" y1="84" x2="68" y2="84" stroke="currentColor" strokeWidth="1" />

        <circle cx="15" cy="20" r="2" fill="currentColor" />
        <circle cx="15" cy="50" r="2" fill="currentColor" />
        <circle cx="85" cy="20" r="2" fill="currentColor" />
        <circle cx="85" cy="50" r="2" fill="currentColor" />

        <line x1="17" y1="20" x2="30" y2="28" stroke="currentColor" strokeWidth="1" strokeDasharray="2,2" />
        <line x1="17" y1="50" x2="30" y2="42" stroke="currentColor" strokeWidth="1" strokeDasharray="2,2" />
        <line x1="83" y1="20" x2="70" y2="28" stroke="currentColor" strokeWidth="1" strokeDasharray="2,2" />
        <line x1="83" y1="50" x2="70" y2="42" stroke="currentColor" strokeWidth="1" strokeDasharray="2,2" />
    </svg>
);

const BackendEngineeringIcon = () => (
    <svg width="200" height="200" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">

        <rect x="15" y="20" width="70" height="12" rx="6" fill="none" stroke="currentColor" strokeWidth="2" />
        <text x="50" y="28" textAnchor="middle" fontSize="8" fill="currentColor">API</text>

        <rect x="10" y="40" width="20" height="15" rx="3" fill="#currentColor" stroke="currentColor" strokeWidth="1.5" />
        <rect x="40" y="40" width="20" height="15" rx="3" fill="#currentColor" stroke="currentColor" strokeWidth="1.5" />
        <rect x="70" y="40" width="20" height="15" rx="3" fill="#currentColor" stroke="currentColor" strokeWidth="1.5" />

        <circle cx="20" cy="47.5" r="2" fill="currentColor" />
        <circle cx="50" cy="47.5" r="2" fill="currentColor" />
        <circle cx="80" cy="47.5" r="2" fill="currentColor" />

        <ellipse cx="25" cy="68" rx="12" ry="4" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <ellipse cx="25" cy="73" rx="12" ry="4" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <line x1="13" y1="68" x2="13" y2="73" stroke="currentColor" strokeWidth="1.5" />
        <line x1="37" y1="68" x2="37" y2="73" stroke="currentColor" strokeWidth="1.5" />

        <ellipse cx="75" cy="68" rx="12" ry="4" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <ellipse cx="75" cy="73" rx="12" ry="4" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <line x1="63" y1="68" x2="63" y2="73" stroke="currentColor" strokeWidth="1.5" />
        <line x1="87" y1="68" x2="87" y2="73" stroke="currentColor" strokeWidth="1.5" />

        <line x1="50" y1="32" x2="20" y2="40" stroke="currentColor" strokeWidth="1" opacity="0.7" />
        <line x1="50" y1="32" x2="50" y2="40" stroke="currentColor" strokeWidth="1" opacity="0.7" />
        <line x1="50" y1="32" x2="80" y2="40" stroke="currentColor" strokeWidth="1" opacity="0.7" />

        <line x1="20" y1="55" x2="25" y2="64" stroke="currentColor" strokeWidth="1" opacity="0.7" />
        <line x1="80" y1="55" x2="75" y2="64" stroke="currentColor" strokeWidth="1" opacity="0.7" />

        <circle cx="20" cy="85" r="2" fill="currentColor" />
        <circle cx="35" cy="85" r="2" fill="currentColor" />
        <circle cx="50" cy="85" r="2" fill="currentColor" />
        <circle cx="65" cy="85" r="2" fill="currentColor" />
        <circle cx="80" cy="85" r="2" fill="currentColor" />

        <line x1="20" y1="85" x2="35" y2="85" stroke="currentColor" strokeWidth="1" />
        <line x1="35" y1="85" x2="50" y2="85" stroke="currentColor" strokeWidth="1" />
        <line x1="50" y1="85" x2="65" y2="85" stroke="currentColor" strokeWidth="1" />
        <line x1="65" y1="85" x2="80" y2="85" stroke="currentColor" strokeWidth="1" />
    </svg>
);

