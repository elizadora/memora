import { useEffect, useState } from 'react';
import welcomeImage from '../assets/welcomeImage.svg';
import { doc, getDoc } from 'firebase/firestore';
import { auth, db } from '../services/firebaseConfig';


export default function WelcomeSection() {
    const [userName, setUserName] = useState("Usuário");

    const fetchUserName = async () => {
        try {
            const docRef = doc(db, "users", auth.currentUser.uid);
            const docData = await getDoc(docRef);

            if (docData.exists()) {
                setUserName(docData.data().name);
            }

        } catch (error) {
            alert(error);
        }
    }

    useEffect(() => {
        fetchUserName();
    },[])



    return (
        <section className="flex mt-20 xl:justify-around xl:px-0 lg:justify-between lg:px-10 lg:flex-row flex-col items-center lg:items-start gap-10 mb-10 px-2">
            <div className="flex flex-col md:w-1/3 gap-4 items-center lg:items-start text-center lg:text-left">
                <h3 className="text-oxford-blue md:text-4xl text-3xl font-medium font-roboto-slab">Olá, {userName}! o que vamos aprender hoje?</h3>
                <p className="lg:text-justify font-open-sans md:text-2xl text-xl text-chacoal">Aproveite os recursos disponíveis e continue sua jornada de aprendizado.</p>
                <div className="flex gap-8 items-center">
                    <button className="whitespace-nowrap rounded-3xl font-roboto-slab font-medium text-base bg-orange mt-6 px-8 py-2 cursor-pointer hover:opacity-90 text-oxford-blue transition ease-in duration-300">Criar Deck</button>
                    <button className="whitespace-nowrap rounded-3xl font-roboto-slab font-medium text-base border-orange border-3 mt-6 px-8 py-2 cursor-pointer hover:bg-orange text-oxford-blue transition ease-in duration-300">Criar Categoria</button>
                </div>
            </div>
            <img src={welcomeImage} alt="Welcome Image" className="lg:w-1/2 w-7/10 max-w-[526px]" />
        </section>
    )
}