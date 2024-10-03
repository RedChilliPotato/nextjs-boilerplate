import Link from "next/link";
import PopButton from "../components/PopButton";
import Navbar from "../components/Navbar";



export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="h-screen flex">
    <div className="w-[10%]">
        <PopButton/>
        <div className="hidden sm:block ">
        <Link href="/">Home</Link>
        <br />
        <Link href="/student">Student</Link>
        <br />
        <Link href="/teacher">Teacher</Link>
        </div>
    </div>    

    <div className="w-[90%]">

    <Navbar/>

    {children}

    </div>

    </div>

       
       
  );
}
