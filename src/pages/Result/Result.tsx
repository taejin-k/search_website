import styled from "styled-components";
import Header from "./components/Header";
import Main from "./components/Main";

const Result = () => {
  return (
    <ResultStyled>
      <Header />
      <Main />
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
