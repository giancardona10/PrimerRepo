
// Componente App, siempre empieza con mayuscula (PascalCase),
import { TwitterFollowCard } from "./TwitterFollowCard";
import './App.css';


// Un componente es
export function App() {
    return (
        <section className='App'>
            <TwitterFollowCard userName='gianc' isFollowing>
                Giancarlo Cardona
            </TwitterFollowCard>
            
            <TwitterFollowCard userName='pheralb' isFollowing={false}>
                Pedro Hernandez
            </TwitterFollowCard>

            <TwitterFollowCard userName='pheralb' isFollowing={false}>
                Pedro Hernandez
            </TwitterFollowCard>
        </section>
    )
}