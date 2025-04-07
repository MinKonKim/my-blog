export const fetchNotionDb = async () => {
  const res = await fetch(`${process.env.BASE_URL}/api/notion/database`);
  const data = await res.json();
  return data;
};
