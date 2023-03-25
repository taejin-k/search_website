import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled, { css } from "styled-components";
import Icon from "../../../components/Icon";
import Input from "../../../components/Input";
import useInput from "../../../hooks/useInput";
import { useAppSelector } from "../../../redux/hooks";
import { RootState } from "../../../redux/store";
import { HOME_URL } from "./../../../constants/urlConstants";

interface Props {
  isScroll: boolean;
}

const Header = (props: Props) => {
  const { isScroll } = props;
  const navigation = useNavigate();
  const keyword = useAppSelector((state: RootState) => state.keyword);
  const { value, focus, onFocus, onBlur, onChange, onEnter } = useInput();

  useEffect(() => onChange(keyword), []);

  return (
    <HeaderStyled isScroll={isScroll}>
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

const HeaderStyled = styled.header<{ isScroll: boolean }>`
  ${(props) => css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 12px;
    width: 100%;
    padding: 16px 20px 16px 12px;
    background: #fff;
    border-bottom: ${props.isScroll ? "1px solid #f2f3f7" : "none"};

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
  `}
`;
