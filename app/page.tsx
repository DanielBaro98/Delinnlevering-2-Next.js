import Image from "next/image";
import styles from "./page.module.css";

export default async function TestPage() {
  const res = await fetch("https://api.themoviedb.org/3/movie/99999999", {
    headers: {
      Authorization: `Bearer ${process.env.TMDB_ACCESS_TOKEN}`,
    },
  });
  console.log("TESTTESTTEST");
  console.log("res.status:", res.status);
  console.log("res.ok", res.ok);

  const data = await res.json();
  console.log("TMDB Response:", JSON.stringify(data, null, 2));

  return (
    <main style={{ padding: "2rem" }}>
      <h1>Check your terminal!</h1>
      <p>Movie Title: {data.title}</p>
    </main>
  );
}
