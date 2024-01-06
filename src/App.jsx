function App() {
    const handleCodeCheck = (e) => {
        e.preventDefault()
        console.log(e.target.code.value);
    }
    return (
    <main className="flex flex-col items-center justify-center w-screen h-screen gap-4 bg-black">
        <section className="flex flex-col items-center justify-center">
            <h1 className="text-6xl text-white font-title">KING RECAP</h1>
            <h2 className="text-white font-text">Edición 2023</h2>
        </section>
        <section className="max-w-[400px]">
            <p className="mt-4 mb-4 text-center text-white font-text">Para participar de esta edición necesitas un codigo que King te enviara personalmente.</p>
            <form className="flex flex-col items-center gap-2" onSubmit={handleCodeCheck}>
                <input className="px-2 py-2 text-center text-black bg-white rounded-md" type="text" name="code" defaultValue=""/>
                <button className="px-3 py-2 text-white rounded-md bg-primary w-fit" type="submit">Enviar codigo</button>
            </form>
        </section>
    </main>
    )
}

export default App
