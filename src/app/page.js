"use client"
import State from "./State";
import styles from "./page.module.css";

export default function Home() {
  const fun =() => {
    alert("Hello Programmers")
  }
  return (
    <main>
      <h1 className="mt-10">Helloworld</h1>
      <button onClick={fun}>Hello</button>
      <State />
    </main>
  );
}
