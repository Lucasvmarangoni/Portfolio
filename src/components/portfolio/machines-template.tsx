import "./styles.css";
import { MachinesProps } from "./database/machines";
import { NavLink } from "react-router-dom";

interface Props extends MachinesProps { }


export const listAllMachines = (props: Props) => {
    const { name, link, date, difficulty, skills, picture, writeup, description, status, os } = props;

    return (
        <div className="">
            <NavLink to={link} key={link} className="">
                <img className="w-24 rounded-full border-[#375949]" src={picture} alt="machine icon" />
                {/* {
                    os == "Linux"
                        ?
                        <img src="icon-linux" alt="" />
                        :
                        <img src="icon-windows" alt="" />
                } */}
                <h1 className="p text-center">{name}</h1>
            </NavLink>
        </div>

    );
};
