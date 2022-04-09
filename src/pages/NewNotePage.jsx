import React, { useRef, useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

import { ReactComponent as SubmitButton } from "../assets/plus.svg";

export default function NewNotePage() {
  const [note, setNote] = useState({});

  let navigate = useNavigate();

  let handleSubmit = (e) => {
    e.preventDefault();
    
  };

  let createNote = async (note) => {
    await fetch(`http://localhost:5000/notes/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...note,
        created: new Date().toISOString().split("T")[0],
      }),
    });
    navigate("/");
  };

  return (
    <StyledNote>
      <form action="">
        <div className="title-wrapper">
          <label htmlFor="title">Title: </label>
          <input
            id="title"
            type="text"
            // onChange={(e) => setTitle(e.target.value)}
            onChange={(e) => setNote({ ...note, title: e.target.value })}
          />
        </div>

        <div className="author-wrapper">
          <label htmlFor="author">Author: </label>
          <input
            id="author"
            type="text"
            // onChange={(e) => setAuthor(e.target.value)}
            onChange={(e) => setNote({ ...note, author: e.target.value })}
          />
        </div>

        <div className="body-wrapper">
          <label htmlFor="body">Body: </label>
          <textarea
            id="body"
            // onChange={(e) => setBody(e.target.value)}
            onChange={(e) => setNote({ ...note, body: e.target.value })}
          ></textarea>
        </div>

        <div className="note-button-row">
          <SubmitButton onClick={handleSubmit} />
        </div>
      </form>
    </StyledNote>
  );
}

const StyledNote = styled.section`
  background: var(--grey);
  width: min(80%, 600px);
  height: min-content;
  padding: 2% 3% 1%;

  border-radius: 5px;

  div {
    height: min-content;
    display: flex;
    flex-direction: column;
    // justify-content: space-between;
    width: max(210px, 100%);

    margin: 10px 0;
  }

  input[type="text"] {
    min-width: 150px;
    width: 100%;
  }

  .body-wrapper {
    display: flex;
    justify-content: center;
    align-items: flex-start;

    flex-direction: column;
  }

  textarea {
    min-height: 150px;
    width: 100%;
    resize: none;
    font-size: 16px;
    padding: 5px;
    margin-top: 2px;
  }

  .note-button-row {
    margin-top: 20px;
    height: min-content;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  svg {
    margin: 2px 0;
    height: 30px;
    fill: var(--dark-grey);
    cursor: pointer;
  }

  svg:hover {
    fill: var(--teal);
    transition: 0.15s;
  }
`;
