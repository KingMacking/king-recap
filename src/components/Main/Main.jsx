import CodeForm from "../CodeForm/CodeForm"
import kingK from "../../assets/kingK.svg"

const Main = () => {
    return (
        <main className="flex flex-col items-center justify-center w-screen h-screen gap-4 bg-black">
        <section className="flex flex-col items-center justify-center">
            <img src={kingK} alt="K from King logo" className="mb-4 max-w-24" />
            <h1 className="text-6xl text-white font-title">KING RECAP</h1>
            <h2 className="text-white font-text">Edición 2023</h2>
        </section>
        <section className="max-w-[400px]">
            <p className="mt-4 mb-4 text-center text-white font-text">Para participar de esta edición necesitas un codigo que King te enviara personalmente.</p>
            <CodeForm />
        </section>
    </main>
    )
}

export default Main