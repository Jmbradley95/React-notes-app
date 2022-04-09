import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";


import Burger from "./Burger";
import SideBar from "./SideBar";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const handleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <StyledHeader>
      <div className="wrapper">
        <Link to={'/'}>
          <h1>React Notes App</h1>
        </Link>
        <Burger handleSidebar={handleSidebar} />
        <SideBar isOpen={isOpen}/>
      </div>
    </StyledHeader>
  );
}

const StyledHeader = styled.header`
  height: 80px;
  width: 100%;
  top: 0;
  background: var(--black);
  border-bottom: 5px solid var(--teal);

  padding: 0 3%;  

  .wrapper {
    height: 100%;
    width: 100%;
    position: relative;

    display: flex;
    justify-content: space-between;
    align-items: center;

    overflow: hidden;
  }

  h1 {
    font-size: 1.5rem;
    color: var(--grey);
  }

  a{
    text-decoration: none;
  }
`;
