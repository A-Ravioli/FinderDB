const deleteItem = async (itemId, queryClient) => {
  const params = new URLSearchParams({
    itemId: itemId,
  });

  const res = await fetch(`/api/delete-item?` + params, {
    method: "DELETE",
  });

  queryClient.invalidateQueries({ queryKey: ["items"] });

  return await res.json();
};

export default deleteItem;
