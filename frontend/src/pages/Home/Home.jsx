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
      <h1>Hello</h1>
      {data.map((item) => (
        <h1>{item}</h1>
      ))}
    </>
  );
}

export default Home;
