import * as Dialog from "@radix-ui/react-dialog";
import { MdClose } from "react-icons/md";
import "./styles.css";
import { Link } from "react-router-dom";
import Commits from "./components/Get-commits";

interface Props {
    name: string
    year: string
    picture: string
    demo?: string
    video?: string
    github: string
    version?: string
    type: string
    situation?: string | JSX.Element
    resume?: string | JSX.Element
    description: string
    extra?: JSX.Element | JSX.Element[]
    technologies: string[]
    carousel?: JSX.Element
}


export const listAllProjects = (props: Props) => {
    const { name, year, picture, demo, github, version, type, situation, resume, description, extra, technologies, video, carousel } = props;
    const htmlDescription = {
        __html: description
    };

    let check

    return (
        <Dialog.Root>
            <Dialog.Trigger asChild className=" ">
                <div className="divCapa">
                    <button>
                        <img className="projCapa " src={picture} alt="" />
                    </button>
                    {/* <h2 className="imgTitle">{name.toUpperCase()}</h2> */}
                </div>
            </Dialog.Trigger>
            <Dialog.Portal>
                <Dialog.Overlay className="DialogOverlay" />
                <Dialog.Content className="DialogContent focus:outline-none  ">
                    <Dialog.Title className="DialogTitle">
                        <h1 className="projTitle  hover:brightness-200">
                            {name} - <span className="projYear">{year}</span>
                        </h1>
                    </Dialog.Title>

                    <Dialog.Description className="Dgrid ">
                        <div id="img" className="banner ">
                            {video ? (
                                <video controls src={video}></video>
                            ) : (
                                <img src={picture} alt="Project Image" />
                            )}
                        </div>
                        <div className={carousel ? 'h-12' : 'h-0'}>
                            {
                                carousel
                                    ? carousel
                                    : null
                            }
                        </div>
                        <div className="flex gap-2">

                            <div className="Icon hover:brightness-[3]">
                                <svg version="1.0" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet">
                                    <path className="github-path" d="M9.05044 2.00043C5.15551 2.00043 2 5.10682 2 8.93529C2 12.0009 4.01995 14.5993 6.81942 15.516C7.17326 15.5815 7.30105 15.3669 7.30105 15.1814C7.30105 15.0167 7.29708 14.5811 7.29444 14.0029C5.33221 14.4208 4.91888 13.0706 4.91888 13.0706C4.59765 12.2714 4.13408 12.0568 4.13408 12.0568C3.49602 11.6282 4.18476 11.6373 4.18476 11.6373C4.89156 11.6845 5.26347 12.3503 5.26347 12.3503C5.89228 13.4113 6.91328 13.1044 7.31735 12.9259C7.37905 12.479 7.5628 12.1717 7.76285 12.0005C6.19766 11.8267 4.55182 11.2307 4.55182 8.57338C4.55182 7.81445 4.82502 7.19638 5.27669 6.71094C5.1987 6.53713 4.95986 5.83064 5.33882 4.87537C5.33882 4.87537 5.92886 4.69029 7.2777 5.58662C7.84217 5.43276 8.44146 5.35604 9.04031 5.35214C9.63959 5.35604 10.2384 5.43319 10.8029 5.58662C12.1438 4.69029 12.7334 4.87537 12.7334 4.87537C13.1119 5.83064 12.8731 6.5367 12.8044 6.71094C13.2516 7.19638 13.5248 7.81488 13.5248 8.57338C13.5248 11.2368 11.8768 11.8241 10.3098 11.9936C10.5548 12.2012 10.7844 12.6281 10.7844 13.2761C10.7844 14.2036 10.7756 14.9508 10.7756 15.1767C10.7756 15.357 10.899 15.5737 11.2621 15.5039C14.0823 14.5967 16.1 11.9962 16.1 8.93486C16.1 5.10638 12.9445 2 9.04956 2L9.05044 2.00043Z"
                                        fill="#030303" />
                                </svg>
                                <Link
                                    target={"_blank"}
                                    rel={"noreferrer"}
                                    className="hover:underline"
                                    to={github}
                                >
                                    Github
                                </Link>
                            </div>
                            {
                                demo
                                    ? <div className="Icon">
                                        <Link
                                            target={"_blank"}
                                            rel={"noreferrer"}
                                            className="hover:underline"
                                            to={demo}
                                        >
                                            Demo
                                        </Link>
                                    </div>
                                    : null
                            },
                            {version ? <img src={`https://img.shields.io/badge/version-${version}-black`} alt={`Version ${version}`}></img> : null}
                            <img src={`https://img.shields.io/badge/Projeto ${type}-black`} alt={`projeto ${type}`}></img>




                            <Commits repoName={name} />


                        </div>

                        <h2 className={`${situation ? 'w-full ' : null}`}>{situation ? situation : null}</h2>

                        <h2 className={`${resume ? 'w-full ' : null}`}>{resume ? resume : null}</h2>

                        <div className="grid gap-3">
                            <div className="p grid gap-3" dangerouslySetInnerHTML={htmlDescription}>


                            </div>
                            <div className="">
                                {extra}
                            </div>
                            <div className="divTec ">
                                <h2 className="hTec ">Tecnologias </h2>

                                <p className="pP">{
                                    technologies.map((tecnologia) => {
                                        return tecnologia
                                    }).join(", ")
                                }</p>
                            </div>
                        </div>
                    </Dialog.Description>

                    <Dialog.Close asChild>
                        <button className=" p-2
                                absolute
                                top-0    
                                right-0 text-2xl">
                            <MdClose color="#ffffff85" />
                        </button>
                    </Dialog.Close>
                </Dialog.Content>
            </Dialog.Portal>
        </Dialog.Root >
    );
};
