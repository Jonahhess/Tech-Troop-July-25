import { useEffect, useState } from "react";
import Card from "./card";
import "./Exercise2.css";

export default function Exercise2({ url }) {
  const [data, setData] = useState(null);

  useEffect(() => {
    const getData = async function () {
      const cached = localStorage.getItem("posts");

      if (cached) setData(JSON.parse(cached));
      const res = await fetch(url);
      if (!res.ok) {
        return;
      }
      const body = await res.json();
      const top10 = body.filter((_, i) => i < 10);
      localStorage.setItem("posts", JSON.stringify(top10));
      setData(top10);
    };
    getData();
  }, []);

  return (
    <>
      {data?.map((obj, index) => (
        <Card obj={obj} key={index} />
      ))}
    </>
  );
}
