import logo from "./logo.svg";
import "./App.css";
import React from "react";
import styled from "styled-components";
import { SignIn } from "./Components/SignIn";
import { SignUp } from "./Components/SignUp";
import ReactDOM from "react-dom/client";
import { Routes, Route, Link, BrowserRouter } from "react-router-dom";
import { Button2 } from "./Components/SignIn";
const Title = styled.h1`
  color: orange;
`;

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/signin" element={<SignUp />} />
          <Route path="/signup" element={<SignIn />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
