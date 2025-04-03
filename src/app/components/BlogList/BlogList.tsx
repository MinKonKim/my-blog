import { fetchNotionDb } from '@/utils/fetchNotionDb'
import React from 'react'

const BlogList = async() => {
  const list =  await fetchNotionDb();
  console.log("DB LIST :",list);
  return (
    <div>BlogList</div>
  )
}

export default BlogList