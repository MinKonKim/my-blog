export async function generateMetadata({
  params,
}: {
  params: { category: string; subcategory: string };
}) {
  return {
    title: `${params.subcategory} | ${params.category} 블로그 카테고리`,
    description: `${params.subcategory} 글 목록 페이지입니다.`,
  };
}
