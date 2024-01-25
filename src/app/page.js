"use client"
import State from "./State";

import styles from "./page.module.css";
import { useRouter } from "next/navigation";
export default function Home() {

const Router = useRouter()
  return (
    <main>
      <h1 className="mt-10">Helloworld</h1>
      <button onClick={()=> Router.push("/class")}>Hello</button>
      <State />
      
    </main>
  );
}
