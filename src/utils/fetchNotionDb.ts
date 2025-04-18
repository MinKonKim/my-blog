interface FetchNotionDBProps {
  number?: number | null;
  tag?: string;
}

export const fetchNotionDb = async ({ number, tag }: FetchNotionDBProps) => {
  const baseUrl = process.env.BASE_URL || "http://localhost:3000"; // fallback

  const params = new URLSearchParams();
  if (number !== null && number !== undefined) {
    params.append("number", number.toString());
  }
  if (tag) {
    params.append("filter", tag);
  }

  const query = params.toString() ? `?${params.toString()}` : "";
  const url = `${baseUrl}/api/notion/database${query}`;

  const res = await fetch(url, {
    // SSR 대응: Next.js 서버에서 실행될 수 있음
    // cache: "no-store", // ISR 적용 안 하려면
    next: { revalidate: 60 }, // ISR 적용 시
  });

  if (!res.ok) {
    throw new Error(`Notion 데이터 로드 실패: ${res.statusText}`);
  }

  return res.json();
};
