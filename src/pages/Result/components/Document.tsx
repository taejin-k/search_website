import { SyntheticEvent } from "react";
import styled, { css } from "styled-components";
import default_favicon from "../../../assets/svg/default_favicon.svg";
import default_thumb from "../../../assets/svg/default_thumb.svg";
import Icon from "../../../components/Icon";
import { DocumentType } from "../../../models/getDocuments";

interface Props {
  item: DocumentType;
}

const Document = (props: Props) => {
  const { item } = props;

  const onError = (event: SyntheticEvent<HTMLImageElement, Event>) => {
    event.currentTarget.src = default_thumb;
  };

  return (
    <DocumentStyled>
      <div className="imgWrap">
        <img src={item.imageUrl} alt={item.imageUrl} onError={onError} />
      </div>
      <div className="content" onClick={() => window.open(item.url)}>
        <div className="title">{item.title}</div>
        <div className="netloc">
          <div className="imgWrap">
            <img src={item.faviconUrl || default_favicon} alt={item.netloc} />
          </div>
          <span>{item.netloc}</span>
        </div>
      </div>
      <div className="iconWrap">
        <Icon width={24} height={24} iconKey={`save_${item.isSaved}`} />
      </div>
    </DocumentStyled>
  );
};

export default Document;

const DocumentStyled = styled.div`
  width: 100%;
  padding: 16px 40px;

  > .imgWrap {
    display: inline-flex;
    width: 72px;
    height: 72px;
    border-radius: 12px;
    margin-right: 16px;
    overflow: hidden;
    justify-content: center;
  }

  .content {
    display: inline-flex;
    flex-direction: column;
    width: calc(100% - 152px);
    height: 72px;
    gap: 14px;
    margin-right: 40px;
    cursor: pointer;

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
      width: 100%;
      height: 14px;
      display: flex;
      gap: 6px;

      > .imgWrap {
        width: 14px;

        img {
          width: 100%;
        }
      }
    }
  }

  > .iconWrap {
    width: 24px;
    height: 72px;
    display: inline-flex;
    align-items: center;
    cursor: pointer;
  }
`;
