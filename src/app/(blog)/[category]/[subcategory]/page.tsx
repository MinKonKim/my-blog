interface Post {
  title: string;
  content: string;
  category: string;
  subcategory: string;
}

const allPosts: Post[] = [
  {
    title: "React 프로젝트 만들기",
    content: "내용...",
    category: "project",
    subcategory: "react",
  },
  {
    title: "UI/UX 기본 원칙",
    content: "내용...",
    category: "post",
    subcategory: "ui-ux",
  },
];

export async function generateStaticParams() {
  return [
    { category: "project", subcategory: "react" },
    { category: "project", subcategory: "nextjs" },
    { category: "post", subcategory: "javascript" },
    { category: "post", subcategory: "ui-ux" },
  ];
}
const CategoryPage = async ({
  params,
}: {
  params: Promise<{ category: string; subcategory: string }>;
}) => {
  const { category, subcategory } = await params;
  const filtered = allPosts.filter(
    (post) => post.category === category && post.subcategory === subcategory
  );

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">
        {category} / {subcategory}
      </h1>
      <ul className="space-y-2">
        {filtered.map((post, idx) => (
          <li key={idx} className="p-4 border rounded bg-white shadow">
            <h2 className="text-lg font-semibold">{post.title}</h2>
            <p className="text-sm text-gray-700">{post.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategoryPage;
