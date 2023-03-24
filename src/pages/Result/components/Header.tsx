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
      <button
        type="button"
        className="iconWrap"
        onClick={() => navigation(HOME_URL)}
      >
        <Icon width={24} height={24} iconKey="arrow_back" />
      </button>
      <div className="inputWrap">
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
      </div>
    </HeaderStyled>
  );
};

export default Header;

const HeaderStyled = styled.header`
  display: flex;
  gap: 12px;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 16px 40px 16px 32px;
  background: #fff;

  > .inputWrap {
    flex-grow: 1;
  }

  > .iconWrap {
    width: 40px;
    height: 40px;
    background: none;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    &:hover {
      background: #f8f9fb;
      border-radius: 12px;
    }
  }
`;
