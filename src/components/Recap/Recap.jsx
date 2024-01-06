import RecapGrid from "./RecapGrid"
import RecapText from "./RecapText"

const Recap = ({ user }) => {
    return (
        <main>
            <h2>Hola, {user.name}</h2>
            <RecapGrid />
            <RecapText />
        </main>
    )
}

export default Recap