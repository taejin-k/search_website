import { KeyboardEvent } from "react";
import styled, { css } from "styled-components";
import Icon from "./Icon";

interface Props {
  value: string;
  focus: boolean;
  iconKey?: string;
  onChange: (value: string) => void;
  onEnter: (event: KeyboardEvent<HTMLInputElement>) => void;
}

const Input = (props: Props) => {
  const { value, focus, iconKey, onChange, onEnter } = props;

  return (
    <InputStyled value={value} focus={focus} iconKey={iconKey}>
      {iconKey ? (
        <div className="iconWrap">
          <Icon width={24} height={24} iconKey={iconKey} />
        </div>
      ) : null}
      <input
        type="text"
        value={value}
        placeholder="Search keyword"
        onChange={(event) => onChange(event.target.value)}
        onKeyDown={(event) => onEnter(event)}
      />
    </InputStyled>
  );
};

export default Input;

const InputStyled = styled.div<{
  value: string;
  focus: boolean;
  iconKey: string | undefined;
}>`
  ${(props) => css`
    position: relative;
    width: 100%;

    > .iconWrap {
      position: absolute;
      top: 50%;
      left: 16px;
      transform: translateY(-50%);
    }

    input {
      font-family: "Pretendard";
      font-weight: 400;
      width: 100%;
      height: 48px;
      background: #ffffff;
      border: ${props.focus ? "1.5px solid #00C3CC;" : "1px solid #c2c6ce;"};
      caret-color: ${props.focus && "#00C3CC;"};
      border-radius: 48px;
      padding: ${`0px 16px 0px ${props.iconKey ? "56px" : "16px"}`};
      font-size: 16px;
      color: #33373d;

      &:hover {
        border: ${props.focus ? "1.5px solid #00C3CC;" : "1px solid #959ca6;"};
      }

      &::placeholder {
        color: #c2c6ce;
      }
    }
  `}
`;
