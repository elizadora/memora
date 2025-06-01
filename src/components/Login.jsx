import registerImage from '../assets/registerImage.svg';


export default function Login() {
    return (
        <div className="md:bg-white-smoke flex lg:w-5xl rounded-3xl">
            <div className="lg:flex justify-center items-center w-1/2 p-10 hidden">
                <img src={registerImage} className="max-w-full h-[400px] object-contain" alt="Login" />
            </div>
            {/* Forms */}
            <div className="bg-oxford-blue md:rounded-r-3xl md:rounded-l-none rounded-3xl text-center text-white-smoke flex flex-col items-center lg:w-1/2 w-full">
                <div className="p-10">
                    <p className="text-3xl font-roboto-slab">Acesse sua conta</p>
                    <p className="text-xl font-open-sans text-platium">Aprender nunca foi tão fácil</p>
                </div>
                <form className=" w-7/10 flex flex-col gap-6">
                    <input className="w-full bg-white-smoke text-gray-500 p-2 rounded-md" type="email" placeholder="Digite seu email" />
                    <input className="w-full bg-white-smoke text-gray-500 p-2 rounded-md" type="password" placeholder="Digite sua senha" />
                    <button className="bg-orange text-oxford-blue p-2 mt-2 uppercase font-roboto-slab font-medium rounded-md cursor-pointer">entrar</button>
                </form>

                <p className="pt-4 font-open-sans pb-4">Não tem conta? <a href="#" className="text-orange">Cadastre-se</a> </p>

            </div>
        </div>
    )

}