import { useQuery } from "@tanstack/react-query";
import { getDocumentsAPI } from "./../apis/searchAPI";

export const useGetDocumentsQuery = (
  keyword: string,
  enabled: boolean = true
) => {
  const query = useQuery(
    ["GetDocuments", keyword],
    () => getDocumentsAPI(keyword),
    { enabled: enabled }
  );

  return query;
};
