import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

export default function ListOfNotes() {
  const [notesList, setNotesList] = useState([]);

  const fetchNotes = async () => {
    const response = await fetch(`http://localhost:5000/notes`);
    if (!response.ok) {
      const message = "An error has occured - Could not fetch Notes List";
      throw new Error(message);
    }
    const data = await response.json();
    setNotesList(data);
  };

  useEffect(() => {
    fetchNotes();
  }, []);

  return (
    <NotesList>
      <ul>
        {notesList.map((note) => (
          <li key={note.id}>
            <Link
              to={`/notes/${note.id}`}
            >
              <h3>{note.title}</h3>
              <p> Created by: {note.author}</p>
            </Link>
          </li>
        ))}
      </ul>
    </NotesList>
  );
}

const NotesList = styled.section`
  position: relative;
  width: min(75%, 600px);
  height: min-content;
  max-height: 85%;

  display: flex;
  justify-content: flex-start;
  align-items: space-around;
  flex-direction: column;

  overflow-Y: scroll;
  box-shadow: inset 0px -10px 19px -10px var(--dark-grey);
  border-radius: 5px;

  .completed {
    background: grey;

    h3 {
      text-decoration: line-through;
    }
  }

  a {
    text-decoration: none;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    background: var(--grey);
    border-radius: 5px;

    min-height: 100px;
    height: auto;
    width: 100%;

    list-style: none;
    padding: 4px;

    position: relative;
    z-index: -1;
  }

  a:link,
  a:visited,
  a:active {
    color: black;
  }

  a > h3 {
    font-weight: 700;
    font-size: 20px;
    text-align: left;
    text-transform: Capitalize;
  }

  a > p {
    font-size: 14px;
  }

  li {
    list-style: none;
  }

  li:hover {
    filter: brightness(0.8);
    transition: 0.5s;
  }

  li:not(:first-of-type) {
    margin-top: 10px;
  }

  ::-webkit-scrollbar{
    width: 20px;
  }

  ::web-kit-scrollbar-thumb{
    background: var(--teal);
    border-radius: 50%:
  }
`;
