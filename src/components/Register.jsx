import registerImage from '../assets/registerImage.svg';
import { Link, useNavigate } from 'react-router-dom';

export default function Register() {
    const navigate = useNavigate();

    function handleRegister(event) {
        event.preventDefault();
        navigate('/dashboard');
    }

    return (
        <div className="md:bg-white-smoke flex lg:w-5xl rounded-3xl w-9/10">
            <div className="lg:flex justify-center items-center w-1/2 p-10 hidden">
                <img src={registerImage} className="max-w-full h-[400px] object-contain" alt="Registro" />
            </div>
            {/* Forms */}
            <div className="bg-oxford-blue lg:rounded-r-3xl lg:rounded-l-none rounded-3xl  text-white-smoke text-center flex flex-col items-center lg:w-1/2 w-full">
                <div className="p-10">
                    <p className="text-3xl font-roboto-slab">Crie sua conta</p>
                    <p className="text-xl font-open-sans text-platium">Estude onde e quando quiser</p>
                </div>
                <form className=" w-7/10 flex flex-col gap-4">
                    <input className="w-full bg-white-smoke text-gray-500 p-2 rounded-md" type="text" placeholder="Digite seu nome" />
                    <input className="w-full bg-white-smoke text-gray-500 p-2 rounded-md" type="email" placeholder="Digite seu email" />
                    <input className="w-full bg-white-smoke text-gray-500 p-2 rounded-md" type="password" placeholder="Digite sua senha" />
                    <input className="w-full bg-white-smoke text-gray-500 p-2 rounded-md" type="password" placeholder="Confirmar senha" />

                    <button onClick={handleRegister} className="bg-orange hover:opacity-95 text-oxford-blue p-2 uppercase font-roboto-slab font-medium rounded-md cursor-pointer">cadastrar</button>
                </form>

                <p className="pt-4 font-open-sans pb-4">Ja tem conta? <Link to="/login" className="text-orange">Faça Login</Link> </p>

            </div>
        </div>
    )
}