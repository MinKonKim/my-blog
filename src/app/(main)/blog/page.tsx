import BlogList from "@/components/BlogList/BlogList";
import { fetchNotionDb } from "@/utils/fetchNotionDb";

const BlogPage = async ({
  searchParams,
}: {
  searchParams: Promise<{ tag?: string }>;
}) => {
  const { tag } = await searchParams;
  const posts = await fetchNotionDb({ tag: tag ?? "" });

  return (
    <div className="flex flex-col justify-center">
      <div className="p-10">
        <BlogList list={posts} />
      </div>
    </div>
  );
};
export default BlogPage;
