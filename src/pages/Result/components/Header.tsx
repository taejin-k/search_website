import { KeyboardEvent, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import Icon from "../../../components/Icon";
import Input from "../../../components/Input";
import { useGetDocumentsQuery } from "../../../quries/searchQuery";
import { HOME_URL } from "./../../../constants/urlConstants";

const Header = () => {
  const location = useLocation();
  const navigation = useNavigate();
  const [value, setValue] = useState(location.state);
  const getDocuments = useGetDocumentsQuery(value, false);

  const onEnter = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") getDocuments.refetch();
  };

  return (
    <HeaderStyled>
      <div className="iconWrap" onClick={() => navigation(HOME_URL)}>
        <Icon width={24} height={24} iconKey="arrow_back" />
      </div>
      <Input
        value={value}
        focus={value !== location.state}
        onChange={(value) => setValue(value)}
        onEnter={onEnter}
      />
    </HeaderStyled>
  );
};

export default Header;

const HeaderStyled = styled.header`
  display: flex;
  gap: 20px;
  align-items: center;
  justify-content: space-between;
  padding: 16px 40px;

  > .iconWrap {
    cursor: pointer;
  }
`;
