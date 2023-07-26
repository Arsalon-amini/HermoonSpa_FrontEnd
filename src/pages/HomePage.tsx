import React from "react";
import Logo from "../components/Logo";
import styled from "styled-components";

type HomePageProps = {
  children?: React.ReactNode;
};

const CenteredDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  max-width: 100vw;
`;

const HomePage: React.FC<HomePageProps> = ({ children }) => {
  return (
    <>
      <CenteredDiv>
        <Logo />
        <div>網站即將推出...</div>
        {children}
      </CenteredDiv>
    </>
  );
};

export default HomePage;
