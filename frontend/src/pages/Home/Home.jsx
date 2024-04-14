import { useEffect, useState } from "react";

function Home() {
  const [data, setData] = useState(["test", "test"]);

  useEffect(() => {
    fetch("/api/test")
      .then((res) => {
        console.log(res);
        return res.json();
      })
      .then((data) => {
        setData(data);
      });
  }, []);
  return (
    <>
      <h1>{data?.[2]}</h1>
    </>
  );
}

export default Home;
