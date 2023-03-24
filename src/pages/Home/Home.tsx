import styled from "styled-components";
import Icon from "../../components/Icon";
import Input from "../../components/Input";
import useInput from "../../hooks/useInput";

const Home = () => {
  const { value, focus, onFocus, onBlur, onChange, onEnter } = useInput();

  return (
    <HomeStyled>
      <Icon width={250} height={48} iconKey="liner" />
      <Input
        value={value}
        focus={focus}
        iconKey={focus ? "search_focus" : "search_default"}
        onFocus={onFocus}
        onBlur={onBlur}
        onChange={onChange}
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
  gap: 80px;
`;
