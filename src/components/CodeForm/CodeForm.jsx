import { useState } from "react";

const CodeForm = () => {
    const [isWorngCode, setIsWrongCode] = useState(false)
    const CODES = [`${import.meta.env.VITE_MARU_CODE}`, `${import.meta.env.VITE_RENZO_CODE}`, `${import.meta.env.VITE_XIME_CODE}`, `${import.meta.env.VITE_GABI_CODE}`]
    console.log(CODES);
    const handleCodeCheck = (e) => {
        e.preventDefault()
        console.log(e.target.code.value);
        if(!CODES.includes(e.target.code.value)) {
            setIsWrongCode(true)
        } else {
            setIsWrongCode(false)
        }
    }
    return (
        <form className="flex flex-col items-center gap-2" onSubmit={handleCodeCheck}>
            <input className="px-2 py-2 text-center text-black bg-white rounded-md" type="text" name="code" defaultValue=""/>
            <p className={`${isWorngCode ? "block" : "hidden"} text-[#ff0000] font-text`}>Codigo equivocado o inexistente</p>
            <button className="px-3 py-2 text-white rounded-md bg-primary w-fit" type="submit">Enviar codigo</button>
        </form>
    )
}

export default CodeForm