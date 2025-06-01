import { Github, Instagram, Linkedin } from "flowbite-react-icons/solid";

export default function Footer() {
    return (
        <footer className="bg-oxford-blue w-full h-[408px] flex flex-col text-platium justify-evenly items-center gap-10 font-roboto-slab">
            <h2 className="text-3xl">MEMORA</h2>
            <div className="flex gap-20">
                <Github  className="md:w-12  md:h-12  w-10 h-10 cursor-pointer"/>
                <Instagram  className="md:w-12  md:h-12  w-10 h-10 cursor-pointer"/>
                <Linkedin  className="md:w-12  md:h-12  w-10 h-10 cursor-pointer"/>
               
            </div>
            <p className="md:text-[20px] text-[15px] font-open-sans">© 2025 Memora. Todos os direitos reservados.</p>
        </footer>
    )
}