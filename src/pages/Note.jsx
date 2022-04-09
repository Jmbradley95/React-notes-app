import React, { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";

import styled from "styled-components";

import { ReactComponent as DeleteButton } from "../assets/Delete.svg";
import { ReactComponent as SubmitButton } from "../assets/plus.svg";

export default function Note() {
  const params = useParams();
  let navigate = useNavigate();

  const [note, setNote] = useState({});
  const [isTrue, setIsTrue] = useState(false);

  //functions
  useEffect(() => {
    const FetchNote = async () => {
      const response = await fetch(`http://localhost:5000/notes/${params.id}`);
      let data = await response.json();
      setNote(data);
    };
    FetchNote();
  }, [params.id]);

  let deleteNote = async () => {
    let choice = window.confirm(
      "Are you sure you want to delete this message?"
    );
    if (choice) {
      await fetch(`http://localhost:5000/notes/${params.id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(note),
      });

      navigate("/");
    }
  };

  let handleChange = (e) => {
    setNote({ ...note, body: e.target.value });
  };

  let updateNote = async () => {
    await fetch(`http://localhost:5000/notes/${params.id}`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        ...note,
        updated: new Date().toISOString().split("T")[0],
      }),
    });
  };

  let completeNote = async () =>{
    
  }

  //html
  if ("title" in note) {
    return (
      <StyledNote>
        <h3>{note.title}</h3>
        <p>Created by: {note.author}</p>
        <textarea
          value={note.body}
          onChange={handleChange}
          name=""
          id=""
        ></textarea>
        <p>Last updated: {note.updated ? `${note.updated}` : "N/A"}</p>
        <div className="note-button-row">
          <DeleteButton onClick={deleteNote} />
          <SubmitButton onClick={updateNote} />
        </div>
      </StyledNote>
    );
  } else {
    return (
      <NoNote>
        Sorry, no note here!
        <Link to={"/"}>Click here to go home.</Link>
      </NoNote>
    );
  }
}

const NoNote = styled.form`
  color: var(--grey);

  height: 300px;
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  font-size: 24px;

  a:link,
  a:visited,
  a:active {
    color: white;
  }
`;

const StyledNote = styled.section`
  background: var(--grey);
  width: min(80%, 600px);
  height: min-content;
  padding: 2% 3% 1%;

  border-radius: 5px;

  h3 {
    font-weight: 700;
    text-transform: Capitalize;
    font-size: 1.25rem;
  }

  p {
    margin: 5px 0;
    font-size: 16px;
  }

  textarea {
    min-height: 150px;
    width: 100%;
    resize: none;
    font-size: 16px;
    padding: 5px;
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
