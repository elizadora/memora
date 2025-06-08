import { UserCircle } from "flowbite-react-icons/solid";
import { useContext, useEffect, useState } from "react";
import { DialogContext } from "../context/DialogContext";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { updatePassword } from "firebase/auth";
import { auth, db } from "../services/firebaseConfig";

export default function Account() {
    const [user, setUser] = useState({
        name: "",
        email: "",
        password: "*******",
    })

    const [changeDisabled, setChangeDisabled] = useState(true);

    const { openDialog } = useContext(DialogContext);

    const fecthUser = async () => {
        try {
            const docRef = doc(db, "users", localStorage.getItem("id"));
            const docData = await getDoc(docRef);

            if (docData.exists()) {
                setUser({
                    name: docData.data().name,
                    email: docData.data().email,
                    password: "*******",
                });
            }
        } catch (error) {
            alert(error);
        }
    }
    
    const handleDisabled = (event) => {
        event.preventDefault();
        setChangeDisabled(!changeDisabled);
        setUser({
            ...user,
            password: "",
        });
    }

    useEffect(() =>{
        fecthUser();
    },[])


    const handleEditAccount = (event) => {
        event.preventDefault();

        openDialog(
            "Editar Conta",
            "Tem certeza que deseja salvar as alterações? Esta ação não pode ser desfeita.",
            () => {
                saveEditedAccount();
            }
        );
    }

    const saveEditedAccount = async() =>{
        try{
             const userDocRef = doc(db, "users", localStorage.getItem("id"));
        
            await updateDoc(userDocRef, {
                name: user.name
            });

            // update password if it is not the default value
            if(user.password !== ""){
                const userCurrent = auth.currentUser;
                console.log(user);
                await updatePassword(userCurrent, user.password);
            }


            setChangeDisabled(true);
            alert("Conta atualizada com sucesso!");
        }catch(error){
            alert("Erro ao salvar as alterações: " + error.message);
        }
    }


    const handleDelteAccount = () => {
        openDialog(
            "Apagar Conta",
            "Tem certeza que deseja apagar sua conta? Esta ação não pode ser desfeita.",
            () => {
                console.log("Conta apagada");
            }
        );
    }


    return (
        <>
            <main className="flex justify-center items-center">
                <div className="bg-white-smoke flex flex-col items-center p-10 rounded-md gap-10 md:w-1/2 lg:w-1/3 max-w-9/10 shadow-md">
                    <div className="flex items-center justify-center w-full">
                        <UserCircle className="w-1/4 h-2/5 text-rich-black" />
                    </div>
                    <form onSubmit={handleEditAccount} className="flex flex-col items-center justify-center gap-6 w-full">
                        <input value={user.name} onChange={(e) => setUser({...user, name: e.target.value})} className={`w-full p-2 rounded-md ${changeDisabled ? "bg-gray-400/50 text-black" : "bg-platium text-rich-black"}`} type="text" disabled={changeDisabled} placeholder="Nome" />
                        <input value={user.email} className="w-full p-2 rounded-md bg-gray-400/50 text-black" type="email" disabled placeholder="Email" />
                        <input value={user.password} onChange={(e) => setUser({...user, password: e.target.value})} className={`w-full p-2 rounded-md ${changeDisabled ? "bg-gray-400/50 text-black" : "bg-platium text-rich-black"}`} type="password" disabled={changeDisabled} placeholder="Digite sua nova senha" />
                        <div className="flex flex-col gap-3 w-full font-roboto-slab">
                            <button type={changeDisabled ? "button" : "submit"}
                                onClick={changeDisabled ? handleDisabled : undefined}
                                className="bg-rich-black text-white-smoke p-2 rounded-md hover:opacity-95 cursor-pointer">
                                {changeDisabled ? "Editar" : "Salvar Alterações"}
                            </button>
                            <button onClick={handleDelteAccount} type="button" className="bg-crimson text-white-smoke p-2 rounded-md hover:opacity-95 cursor-pointer">Apagar Conta</button>
                        </div>
                    </form>
                </div>
            </main>
        </>
    );
}
