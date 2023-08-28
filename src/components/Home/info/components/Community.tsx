import { useState, useEffect } from "react";
import { RiCornerDownLeftFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import { Motion } from "../../../functions/Motion";

export function Community() {


    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);






    const card = (src: string, to: string, text: string) => {
        return (
            <div className="flex gap-1 itens-center">
                <img src={src} alt="" className="w-6 h-6 brightness-75" />

                <Link to="to" className="P hover:underline" target="_blank">{text}</Link>
            </div>
        )
    }

    return (
        <div className="grid gap-4 relative">
            <div>
                {windowWidth >= 950
                    ? Motion(1.0, 1.3, <p className="text-T1 text-2xl font-semibold brightness-200">Certificados </p>)
                    : null
                }
                {
                    windowWidth >= 950
                        ? Motion(1.0, 1.9, < RiCornerDownLeftFill className="absolute right-[15rem] top-[1.8rem] text-T2 text-[5rem]" />)
                        : null
                }
                <p className="text-T1 text-2xl font-semibold brightness-200 
                n2:pl-20"> {
                        Motion(1.0, 1.4, "Sou membro:")
                    } </p>
            </div>

            <div className="grid gap-4 
            pl-32
            " >
                {Motion(1.0, 1.6, card("pato.png", "https://pato.academy/lp/", "Pato Academy."))}
                {Motion(1.0, 1.7, card("techleads.png", "https://comece.techleads.club", "Tech Leads Club."))}
            </div>
        </div>
    )
}