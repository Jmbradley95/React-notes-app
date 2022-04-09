import React from 'react'
import styled from "styled-components";
import { Link } from "react-router-dom";
import { ReactComponent as AddIcon} from '../assets/plus.svg'



export default function AddButton() {
  return (
    <StyledButton>
        <Link to={`/notes/new`}>
            <AddIcon />
        </Link>
    </StyledButton>
  )
}

const StyledButton = styled.button`
    background: none;
    border: none;

    svg{
        height: 50px;
        fill: var(--black);
    }

    svg:hover{
        fill: var(--teal);
        transition: .25s;
    }
`