import { ArrowLeft } from "flowbite-react-icons/outline";
import Login from "../components/Login"
import Register from "../components/Register";

export default function Access({type}) {
    return (
        <div className="flex flex-col min-h-screen">
            <p className="w-full font-open-sans pt-2.5 pl-2.5 text-oxford-blue font-bold text-2xl"><ArrowLeft className="w-15 h-15 cursor-pointer" /> </p>
            <main className="flex justify-center items-center flex-1">
                {type === 'login'? <Login /> : <Register />}
            </main>
        </div>
    )
}