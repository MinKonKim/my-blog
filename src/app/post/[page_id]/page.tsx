import { fetchPostData } from "@/utils/fetchPostData";
import React from "react";

interface PostPageProps {
  params: Promise<{ pageId: string }>;
}

const PostPage = async ({ params }: PostPageProps) => {
  const { pageId } = await params;
  await fetchPostData(pageId);

  return <div>page</div>;
};

export default PostPage;
