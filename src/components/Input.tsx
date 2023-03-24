import { KeyboardEvent } from "react";
import styled, { css } from "styled-components";
import Icon from "./Icon";

interface Props {
  icon: boolean;
  iconKey: string;
  value: string;
  onChange: (value: string) => void;
  onEnter: (event: KeyboardEvent<HTMLInputElement>) => void;
}

const Input = (props: Props) => {
  const { icon, iconKey, value, onChange, onEnter } = props;

  return (
    <InputStyled value={value}>
      {icon ? (
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

const InputStyled = styled.div<{ value: string }>`
  ${(props) => css`
    position: relative;

    > .iconWrap {
      position: absolute;
      top: 50%;
      left: 16px;
      transform: translateY(-50%);
    }

    input {
      font-family: "Pretendard";
      font-weight: 400;
      width: 560px;
      height: 48px;
      background: #ffffff;
      border: ${props.value ? "1.5px solid #00C3CC;" : "1px solid #c2c6ce;"};
      caret-color: ${props.value && "#00C3CC;"};
      border-radius: 48px;
      padding: 0px 16px 0px 56px;
      font-size: 16px;
      color: #33373d;

      &:hover {
        border: ${props.value ? "1.5px solid #00C3CC;" : "1px solid #959ca6;"};
      }

      &::placeholder {
        color: #c2c6ce;
      }
    }
  `}
`;
