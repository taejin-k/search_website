import styled from "styled-components";
import { useGetDocumentsQuery } from "../../../quries/searchQuery";
import Document from "./Document";

interface Props {
  value: string;
}

const Main = (props: Props) => {
  const { value } = props;
  const getDocuments = useGetDocumentsQuery(value, false);

  return (
    <MainStyled>
      {getDocuments.data?.documents.map((item) => (
        <Document key={item.id} item={item} />
      ))}
    </MainStyled>
  );
};

export default Main;

const MainStyled = styled.main`
  width: 100%;
  height: calc(100vh - 80px);
  overflow: auto;

  &::-webkit-scrollbar {
    display: none;
  }

  -ms-overflow-style: none;
  scrollbar-width: none;
`;
