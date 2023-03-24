import { KeyboardEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Icon from "../../components/Icon";
import Input from "../../components/Input";
import { RESULT_URL } from "../../constants/urlConstants";
import { useGetDocumentsQuery } from "../../quries/searchQuery";

const Home = () => {
  const navigate = useNavigate();
  const [value, setValue] = useState("");
  const getDocuments = useGetDocumentsQuery(value, false);

  const onEnter = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key !== "Enter") return;

    getDocuments.refetch();
    navigate(RESULT_URL, { state: value });
  };

  return (
    <HomeStyled>
      <div className="iconWrap">
        <Icon width={250} height={48} iconKey="liner" />
      </div>
      <Input
        value={value}
        iconKey={value ? "search_hover" : "search_default"}
        focus={Boolean(value)}
        onChange={(value) => setValue(value)}
        onEnter={onEnter}
      />
    </HomeStyled>
  );
};

export default Home;

const HomeStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 560px;
  height: 100%;
  margin: 0 auto;

  > .iconWrap {
    margin-bottom: 80px;
  }
`;
