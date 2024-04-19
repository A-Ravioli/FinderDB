const getClaimedItems = async () => {
  const res = await fetch("/api/claimed-items");
  const data = await res.json();
  return data;
};

export default getClaimedItems;
