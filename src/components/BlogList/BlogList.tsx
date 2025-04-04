import { fetchNotionDb } from '@/utils/fetchNotionDb'
import React from 'react'

const BlogList = async() => {
  const list =  await fetchNotionDb();
  if(!Array.isArray(list)){
    return (
    <div>
        <p>목록이 존재하지 않습니다</p>
    </div>
    )
  }
  return (
    <div className=''>
        <h2 className='text-4xl'>포스트</h2>
            {list.length ===0?<p>포스트가 없습니다.</p> :
            <ul>
                {list.map((item) => (
                <div key={item.id}>
                    
                {/* 데이터베이스의 속성에 따라 렌더링 */}
                 <h2>{item.properties.이름.title[0].plain_text}</h2>
                 {/* 기타 속성 렌더링 */}
             </div>
             ))}
            </ul>}
    </div>
  )
}

export default BlogList