import styled from "styled-components";
import { React, Fragment } from "react";
import Navbar from "./components/Navbar";
import Content from "./components/Content";
import "./App.css";

import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
     * {
font-family: 'warcraft' !important;
    margin: 0;
  }
`;

const Container = styled.div`
  height: 100vh;
  font-family: "warcraft";
`;
const Main = styled.div`
  height: 100vh;
`;

function App() {
  return (
    <>
      <Container>
        <Navbar />
        <Main>
          <Content></Content>
        </Main>
      </Container>
      .
      <GlobalStyle />
    </>
  );
}

export default App;
