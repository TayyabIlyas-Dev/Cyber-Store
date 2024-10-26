import Image from "next/image";
import Link from "next/link";
import { posts } from "./data/post-data";
import { title } from "process";
import HeroOne from "./components/HeroOne";
import Navbar from "./components/Navbar";
import HeroTwo from "./components/HeroTwo";
import HeroThree from "./components/HeroThree";
import HeroFour from "./components/HeroFour";


export default function Home() {
  return (
    <>
   
    <div>
      <HeroOne/>
    </div>
    <div>
      <HeroTwo/>
    </div>
    <div>
      <HeroThree/>
    </div>
    <div>
      <HeroFour/>
    </div>
    </>
   
  );
}
