import AuthenticationModal from "./components/Auth";
import Login from "./components/Login";
import Link from "next/link"
import PopButton from "./components/PopButton";

export default function Home() {
  return (
    <>
      <div className="h-screen flex justify-center items-center">
        <div className="h-full">
        <PopButton/>
        </div>
        <div className="hidden sm:block sm:w-[10%] h-full ">
          
        <AuthenticationModal/>
        <Link href="/student">Student</Link>
        </div>

        <div className="h-full w-full sm:w-[90%] bg-gray-200 flex justify-center items-center">
        <Login/>
       
        </div>
      </div>
    </>
  );
}
