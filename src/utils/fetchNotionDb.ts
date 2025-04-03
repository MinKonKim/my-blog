export const fetchNotionDb = async()=>{
    const res = await fetch(`${process.env.BASE_URL}/api/notion`);
    const data = await res.json();
    return data;
}