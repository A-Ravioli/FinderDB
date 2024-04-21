const getClaimedItems = async (employeeId) => {
  const params = new URLSearchParams({
    employeeId: employeeId,
  });
  const res = await fetch(`/api/claimed-items?` + params, {
    method: "GET",
  });
  const data = await res.json();
  return data;
};

export default getClaimedItems;
