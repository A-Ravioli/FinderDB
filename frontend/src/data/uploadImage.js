const uploadImage = async (formData, itemId) => {
  const res = await fetch(
    `https://api.cloudinary.com/v1_1/ddagc2zs9/auto/upload`,
    {
      method: "POST",
      body: formData,
    }
  );

  return await res.json();
};

export default uploadImage;

// Token: ya29.a0Ad52N3_ap6F-9EFFZQyWDJlDCdtky9lfchHm2PAakwdKuh-SWOkqfuI7DwlS3_kmaRBeEJtsuAjgB-YuhzNi4Yak-ZUBgz9Ey5nL-gOjcz_98zz1I861x9iE-PcFM5Vem4G47HaZ15ajRibRaYTLtVUnuQsl6RVx1ugCaCgYKATcSARISFQHGX2MiqYwqoqN-lriTmC9Pt4yBBQ0171

// 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
