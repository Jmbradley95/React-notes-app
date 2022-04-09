import React, { useState } from "react";
import styled from "styled-components";

export default function Burger({handleSidebar}) {

const [burgerActive, setBurgerActive] = useState(false);

  const handleToggle=()=>{
    setBurgerActive(!burgerActive);
  }

  return (
    <BurgerButton 
        onClick={()=>{handleToggle(); handleSidebar()}}
        className={burgerActive ? "active" : "closed"}>
      <span></span>
      <span></span>
      <span></span>
    </BurgerButton>
  );
}

const BurgerButton = styled.button`
    background: none;
    border: none;
    height: 40px;
    width: 50px;

    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-direction: column;

    cursor: pointer;

    z-index: 10;

    span{
        position: relative;
        display: block;
        height: 3px;
        width: 45px;
        background: var(--grey);
        transition: .35s;
    }

    //hover state of burger button
    &:hover span:nth-child(2){
        background: var(--teal);
        transform: scaleX(.7);
    }

    //active state of burger button
    &.active{

        span:first-child{
            transform: translateY(-15px);
        }

        span:nth-child(2){
            position: relative;
            background: var(--teal);
            transform: rotate(-45deg) scale(.7);
        }

        span:nth-child(2)::after{
            display: block;
            content: '';
            height: 100%;
            width: 100%;
            background: var(--teal);
            transform: rotate(90deg);
            
        }
         
        span:last-child{
            transform: translateY(15px);
        }
    }
    //closed stated of burger button (for transition-delay)
    &.closed{

        span:first-child{
           transition-delay: .2s;
        }

        span:last-child{
            transition-delay: .2s;
        }

    }
`;
