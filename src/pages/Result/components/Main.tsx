import { useEffect, useRef } from "react";
import styled from "styled-components";
import { useGetDocumentsQuery } from "../../../quries/searchQuery";
import { useAppSelector } from "../../../redux/hooks";
import { RootState } from "../../../redux/store";
import Document from "./Document";
import DocumentSkeleton from "./DocumentSkeleton";

const Main = () => {
  const keyword = useAppSelector((state: RootState) => state.keyword);
  const getDocuments = useGetDocumentsQuery(keyword);
  const targetRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleObserver = (
      entries: IntersectionObserverEntry[],
      observer: IntersectionObserver
    ) => {
      const target = entries[0];
      if (target.isIntersecting) {
        observer.unobserve(target.target);
        getDocuments.fetchNextPage();
      }
    };

    const option = { rootMargin: "0px", threshold: 0 };
    const observer = new IntersectionObserver(handleObserver, option);
    if (
      targetRef.current &&
      getDocuments.hasNextPage &&
      !getDocuments.isFetchingNextPage
    ) {
      observer.observe(targetRef.current);
    }

    return () => observer.disconnect();
  }, [getDocuments]);

  return (
    <MainStyled>
      {getDocuments.documents.map((document, index, documents) => (
        <Document
          key={new Date().toString() + index}
          item={document}
          targetRef={documents.length === index + 1 ? targetRef : null}
        />
      ))}
      {getDocuments.isFetching &&
        [...Array(20)].map((_arry, index) => (
          <DocumentSkeleton key={new Date().toString() + index} />
        ))}
    </MainStyled>
  );
};

export default Main;

const MainStyled = styled.main`
  width: 100%;
  height: calc(100vh - 80px);
  overflow: auto;

  &::-webkit-scrollbar {
    display: none;
  }

  -ms-overflow-style: none;
  scrollbar-width: none;
`;
