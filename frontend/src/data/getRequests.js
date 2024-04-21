async function getRequests() {
  const res = await fetch("/api/all-requests");
  const data = await res.json();
  return data;
}

export default getRequests;
