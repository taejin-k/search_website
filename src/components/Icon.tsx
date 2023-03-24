import styled, { css } from "styled-components";
import { assetImgs } from "../assets/assets";

interface Props {
  width: number;
  height: number;
  iconKey: string;
}

const Icon = (props: Props) => {
  const { width, height, iconKey } = props;

  return (
    <IconStyled width={width} height={height}>
      <img src={assetImgs[iconKey]} alt={iconKey} />
    </IconStyled>
  );
};

export default Icon;

const IconStyled = styled.div<{ width: number; height: number }>`
  ${(props) => css`
    width: ${`${props.width}px`};
    height: ${`${props.height}px`};
    display: flex;
    justify-content: center;
    align-items: center;
  `}
`;
