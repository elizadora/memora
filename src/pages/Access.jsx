import { ArrowLeft } from "flowbite-react-icons/outline";
import Register from "../components/Login";

export default function Access() {
    return (
        <>
            <p className="flex w-full items-center cursor-pointer font-open-sans pt-3.5 pl-0.5 text-oxford-blue font-bold gap-2 text-2xl"><ArrowLeft className="w-10 h-10" /> Voltar </p>
            <main className="flex justify-center items-center h-screen">
                <Register />
            </main>
        </>
    )
}