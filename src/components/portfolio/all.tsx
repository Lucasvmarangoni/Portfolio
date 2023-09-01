import * as Dialog from "@radix-ui/react-dialog";
import { Cross2Icon } from "@radix-ui/react-icons";
import "./styles.css";
import { Link } from "react-router-dom";

interface Props {
    name: string,
    year: string,
    picture: string,
    demo?: string,
    github: string,
    version?: string,
    type: string,
    situation?: string,
    description: string,
    extra?: JSX.Element
    technologies: string[],
}


export const listAllProjects = (props: Props) => {
    const { name, year, picture, demo, github, version, type, situation, description, extra, technologies,} = props;
    const htmlDescription = {
        __html: description
    };

    return (
        <Dialog.Root>
            <Dialog.Trigger asChild className="">
                <div className="divCapa">
                    <button>
                        <img className="projCapa brightness-75" src={picture} alt="" />
                    </button>
                    <h2 className="imgTitle">{name.toUpperCase()}</h2>
                </div>
            </Dialog.Trigger>
            <Dialog.Portal>
                <Dialog.Overlay className="DialogOverlay" />
                <Dialog.Content className="DialogContent focus:outline-none">
                    <Dialog.Title className="DialogTitle">
                        <h1 className="projTitle">
                            {name} - <span className="projYear">{year}</span>
                        </h1>
                    </Dialog.Title>

                    <Dialog.Description className="Dgrid">
                        <div id="img" className="banner">
                            {demo ? (
                                <video controls autoPlay src={demo}></video>
                            ) : (
                                <img src={picture} alt="Project Image" />
                            )}
                        </div>
                        <h2 className={`${situation ? 'hTec  mb-3 text-center' : null}`}>{situation}</h2>
                        <div className="flex gap-2">

                            <div className="Icon">
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
                        </div>
                        <div className="grid gap-3">
                            <div className="P grid gap-3" dangerouslySetInnerHTML={htmlDescription}>


                            </div>
                            <div className="">
                                {extra}
                            </div>
                            <div className="divTec">
                                <h2 className="hTec">Tecnologias </h2>

                                <p className="P">{
                                    technologies.map((tecnologia) => {
                                        return tecnologia
                                    }).join(", ")
                                }</p>
                            </div>
                        </div>
                    </Dialog.Description>

                    <Dialog.Close asChild>
                        <button className="IconButton">
                            <Cross2Icon color="#ffffff85" />
                        </button>
                    </Dialog.Close>
                </Dialog.Content>
            </Dialog.Portal>
        </Dialog.Root>
    );
};
