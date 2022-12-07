import React from "react";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import {
  HamburgerMenuIcon,
  DotFilledIcon,
  CheckIcon,
  ChevronRightIcon,
} from "@radix-ui/react-icons";
import "./styles.css";
import { Link, NavLink } from "react-router-dom";
import { Contato } from "./Contato";

const pathname = window.location.pathname;
const link: any = document.querySelector("link");
const href:any = pathname == "/portfolio" ? link.setAttribute("to", "/portfolio") : link.setAttribute("to", "/")


export const Menu = () => {
  const [bookmarksChecked, setBookmarksChecked]: any = React.useState(true);
  const [urlsChecked, setUrlsChecked]: any = React.useState(false);
  const [person, setPerson] = React.useState("pedro");

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <button className="rounded-sm" aria-label="Customise options">
          <HamburgerMenuIcon />
        </button>
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content
          className="           
          m-auto 
          min-w-[200px] 
          bg-BGH 
          rounded-md 
          p-1 
          duration-500 
          in-menu"
          sideOffset={5}
        >
          <DropdownMenu.Item className="menu">
            <button>
              <Link to="/portfolio">Portfólio</Link>
            </button>
          </DropdownMenu.Item>

          <DropdownMenu.Item className="menu">
            <Link id="link" to={href} >
              <button className="">
                <Contato />
              </button>
            </Link>
          </DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
};
