import { useEffect, useState } from "react";

export default function Exercise1() {
  const [date, setDate] = useState(Date.now());
  useEffect(() => {
    const interval = setTimeout(() => {
      setDate(Date.now());
    }, 1000);
  });

  return <>{date}</>;
}
