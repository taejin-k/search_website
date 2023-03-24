import { SyntheticEvent, MouseEvent, RefObject, useCallback } from "react";
import styled from "styled-components";
import default_favicon from "../../../assets/svg/default_favicon.svg";
import default_thumb from "../../../assets/svg/default_thumb.svg";
import Icon from "../../../components/Icon";
import { DocumentType } from "../../../models/getDocuments";

interface Props {
  item: DocumentType;
  targetRef?: RefObject<HTMLDivElement> | null;
}

const Document = (props: Props) => {
  const { item, targetRef } = props;

  const onError = useCallback(
    (event: SyntheticEvent<HTMLImageElement, Event>) => {
      event.currentTarget.src = default_thumb;
    },
    []
  );

  const onClick = (
    event: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>
  ) => {
    event.stopPropagation();
    alert("!");
  };

  console.log("!");

  return (
    <DocumentStyled ref={targetRef} onClick={() => window.open(item.url)}>
      <img src={item.imageUrl} alt={item.imageUrl} onError={onError} />
      <div className="content">
        <div className="title">{item.title}</div>
        <div className="netloc">
          <div className="imgWrap">
            <img src={item.faviconUrl || default_favicon} alt={item.netloc} />
          </div>
          <span>{item.netloc}</span>
        </div>
      </div>
      <div className="buttonWrap">
        <button type="button" onClick={(event) => onClick(event)}>
          <Icon width={24} height={24} iconKey={`save_${item.isSaved}`} />
        </button>
      </div>
    </DocumentStyled>
  );
};

export default Document;

const DocumentStyled = styled.div`
  width: 100%;
  padding: 16px 20px;
  background: #fff;
  border-radius: 16px;
  cursor: pointer;

  &:hover {
    background: #f8f9fb;
  }

  > img {
    width: 72px;
    height: 72px;
    border-radius: 12px;
    margin-right: 16px;
    object-fit: cover;
  }

  .content {
    display: inline-flex;
    flex-direction: column;
    gap: 14px;
    width: calc(100% - 168px);
    height: 72px;
    margin-right: 40px;

    .title {
      width: 100%;
      height: 40px;
      color: #33373d;
      font-weight: 700;
      font-size: 15px;
      line-height: 20px;
      text-overflow: ellipsis;
      overflow: hidden;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;
    }

    .netloc {
      display: flex;
      gap: 6px;
      width: 100%;
      height: 14px;

      > .imgWrap {
        width: 14px;

        img {
          width: 100%;
        }
      }
    }
  }

  .buttonWrap {
    display: inline-block;
    margin: 16px 0;

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
        background: #f2f3f7;
      }
    }
  }
`;
