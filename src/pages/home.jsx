import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import ListOfNotes from "../components/ListOfNotes";
import AddButton from "../components/AddButton";

export default function Home() {
  return (
    <StyledSection>
      <ListOfNotes />
      <AddButton />
    </StyledSection>
  );
}

const StyledSection = styled.section`
  position: relative;

  min-height: 350px;
  height: calc(100vh - 110px);
  width: 100%;
  // padding: 3% 0;

  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;

`;
