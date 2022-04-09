import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import styled from "styled-components";
import Header from "./components/Header";

import Home from "./pages/home";
import About from './pages/about';
import Note from './pages/Note'
import NotFound from './pages/NotFound'
import NewNote from './pages/NewNotePage'

function App() {
  return (
      <BrowserRouter>
        <Header />
        <Main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About/>} />
            <Route path="/notes/:id" element={<Note />}/>
            <Route path="/notes/new" element={<NewNote />} />
            <Route path="/notes/*" element={<NotFound />} />
          </Routes>
        </Main>
      </BrowserRouter>
  );
}

export default App;

const Main = styled.main`

  display: flex;
  justify-content: center;
  align-items: center;

  padding: 3% 0;
`;
