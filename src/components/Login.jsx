import { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import registerImage from '../assets/registerImage.svg';

import {signInWithEmailAndPassword} from 'firebase/auth';
import { auth } from '../services/firebaseConfig';
import { AuthContext } from '../context/AuthContext';

export default function Login() {
    const [user, setUser] = useState({
        email: "",
        password: ""
    });

    const navigate = useNavigate();

    const { singIn } = useContext(AuthContext)

    const handleLogin = async(event) => {
        event.preventDefault();

        if(!user.email.trim() || !user.password.trim()){
            alert("Preencha todos os campos");
            return;
        }

        try{
            const result =  await signInWithEmailAndPassword(auth, user.email, user.password);
            const userId = result.user.uid;
            const token = await result.user.getIdToken();
            
            await singIn(userId, token);

            console.log("Login realizado com sucesso");

            navigate('/dashboard');
        }catch(error){
            console.log("eror");
            return;
        }
        
    }

    return (
        <div className="md:bg-white-smoke flex lg:w-2/3 min-h-[533px] rounded-3xl w-9/10">
            <div className="lg:flex justify-center items-center w-1/2 p-10 hidden">
                <img src={registerImage} className="max-w-full h-[400px] object-contain" alt="Login" />
            </div>
            {/* Forms */}
            <div className="bg-oxford-blue lg:rounded-r-3xl lg:rounded-l-none rounded-3xl text-center text-white-smoke flex flex-col items-center lg:w-1/2 w-full">
                <div className="p-10">
                    <p className="text-3xl font-roboto-slab">Acesse sua conta</p>
                    <p className="text-xl font-open-sans text-platium">Aprender nunca foi tão fácil</p>
                </div>
                <form onSubmit={handleLogin} className=" w-7/10 flex flex-col gap-6">
                    <input value={user.email}  onChange={(e) => setUser({...user, email: e.target.value})} className="w-full bg-white-smoke text-gray-500 p-2 rounded-md" type="email" placeholder="Digite seu email" required/>
                    <input value={user.password} onChange={(e) => setUser({...user, password: e.target.value})} className="w-full bg-white-smoke text-gray-500 p-2 rounded-md" type="password" placeholder="Digite sua senha" required/>
                    <button type="submit" className="bg-orange hover:opacity-95 text-oxford-blue p-2 mt-2 uppercase font-roboto-slab font-medium rounded-md cursor-pointer">entrar</button>
                </form>

                <p className="pt-4 font-open-sans pb-4">Não tem conta? <Link to="/register" className="text-orange">Cadastre-se</Link> </p>

            </div>
        </div>
    )

}