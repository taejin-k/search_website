import { KeyboardEvent, useEffect, useState } from "react";
import styled from "styled-components";
import Input from "../../components/Input";
import { useGetDocumentsQuery } from "../../quries/searchQuery";

import Icon from "../../components/Icon";

const Home = () => {
  const [value, setValue] = useState("");
  const getDocuments = useGetDocumentsQuery(value, false);

  const onEnter = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") getDocuments.refetch();
  };

  return (
    <HomeStyled>
      <div className="iconWrap">
        <Icon width={250} height={48} iconKey="liner" />
      </div>
      <Input
        icon={true}
        iconKey={value ? "search_hover" : "search_default"}
        value={value}
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
  width: 768px;
  height: 100%;
  margin: 0 auto;

  > .iconWrap {
    margin-bottom: 80px;
  }
`;
