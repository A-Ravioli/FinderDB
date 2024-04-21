const getItems = async () => {
  const res = await fetch("/api/all-items");
  const data = await res.json();
  return data;
};

export default getItems;
