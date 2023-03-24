import { Dispatch, KeyboardEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Icon from "../../../components/Icon";
import Input from "../../../components/Input";
import useGlobalModal from "../../../hooks/useGlobalModal";
import { useGetDocumentsQuery } from "../../../quries/searchQuery";
import { HOME_URL } from "./../../../constants/urlConstants";

interface Props {
  value: string;
  setValue: Dispatch<React.SetStateAction<string>>;
}

const Header = (props: Props) => {
  const { value, setValue } = props;
  const [isFocus, setIsFocus] = useState(false);
  const navigation = useNavigate();
  const getDocuments = useGetDocumentsQuery(value, false);
  const { openGlobalModal } = useGlobalModal();

  const onEnter = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key !== "Enter") return;
    if (value === "") {
      openGlobalModal({ isOpen: true, text: "검색어를 입력해주세요" });
      return;
    }

    getDocuments.refetch();
  };

  return (
    <HeaderStyled>
      <button type="button" onClick={() => navigation(HOME_URL)}>
        <Icon width={24} height={24} iconKey="arrow_back" />
      </button>
      <Input
        value={value}
        focus={isFocus}
        close={Boolean(value)}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        onChange={(value) => setValue(value)}
        onEnter={onEnter}
        onClose={() => setValue("")}
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
