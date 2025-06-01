import registerImage from '../assets/registerImage.svg';


export default function Register() {
    return (
        <div className="bg-white-smoke flex w-5xl rounded-l-3xl">
            <div className="flex justify-center items-center w-1/2 p-10">
                <img src={registerImage} className="max-w-full h-[400px] object-contain" alt="Registro" />
            </div>
            {/* Forms */}
            <div className="bg-oxford-blue rounded-r-3xl text-center text-white flex flex-col items-center w-1/2">
                <div className="p-10">
                    <p className="text-3xl font-roboto-slab">Crie sua conta</p>
                    <p className="text-xl font-open-sans">Estude onde e quando quiser</p>
                </div>
                <form className=" w-8/10 flex flex-col gap-4">
                    <input className="w-full bg-white-smoke text-gray-500 p-2 rounded-md" type="text" placeholder="Digite seu nome" />
                    <input className="w-full bg-white-smoke text-gray-500 p-2 rounded-md" type="email" placeholder="Digite seu nome" />
                    <input className="w-full bg-white-smoke text-gray-500 p-2 rounded-md" type="password" placeholder="Digite seu nome" />
                    <input className="w-full bg-white-smoke text-gray-500 p-2 rounded-md" type="password" placeholder="Digite seu nome" />

                    <button className="bg-orange text-oxford-blue p-2 uppercase font-roboto-slab font-medium rounded-md cursor-pointer">cadastrar</button>
                </form>

                <p className="pt-4 font-open-sans">Ja tem conta? <a href="#" className="text-orange">Faça Login</a> </p>

            </div>
        </div>
    )

}