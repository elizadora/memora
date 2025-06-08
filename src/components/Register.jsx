import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import registerImage from '../assets/registerImage.svg';

import { createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import { auth, db } from '../services/firebaseConfig';

export default function Register() {
    const [user, setUser] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: ""
    });

    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleRegister = async (event) => {
        event.preventDefault();
        setLoading(true);

        if (user.password !== user.confirmPassword) {
            alert("As senhas não coincidem!");
            setLoading(false);
            return;
        }

        try {
            const result = await createUserWithEmailAndPassword(auth, user.email, user.password);

            await setDoc(doc(db, "users", result.user.uid), {
                name: user.name,
                email: user.email,
            });

            alert("Usuário cadastrado com sucesso!");
            navigate('/dashboard');

        } catch (error) {
            if (error.code === 'auth/email-already-in-use') {
                alert("Email já cadastrado!");
            } else if (error.code === 'auth/invalid-email') {
                alert("Email inválido!");
            } else if (error.code === 'auth/weak-password') {
                alert("Senha muito fraca! Deve ter pelo menos 6 caracteres.");
            } else {
                alert("Erro ao cadastrar usuário: " + error.message);
            }
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="md:bg-white-smoke flex lg:w-2/3 min-h-[533px] rounded-3xl w-9/10">
            <div className="lg:flex justify-center items-center w-1/2 p-10 hidden">
                <img src={registerImage} className="max-w-full h-[400px] object-contain" alt="Registro" />
            </div>
            <div className="bg-oxford-blue lg:rounded-r-3xl lg:rounded-l-none rounded-3xl text-white-smoke text-center flex flex-col items-center lg:w-1/2 w-full">
                <div className="p-10">
                    <p className="text-3xl font-roboto-slab">Crie sua conta</p>
                    <p className="text-xl font-open-sans text-platium">Estude onde e quando quiser</p>
                </div>
                <form onSubmit={handleRegister} className=" w-7/10 flex flex-col gap-4">
                    <input value={user.name} onChange={(e) => setUser({ ...user, name: e.target.value })} className="w-full bg-white-smoke text-gray-500 p-2 rounded-md" type="text" placeholder="Digite seu nome" required />
                    <input value={user.email} onChange={(e) => setUser({ ...user, email: e.target.value })} className="w-full bg-white-smoke text-gray-500 p-2 rounded-md" type="email" placeholder="Digite seu email" required />
                    <input value={user.password} onChange={(e) => setUser({ ...user, password: e.target.value })} className="w-full bg-white-smoke text-gray-500 p-2 rounded-md" type="password" placeholder="Digite sua senha" required />
                    <input value={user.confirmPassword} onChange={(e) => setUser({ ...user, confirmPassword: e.target.value })} className="w-full bg-white-smoke text-gray-500 p-2 rounded-md" type="password" placeholder="Confirmar senha" required />

                    <button
                        type="submit"
                        disabled={loading}
                        className="bg-orange hover:opacity-95 text-oxford-blue p-2 uppercase font-roboto-slab font-medium rounded-md cursor-pointer"
                    >
                        {loading ? "Cadastrando..." : "Cadastrar"}
                    </button>
                </form>

                <p className="pt-4 font-open-sans pb-4">Já tem conta? <Link to="/login" className="text-orange">Faça Login</Link> </p>
            </div>
        </div>
    );
}
