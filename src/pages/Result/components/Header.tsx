import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Icon from "../../../components/Icon";
import Input from "../../../components/Input";
import useInput from "../../../hooks/useInput";
import { useGetDocumentsQuery } from "../../../quries/searchQuery";
import { useAppSelector } from "../../../redux/hooks";
import { RootState } from "../../../redux/store";
import { HOME_URL } from "./../../../constants/urlConstants";
import { useEffect } from "react";

const Header = () => {
  const navigation = useNavigate();
  const keyword = useAppSelector((state: RootState) => state.keyword);
  const getDocuments = useGetDocumentsQuery(keyword);
  const { value, focus, onFocus, onBlur, onChange, onEnter } = useInput();

  useEffect(() => onChange(keyword), []);

  return (
    <HeaderStyled>
      <button type="button" onClick={() => navigation(HOME_URL)}>
        <Icon width={24} height={24} iconKey="arrow_back" />
      </button>
      <Input
        value={value}
        focus={focus}
        close={Boolean(value)}
        onFocus={onFocus}
        onBlur={onBlur}
        onChange={onChange}
        onEnter={onEnter}
        onClose={() => onChange("")}
      />
    </HeaderStyled>
  );
};

export default Header;

const HeaderStyled = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
  width: 100%;
  padding: 16px 20px 16px 12px;
  background: #fff;

  > button {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
    background: transparent;
    border-radius: 12px;
    cursor: pointer;

    &:hover {
      background: #f8f9fb;
    }
  }
`;
