import { useState } from "react";
import Main from "./components/Main/Main";


function App() {
    const [currentStage, setCurrentStage] = useState(1)
    return (
        <Main />
    )
}

export default App
