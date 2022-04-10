import React from 'react'
import styled from "styled-components";

export default function about() {
  return (
    <StyledAbout>about</StyledAbout>
  )
}

const StyledAbout = styled.article`
 background: var(--grey);
  width: min(80%, 600px);
  height: min-content;
  padding: 2% 3% 1%;

  border-radius: 5px;

`