import React, { RefAttributes } from "react";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import "./styles.css";
import { Link } from "react-router-dom";
import { Contato } from "./Contato";

const pathname = window.location.pathname;
const link = document.querySelector("link") as HTMLLinkElement;
const href: any =
  pathname === "/projetos"
    ? link.setAttribute("to", "/projetos")
    : link.setAttribute("to", "/");

export const Menu = () => {
  return (
    <DropdownMenu.Root >
      <DropdownMenu.Trigger asChild className="brightness-150">
        <button className="" aria-label="">
          {/* <HamburgerMenuIcon /> */}
          <svg
            width="25"
            height="25"
            viewBox="0 0 15 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.5 3C1.22386 3 1 3.22386 1 3.5C1 3.77614 1.22386 4 1.5 4H13.5C13.7761 4 14 3.77614 14 3.5C14 3.22386 13.7761 3 13.5 3H1.5ZM1 7.5C1 7.22386 1.22386 7 1.5 7H13.5C13.7761 7 14 7.22386 14 7.5C14 7.77614 13.7761 8 13.5 8H1.5C1.22386 8 1 7.77614 1 7.5ZM1 11.5C1 11.2239 1.22386 11 1.5 11H13.5C13.7761 11 14 11.2239 14 11.5C14 11.7761 13.7761 12 13.5 12H1.5C1.22386 12 1 11.7761 1 11.5Z"
              fill="currentColor"
              fillRule="evenodd"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content
          className="                     
          min-w-[120px]     
          relative
          left-[-0.5em]      
          bg-BGH 
          rounded-md            
          py-4
          duration-1000 
          in-menu
          grid
          justify-center          
          gap-4
          brightness-200
          "
          sideOffset={10}
        >
          <DropdownMenu.Item className="menu">
            <button>
              <Link to="/projetos" target="_blank">Projetos</Link>
            </button>
          </DropdownMenu.Item>

          <DropdownMenu.Item className="menu">
            <button>
              <Link to="https://www.hackerrank.com/lucasvm_ti">HackerRank</Link>
            </button>
          </DropdownMenu.Item>

          <DropdownMenu.Item className="menu">
            <Link id="link" to={href}>
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
