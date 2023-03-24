import { KeyboardEvent } from "react";
import styled, { css } from "styled-components";
import Icon from "./Icon";

interface Props {
  value: string;
  focus: boolean;
  close?: boolean;
  iconKey?: string;
  onFocus: () => void;
  onBlur: () => void;
  onChange: (value: string) => void;
  onEnter: (event: KeyboardEvent<HTMLInputElement>) => void;
  onClose?: () => void;
}

const Input = (props: Props) => {
  const {
    value,
    focus,
    close,
    iconKey,
    onFocus,
    onBlur,
    onChange,
    onEnter,
    onClose,
  } = props;

  return (
    <InputStyled value={value} focus={focus} iconKey={iconKey}>
      {iconKey ? (
        <div className="iconWrap icon">
          <Icon width={24} height={24} iconKey={iconKey} />
        </div>
      ) : null}
      <input
        type="text"
        value={value}
        placeholder="Search keyword"
        onFocus={onFocus}
        onBlur={onBlur}
        onChange={(event) => onChange(event.target.value)}
        onKeyDown={(event) => onEnter(event)}
      />
      {close ? (
        <button type="button" className="iconWrap close" onClick={onClose}>
          <Icon width={24} height={24} iconKey="close" />
        </button>
      ) : null}
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
      transform: translateY(-50%);
      background: none;

      &.icon {
        left: 16px;
      }

      &.close {
        right: 12px;
        cursor: pointer;
      }
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
