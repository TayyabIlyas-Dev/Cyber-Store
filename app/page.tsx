import Image from "next/image";
import Link from "next/link";
import { posts } from "./data/post-data";
import { title } from "process";
import HeroOne from "./components/HeroOne";
import Navbar from "./components/Navbar";
import HeroTwo from "./components/HeroTwo";


export default function Home() {
  return (
    <>
    <div>
    <Navbar/>
    </div>
    <div>
      <HeroOne/>
    </div>
    <div>
      <HeroTwo/>
    </div>
    </>
   
  );
}
