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
            <Dialog.Trigger asChild className="brightness-[3]">
                <div className="divCapa">
                    <button>
                        <img className="projCapa " src={picture} alt="" />
                    </button>
                    <h2 className="imgTitle">{name.toUpperCase()}</h2>
                </div>
            </Dialog.Trigger>
            <Dialog.Portal>
                <Dialog.Overlay className="DialogOverlay" />
                <Dialog.Content className="DialogContent focus:outline-none ">
                    <Dialog.Title className="DialogTitle">
                        <h1 className="projTitle ">
                            {name} - <span className="projYear ">{year}</span>
                        </h1>
                    </Dialog.Title>

                    <Dialog.Description className="Dgrid">
                        <div id="img" className="banner">
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

                            <div className="Icon brightness-150">
                                <img className="h-5" src="/github-proj.png" alt="" />
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
