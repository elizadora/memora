import CardFeatures from "./CardFeatures";
import { Clock, Clipboard, CheckCircle } from "flowbite-react-icons/solid";

export default function FeaturesSection (){
    return (
        <section className="bg-white-smoke w-full flex justify-center flex-col items-center gap-12 mt-28 pb-28">
            <h3 className="font-roboto-slab md:text-4xl text-3xl  text-rich-black font-medium mt-10">Funcionalidades</h3>
            <div className="flex justify-evenly md:flex-row flex-col gap-10 md:gap-0">
                <CardFeatures icon={<CheckCircle className="w-12 h-12" />} title="Criar decks" text="Organize seus cards por assunto. Comece criando um deck com nome, categoria e  descrição, e depois adicione seus cards."/>
                <CardFeatures icon={<Clipboard className="w-12 h-12"/>} title="Revisar conteúdos" text="Navegue entre os cards e revise tudo de forma prática, rápida e sem complicações."/>
                <CardFeatures icon={<Clock className="w-12 h-12" />} title="Estude no seu ritmo" text="Acesse de qualquer lugar, a qualquer hora, perfeito para revisar quando quiser."/>
            </div>

        </section>
    )
}