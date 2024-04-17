const uploadImage = async (img) => {
  const res = await fetch("finderdb.storage.googleapis.com", {
    method: "POST",
    headers: {
      "Content-Type": "image/jpg",
    },
    body: img,
  });
  return res.json();
};

export default uploadImage;
