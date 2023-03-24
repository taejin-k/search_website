import { KeyboardEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Icon from "../../components/Icon";
import Input from "../../components/Input";
import { RESULT_URL } from "../../constants/urlConstants";
import useGlobalModal from "../../hooks/useGlobalModal";
import { useGetDocumentsQuery } from "../../quries/searchQuery";

const Home = () => {
  const navigate = useNavigate();
  const [value, setValue] = useState("");
  const [isFocus, setIsFocus] = useState(false);
  const getDocuments = useGetDocumentsQuery(value, false);
  const { openGlobalModal } = useGlobalModal();

  const onEnter = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key !== "Enter") return;
    if (value === "") {
      openGlobalModal({ isOpen: true, text: "검색어를 입력해주세요" });
      return;
    }

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
        focus={isFocus}
        iconKey={isFocus ? "search_focus" : "search_default"}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
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
