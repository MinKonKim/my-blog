interface fetchNotionDBProps {
  number?: number;
}

export const fetchNotionDb = async ({ number }: fetchNotionDBProps) => {
  const query = number === null ? "" : `?number=${number}`;
  const res = await fetch(
    `${process.env.BASE_URL}/api/notion/database${query}`
  );
  const data = await res.json();
  return data;
};
