// hooks/useNotionDB.ts
import { useQuery } from "@tanstack/react-query";

export interface NotionPage {
  id: string;
  created_time: string;
  // 필요한 필드들 추가
  title: string;
}

interface UseNotionDBOptions {
  number?: number;
  enabled?: boolean; // optional: 조건부 실행
}

export const useNotionDB = ({
  number = 10,
  enabled = true,
}: UseNotionDBOptions) => {
  return useQuery({
    queryKey: ["notionDB", number],
    queryFn: () => enabled,
    staleTime: 1000 * 60 * 5, // 5분 동안 fresh 상태 유지
  });
};
