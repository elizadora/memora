import { ArrowLeft } from "flowbite-react-icons/outline";
import Login from "../components/Login"
import Register from "../components/Register";

export default function Access() {
    return (
        <>
            <p className="w-full cursor-pointer font-open-sans pt-2.5 pl-2.5 text-oxford-blue font-bold text-2xl"><ArrowLeft className="w-15 h-15" /> </p>
            <main className="flex justify-center items-center h-screen">
                <Register />
                {/* <Login /> */}
            </main>
        </>
    )
}