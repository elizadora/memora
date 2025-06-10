export default function Card({ question, answer, onMode }) {
    return (
        <div className="flex flex-col gap-10 items-center shadow-md border-rich-black border-2 justify-center bg-platium w-[262px] h-[309px] rounded-md">
            <h2 className="text-xl">Pergunta: {question}</h2>
            <p className="text-xl">Resposta: {answer}</p>
            <button className="bg-crimson text-md text-white-smoke py-2 px-8 rounded-3xl cursor-pointer" onClick={onMode}>Remover</button>
        </div>
    );
}