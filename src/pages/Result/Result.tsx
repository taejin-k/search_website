import styled from "styled-components";
import Header from "./components/Header";
import Main from "./components/Main";
import { useState } from "react";
import { useLocation } from "react-router-dom";

const Result = () => {
  const location = useLocation();
  const [value, setValue] = useState<string>(location.state);

  return (
    <ResultStyled>
      <Header value={value} setValue={setValue} />
      <Main value={value} />
    </ResultStyled>
  );
};

export default Result;

const ResultStyled = styled.div`
  width: 768px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  padding: 0 20px;
`;
