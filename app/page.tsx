import Login from "./components/Login";
import Link from "next/link"
import React from "react";

export default function Home() {
  return (
    <>
      
<div className="absolute top-14 left-0">
<Link href="/">Home</Link>
        <br />
        <Link href="/student">Student</Link>
        <br />
        <Link href="/teacher">Teacher</Link>
</div>
        <div className="h-screen w-full bg-gray-200 flex justify-center items-center">
          
        <Login/>
       
        </div>
    </>
  );
}
