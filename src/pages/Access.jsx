import { ArrowLeft } from "flowbite-react-icons/outline";
import Login from "../components/Login"
import Register from "../components/Register";
import { useNavigate } from "react-router-dom";

export default function Access({type}) {
    const navigate = useNavigate();

    function handleHomeClick(){
        navigate("/");
    }

    return (
        <div className="flex flex-col min-h-screen">
            <p className="w-full font-open-sans pt-2.5 pl-2.5 text-oxford-blue font-bold text-2xl"><ArrowLeft onClick={handleHomeClick} className="w-15 h-15 cursor-pointer" /> </p>
            <main className="flex justify-center items-center flex-1">
                {type === 'login'? <Login /> : <Register />}
            </main>
        </div>
    )
}