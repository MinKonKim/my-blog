// 페이지 데이터를 가져오는 함수 (캐시 없음)
export const fetchPostData = async (pageId: string) => {
  const res = await fetch(
    `${process.env.BASE_URL}/api/notion/post?pageId=${pageId}`,
    {
      method: "GET",
      cache: "force-cache",
    }
  );

  const data = await res.json();
  console.log(data);
  return data;
};
