const uploadImage = async (img, itemId) => {
  const renamedFile = new File([img], itemId, { type: "img/png" });
  const res = await fetch(
    `https://storage.googleapis.com/upload/storage/v1/b/finderdb/o/?uploadType=media&name=${itemId}`,
    {
      method: "POST",
      headers: {
        Authorization:
          "Bearer ya29.a0Ad52N3_ap6F-9EFFZQyWDJlDCdtky9lfchHm2PAakwdKuh-SWOkqfuI7DwlS3_kmaRBeEJtsuAjgB-YuhzNi4Yak-ZUBgz9Ey5nL-gOjcz_98zz1I861x9iE-PcFM5Vem4G47HaZ15ajRibRaYTLtVUnuQsl6RVx1ugCaCgYKATcSARISFQHGX2MiqYwqoqN-lriTmC9Pt4yBBQ0171",
      },
      body: renamedFile,
    }
  );

  return res.json();
};

export default uploadImage;

// ya29.a0Ad52N3_ap6F-9EFFZQyWDJlDCdtky9lfchHm2PAakwdKuh-SWOkqfuI7DwlS3_kmaRBeEJtsuAjgB-YuhzNi4Yak-ZUBgz9Ey5nL-gOjcz_98zz1I861x9iE-PcFM5Vem4G47HaZ15ajRibRaYTLtVUnuQsl6RVx1ugCaCgYKATcSARISFQHGX2MiqYwqoqN-lriTmC9Pt4yBBQ0171
