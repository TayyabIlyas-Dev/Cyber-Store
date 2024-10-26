'use client'
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";


export default function Post() {
const router = useRouter();
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
           <h1 className="font-bold text-4xl">This is Post</h1>
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        
     
      </div>
 

<Link href='/'>Go To Home 
</Link>

<button className="p-2 px-4 border rounded-2xl bg-slate-400 text-white" onClick={()=>{router.push('/')}}>Go to Home</button>

    </main>
  );
}
