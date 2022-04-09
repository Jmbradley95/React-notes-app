import React from 'react'
import styled from 'styled-components'
import { NavLink } from "react-router-dom"

export default function SideBar({isOpen}) {
  return (
    <Menu
    className={isOpen ? "open" : ""}
    >
      <ul>
        <li>
          <NavLink to={"/"}> Home</NavLink>
        </li>
        <li>
          <NavLink to={"/about"}> About</NavLink>
        </li>
        <li>
          <NavLink to={"/notes/new"}> Add Note</NavLink>
        </li>
      </ul>
    </Menu>
  )
}


const Menu = styled.nav`
    position: absolute;
    width: 100%;
    height: 73.5%;
    background: var(--black);
    border-top: 3.5px solid white;
    border-bottom: 3.5px solid white;
    transform: translateX(100%);
    transition: .3s;

    opacity: 0;

    display: flex;
    justify-content: center;
    align-items: center;

    color: white;

    &.open{
    transform: translateX(0%);
    opacity: 1;
    transition: .25s;
    transition-delay: .25s;
    }

    ul{
      height: 100%;
      width: 70%;
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      align-items: center;
    }

    li{
      display: block;
      list-style: none;
    }

    a, a:visited{
      color: white;
      text-decoration: none;
    }

    a:hover{
      color: var(--teal);
    }
`